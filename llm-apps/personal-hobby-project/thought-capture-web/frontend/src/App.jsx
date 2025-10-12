import React, { useState } from 'react';
import AddThought from './components/AddThought';
import ThoughtsList from './components/ThoughtsList';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleThoughtAdded = () => {
    // Trigger refresh of thoughts list
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>💭 Thought Capture</h1>
        <p>Capture and organize your thoughts on various topics</p>
      </header>

      <div className="container">
        <AddThought onThoughtAdded={handleThoughtAdded} />
        <ThoughtsList refreshTrigger={refreshTrigger} />
      </div>
    </div>
  );
}

export default App;
