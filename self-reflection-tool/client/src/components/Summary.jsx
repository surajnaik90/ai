import React, { useState } from 'react';
import axios from 'axios';
import './Summary.css';

const Summary = () => {
  const [filters, setFilters] = useState({
    category: '',
    month: '',
    year: new Date().getFullYear().toString(),
  });
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/summary', filters);
      setSummary(response.data);
    } catch (error) {
      console.error('Error generating summary:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summary-container">
      <div className="summary-header">
        <h2>AI Summary</h2>
        <p>Generate insights from your reflections</p>
      </div>

      <div className="summary-filters">
        <div className="filter-group">
          <label>Category</label>
          <select 
            value={filters.category} 
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="Personal">Personal</option>
            <option value="Professional">Professional</option>
            <option value="Sectors">Different Sectors</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Month</label>
          <select 
            value={filters.month} 
            onChange={(e) => setFilters({ ...filters, month: e.target.value })}
          >
            <option value="">All Months</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Year</label>
          <input 
            type="number" 
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            min="2020"
            max="2030"
          />
        </div>

        <button onClick={generateSummary} className="generate-btn">
          Generate Summary
        </button>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Generating summary...</p>
        </div>
      )}

      {summary && !loading && (
        <div className="summary-results">
          <div className="summary-stats">
            <div className="stat-card">
              <h4>Total Thoughts</h4>
              <p className="stat-value">{summary.totalThoughts}</p>
            </div>
            
            {summary.dateRange && (
              <div className="stat-card">
                <h4>Date Range</h4>
                <p className="stat-value-small">
                  {summary.dateRange.first} - {summary.dateRange.last}
                </p>
              </div>
            )}

            <div className="stat-card">
              <h4>Categories</h4>
              <p className="stat-value-small">
                {summary.categories.join(', ') || 'None'}
              </p>
            </div>
          </div>

          {summary.preview && summary.preview.length > 0 && (
            <div className="summary-preview">
              <h3>Recent Thoughts Preview</h3>
              {summary.preview.map((item, index) => (
                <div key={index} className="preview-card">
                  <div className="preview-header">
                    <span className="preview-category">{item.category}</span>
                    <span className="preview-date">{item.date}</span>
                  </div>
                  <p className="preview-snippet">{item.snippet}</p>
                </div>
              ))}
            </div>
          )}

          <div className="ai-note">
            <h4>Note:</h4>
            <p>This is a basic summary. For AI-powered insights, you can integrate with OpenAI's API or similar services by adding your API key and enhancing the summary endpoint.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
