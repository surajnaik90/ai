import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'data', 'thoughts.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure data directory and file exist
const ensureDataFile = () => {
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ thoughts: [] }, null, 2));
  }
};

// Read thoughts from file
const readThoughts = () => {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
};

// Write thoughts to file
const writeThoughts = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Routes

// Get all thoughts
app.get('/api/thoughts', (req, res) => {
  try {
    const { category, month, year } = req.query;
    let data = readThoughts();
    let thoughts = data.thoughts;

    // Apply filters
    if (category) {
      thoughts = thoughts.filter(t => t.category === category);
    }
    if (month && year) {
      thoughts = thoughts.filter(t => {
        const date = new Date(t.timestamp);
        return date.getMonth() + 1 === parseInt(month) && date.getFullYear() === parseInt(year);
      });
    } else if (year) {
      thoughts = thoughts.filter(t => {
        const date = new Date(t.timestamp);
        return date.getFullYear() === parseInt(year);
      });
    }

    res.json({ thoughts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch thoughts' });
  }
});

// Add a new thought
app.post('/api/thoughts', (req, res) => {
  try {
    const { content, category } = req.body;
    
    if (!content || !category) {
      return res.status(400).json({ error: 'Content and category are required' });
    }

    const data = readThoughts();
    const newThought = {
      id: Date.now().toString(),
      content,
      category,
      timestamp: new Date().toISOString(),
    };

    data.thoughts.push(newThought);
    writeThoughts(data);

    res.status(201).json(newThought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add thought' });
  }
});

// Delete a thought
app.delete('/api/thoughts/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = readThoughts();
    
    const index = data.thoughts.findIndex(t => t.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    data.thoughts.splice(index, 1);
    writeThoughts(data);

    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete thought' });
  }
});

// Get AI summary
app.post('/api/summary', (req, res) => {
  try {
    const { category, month, year } = req.body;
    let data = readThoughts();
    let thoughts = data.thoughts;

    // Apply filters
    if (category) {
      thoughts = thoughts.filter(t => t.category === category);
    }
    if (month && year) {
      thoughts = thoughts.filter(t => {
        const date = new Date(t.timestamp);
        return date.getMonth() + 1 === parseInt(month) && date.getFullYear() === parseInt(year);
      });
    } else if (year) {
      thoughts = thoughts.filter(t => {
        const date = new Date(t.timestamp);
        return date.getFullYear() === parseInt(year);
      });
    }

    // Simple summary (can be enhanced with actual AI later)
    const summary = {
      totalThoughts: thoughts.length,
      categories: [...new Set(thoughts.map(t => t.category))],
      dateRange: thoughts.length > 0 ? {
        first: new Date(Math.min(...thoughts.map(t => new Date(t.timestamp)))).toLocaleDateString(),
        last: new Date(Math.max(...thoughts.map(t => new Date(t.timestamp)))).toLocaleDateString(),
      } : null,
      preview: thoughts.slice(0, 5).map(t => ({
        category: t.category,
        snippet: t.content.substring(0, 100) + (t.content.length > 100 ? '...' : ''),
        date: new Date(t.timestamp).toLocaleDateString()
      }))
    };

    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate summary' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  ensureDataFile();
});
