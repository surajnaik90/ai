import React, { useState } from 'react';
import './ThoughtInput.css';

const ThoughtInput = ({ onAddThought }) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Personal');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!content.trim()) {
      setError('Please enter some content for your reflection');
      return;
    }
    
    try {
      await onAddThought(content, category);
      setContent('');
      setSuccess('Reflection added successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add reflection');
    }
  };

  return (
    <div className="thought-input-container">
      <h2>Capture Your Thoughts</h2>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      {success && (
        <div className="success-message">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="thought-form">
        <div className="form-group">
          <label>Category</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            <option value="Personal">Personal</option>
            <option value="Professional">Professional</option>
            <option value="Sectors">Different Sectors</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Thought</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your opinions, reflections, or insights here..."
            rows="10"
            className="thought-textarea"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Reflection
        </button>
      </form>
    </div>
  );
};

export default ThoughtInput;
