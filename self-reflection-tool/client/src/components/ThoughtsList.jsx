import React from 'react';
import './ThoughtsList.css';

const ThoughtsList = ({ thoughts, onDeleteThought }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Personal': '#4CAF50',
      'Professional': '#2196F3',
      'Sectors': '#FF9800',
      'Miscellaneous': '#9C27B0'
    };
    return colors[category] || '#757575';
  };

  return (
    <div className="thoughts-list-container">
      <div className="thoughts-header">
        <h3>Your Reflections ({thoughts.length})</h3>
      </div>
      
      <div className="thoughts-list">
        {thoughts.length === 0 ? (
          <div className="empty-state">
            <p>No thoughts yet. Start capturing your reflections!</p>
          </div>
        ) : (
          thoughts.map((thought) => (
            <div key={thought.id} className="thought-card">
              <div className="thought-header">
                <span 
                  className="thought-category"
                  style={{ backgroundColor: getCategoryColor(thought.category) }}
                >
                  {thought.category}
                </span>
                <span className="thought-date">{formatDate(thought.timestamp)}</span>
              </div>
              
              <div className="thought-content">
                {thought.content}
              </div>
              
              <button 
                className="delete-btn"
                onClick={() => onDeleteThought(thought.id)}
                title="Delete this thought"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ThoughtsList;
