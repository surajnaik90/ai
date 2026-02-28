import React, { useState } from 'react';
import './ThoughtInput.css';

const ThoughtInput = ({ onAddThought }) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Personal');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
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
      await onAddThought(content, category, tags);
      setContent('');
      setTags([]);
      setTagInput('');
      setSuccess('Reflection added successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add reflection');
    }
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
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

        <div className="form-group">
          <label>Tags (optional)</label>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="tag-remove"
                  aria-label="Remove tag"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInputKeyDown}
            onBlur={addTag}
            placeholder="Type a tag and press Enter or comma..."
            className="tag-input"
          />
          <small className="tag-hint">Press Enter or comma to add tags</small>
        </div>

        <button type="submit" className="submit-btn">
          Add Reflection
        </button>
      </form>
    </div>
  );
};

export default ThoughtInput;
