import React, { useState } from 'react';
import { thoughtsApi } from '../api';

const AddThought = ({ onThoughtAdded }) => {
  const [topic, setTopic] = useState('AI');
  const [content, setContent] = useState('');
  const [thoughtDate, setThoughtDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const topics = ['AI', 'World politics', 'My career events'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setMessage({ type: 'error', text: 'Please enter your thought' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const thoughtData = {
        topic,
        content,
        thought_date: thoughtDate || null
      };
      
      await thoughtsApi.createThought(thoughtData);
      setMessage({ type: 'success', text: 'Thought saved successfully! 🎉' });
      setContent('');
      setThoughtDate('');
      
      // Notify parent to refresh thoughts list
      if (onThoughtAdded) {
        onThoughtAdded();
      }

      // Clear success message after 3 seconds
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 3000);
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.detail || 'Failed to save thought. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">✍️ Add New Thought</h2>
      
      {message.text && (
        <div className={message.type}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="add-thought-form">
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={loading}
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="thoughtDate">Date (Optional)</label>
          <input
            type="date"
            id="thoughtDate"
            value={thoughtDate}
            onChange={(e) => setThoughtDate(e.target.value)}
            disabled={loading}
            placeholder="Leave empty for today"
          />
          <small style={{ color: '#6c757d', fontSize: '0.9rem', marginTop: '5px', display: 'block' }}>
            Leave empty to use current date and time
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="content">Your Thought</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts..."
            disabled={loading}
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Thought'}
        </button>
      </form>
    </div>
  );
};

export default AddThought;
