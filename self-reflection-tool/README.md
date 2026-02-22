# Self Reflection Tool

**Created by:** Suraj Naik  
**Location:** Bengaluru, Electronic City  
**Date:** February 14, 2026

## Intention
To capture my thoughts to improve myself and influence humanity for a better world.

## Description
A personal reflection tool to capture opinions and thoughts on various topics including:
- **Personal**: Health, fun activities, personal growth
- **Professional**: IT career, industry developments
- **Different Sectors**: Observations on various industries
- **Miscellaneous**: Business facts, numbers, general insights

## Features
- **Dashboard** with two-pane layout:
  - Left pane: Chat-style input to capture thoughts with category selection
  - Right pane: Filterable display of thoughts by category, month, and year
- **AI Summary**: Generate insights from your reflections based on filters
- **Local Storage**: All data stored in JSON files (no database server required)
- **Minimal Setup**: Quick and easy to run locally

## Tech Stack
- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Storage**: JSON file-based storage
- **Styling**: Custom CSS

## Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

## Installation & Setup

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 2. Run the Application

#### Option A: Run both server and client together
```bash
npm run dev
```

#### Option B: Run server and client separately

**Terminal 1 - Start the backend server:**
```bash
npm run server
```

**Terminal 2 - Start the frontend client:**
```bash
npm run client
```

### 3. Access the Application
- **Frontend**: Open your browser and navigate to `http://localhost:3000`
- **Backend API**: Running on `http://localhost:3001`

## Usage

### Adding a Thought
1. Select a category from the dropdown (Personal, Professional, Sectors, or Miscellaneous)
2. Type your thought or reflection in the text area
3. Click "Add Reflection"

### Viewing Thoughts
1. Use the filters in the right pane to filter by:
   - Category
   - Month
   - Year
2. Thoughts will update automatically based on your selections

### Generating AI Summary
1. Click on "AI Summary" in the navigation menu
2. Select your filters (category, month, year)
3. Click "Generate Summary"
4. View statistics and preview of recent thoughts

## Data Storage
All thoughts are stored in: `server/data/thoughts.json`

This file is automatically created when you first run the application.

## Project Structure
```
Self reflection/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main App component
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                # Express backend
│   ├── data/             # JSON data storage (auto-created)
│   └── index.js          # Server entry point
├── package.json          # Root package.json
└── README.md
```

## Future Enhancements
- Integration with OpenAI API for advanced AI summaries
- Export thoughts to PDF or other formats
- Search functionality within thoughts
- Tags and custom categories
- Data backup and restore features
- Mobile responsive improvements

## License
Personal project - All rights reserved

---

**Note**: This is a personal reflection tool designed for individual use. Your thoughts and data remain private and are stored locally on your machine.
