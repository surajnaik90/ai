import React, { useState, useEffect } from 'react';
import { thoughtsApi } from '../api';

const ThoughtsList = ({ refreshTrigger }) => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterTopic, setFilterTopic] = useState('');

  const topics = ['AI', 'World politics', 'My career events'];

  const fetchThoughts = async () => {
    setLoading(true);
    setError('');
    
    try {
      const data = await thoughtsApi.getThoughts(filterTopic || null);
      setThoughts(data);
    } catch (err) {
      setError('Failed to fetch thoughts. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, [filterTopic, refreshTrigger]);

  const handleDelete = async (thoughtId) => {
    if (!window.confirm('Are you sure you want to delete this thought?')) {
      return;
    }

    try {
      await thoughtsApi.deleteThought(thoughtId);
      setThoughts(thoughts.filter(t => t.id !== thoughtId));
    } catch (err) {
      alert('Failed to delete thought. Please try again.');
      console.error(err);
    }
  };

  const getTopicClass = (topic) => {
    return `thought-topic topic-${topic.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const formatDate = (dateString, thoughtDate) => {
    // Use thought_date if provided, otherwise use created_at
    const displayDate = thoughtDate || dateString;
    const date = new Date(displayDate);
    
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: thoughtDate ? undefined : '2-digit',
      minute: thoughtDate ? undefined : '2-digit'
    });
  };

  return (
    <div className="section">
      <h2 className="section-title">📖 Your Thoughts</h2>

      {error && <div className="error">{error}</div>}

      <div className="fetch-controls">
        <label htmlFor="filter">Filter by topic:</label>
        <select
          id="filter"
          className="filter-select"
          value={filterTopic}
          onChange={(e) => setFilterTopic(e.target.value)}
        >
          <option value="">All Topics</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="loading">Loading thoughts...</div>
      ) : thoughts.length === 0 ? (
        <div className="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p>No thoughts yet. Start adding your thoughts above!</p>
        </div>
      ) : (
        <div className="thoughts-list">
          {thoughts.map((thought) => (
            <div key={thought.id} className="thought-card">
              <div className="thought-header">
                <span className={getTopicClass(thought.topic)}>
                  {thought.topic}
                </span>
                <span className="thought-date">
                  {thought.thought_date ? (
                    <>
                      📅 {formatDate(thought.created_at, thought.thought_date)}
                      {thought.thought_date !== thought.created_at.split('T')[0] && (
                        <span style={{ marginLeft: '10px', fontSize: '0.85em', opacity: 0.7 }}>
                          (Added: {formatDate(thought.created_at, null)})
                        </span>
                      )}
                    </>
                  ) : (
                    formatDate(thought.created_at, null)
                  )}
                </span>
              </div>
              <div className="thought-content">
                {thought.content}
              </div>
              <button
                onClick={() => handleDelete(thought.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThoughtsList;
