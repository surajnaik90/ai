# 💭 Thought Capture Web Application

A full-stack web application to capture and organize your thoughts on various topics.

## 🎯 Features

- **Add Thoughts**: Capture your thoughts on different topics
- **Fetch Thoughts**: View all thoughts or filter by topic
- **Delete Thoughts**: Remove thoughts you no longer need
- **Topics**: AI, World politics, My career events

## 🛠️ Technology Stack

### Backend
- **FastAPI**: Modern Python web framework
- **SQLite**: Lightweight database
- **Pydantic**: Data validation
- **Uvicorn**: ASGI server

### Frontend
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Axios**: HTTP client
- **Modern CSS**: Responsive design

## 📁 Project Structure

```
thought-capture-web/
├── backend/
│   ├── main.py           # FastAPI application
│   ├── models.py         # Pydantic models
│   ├── database.py       # SQLite database handler
│   ├── requirements.txt  # Python dependencies
│   └── thoughts.db       # SQLite database (auto-created)
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AddThought.jsx
    │   │   └── ThoughtsList.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── api.js
    │   └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- **Python 3.8+**
- **Node.js 16+** and npm

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   
   # On Windows:
   venv\Scripts\activate
   
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the FastAPI server:
   ```bash
   python main.py
   ```
   
   Or using uvicorn directly:
   ```bash
   uvicorn main:app --reload
   ```

The backend will be running at: **http://localhost:8000**

- API Docs: http://localhost:8000/docs
- Alternative Docs: http://localhost:8000/redoc

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The frontend will be running at: **http://localhost:3000**

## 📖 API Endpoints

### Get All Thoughts
```
GET /api/thoughts
GET /api/thoughts?topic=AI
```

### Create Thought
```
POST /api/thoughts
Body: {
  "topic": "AI",
  "content": "Your thought here"
}
```

### Delete Thought
```
DELETE /api/thoughts/{thought_id}
```

### Get Topics
```
GET /api/topics
```

## 🎨 Features Walkthrough

### Add a Thought
1. Select a topic from the dropdown
2. Enter your thought in the text area
3. Click "Save Thought"
4. See success message and your new thought appears in the list

### View Thoughts
- All thoughts are displayed by default
- Use the filter dropdown to view thoughts by specific topic
- Each thought shows:
  - Topic badge
  - Creation timestamp
  - Content
  - Delete button

### Delete a Thought
1. Click the "Delete" button on any thought
2. Confirm the deletion
3. Thought is removed from the list

## 🔧 Development

### Backend Development

Run with auto-reload:
```bash
cd backend
python main.py
```

### Frontend Development

Run with hot-reload:
```bash
cd frontend
npm run dev
```

### Build for Production

Frontend:
```bash
cd frontend
npm run build
```

## 📝 Database Schema

```sql
CREATE TABLE thoughts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    topic TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🌐 CORS Configuration

The backend is configured to accept requests from:
- http://localhost:3000 (Vite dev server)
- http://localhost:5173 (Alternative Vite port)

## 🚀 Deployment

### Backend
- Deploy to: Render, Railway, Fly.io, or PythonAnywhere
- Update CORS origins for production domain

### Frontend
- Build: `npm run build`
- Deploy to: Vercel, Netlify, or GitHub Pages
- Update API_BASE_URL in `api.js` to production backend URL

## 📄 License

This project is for personal use.

## 🤝 Contributing

This is a personal hobby project, but feel free to fork and customize!

## 📧 Contact

For questions or suggestions, please open an issue.

---

**Built with ❤️ using React, FastAPI, and SQLite**
