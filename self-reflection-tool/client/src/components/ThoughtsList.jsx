import React, { useState } from 'react';
import './ThoughtsList.css';

const ThoughtsList = ({ thoughts, onEditThought }) => {
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [error, setError] = useState('');

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

  const isEditableToday = (timestamp) => {
    const thoughtDate = new Date(timestamp);
    const currentDate = new Date();
    
    return thoughtDate.getFullYear() === currentDate.getFullYear() &&
           thoughtDate.getMonth() === currentDate.getMonth() &&
           thoughtDate.getDate() === currentDate.getDate();
  };

  const handleStartEdit = (thought) => {
    if (isEditableToday(thought.timestamp)) {
      setEditingId(thought.id);
      setEditContent(thought.content);
      setEditCategory(thought.category);
      setError('');
    } else {
      setError(`Thought from ${formatDate(thought.timestamp)} can no longer be edited`);
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditContent('');
    setEditCategory('');
    setError('');
  };

  const handleSaveEdit = async (id) => {
    if (!editContent.trim()) {
      setError('Content cannot be empty');
      return;
    }
    
    try {
      await onEditThought(id, editContent, editCategory);
      setEditingId(null);
      setEditContent('');
      setEditCategory('');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update thought');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="thoughts-list-container">
      <div className="thoughts-header">
        <h3>Your Reflections ({thoughts.length})</h3>
      </div>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      <div className="thoughts-list">
        {thoughts.length === 0 ? (
          <div className="empty-state">
            <p>No thoughts yet. Start capturing your reflections!</p>
          </div>
        ) : (
          thoughts.map((thought) => (
            <div key={thought.id} className="thought-card">
              {editingId === thought.id ? (
                // Edit mode
                <div className="edit-mode">
                  <div className="edit-header">
                    <select 
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      className="edit-category-select"
                    >
                      <option value="Personal">Personal</option>
                      <option value="Professional">Professional</option>
                      <option value="Sectors">Different Sectors</option>
                      <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                    <span className="thought-date">{formatDate(thought.timestamp)}</span>
                  </div>
                  
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="edit-textarea"
                    rows="4"
                  />
                  
                  <div className="edit-actions">
                    <button 
                      className="save-btn"
                      onClick={() => handleSaveEdit(thought.id)}
                    >
                      Save
                    </button>
                    <button 
                      className="cancel-btn"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // View mode
                <>
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
                  
                  {isEditableToday(thought.timestamp) ? (
                    <button 
                      className="edit-btn"
                      onClick={() => handleStartEdit(thought)}
                      title="Edit this thought (only available today)"
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="no-edit-info">
                      <small>Cannot edit (created {formatDate(thought.timestamp)})</small>
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ThoughtsList;
