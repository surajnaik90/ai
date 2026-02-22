import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThoughtInput from './ThoughtInput';
import ThoughtsList from './ThoughtsList';
import './Dashboard.css';

const Dashboard = () => {
  const [thoughts, setThoughts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    month: '',
    year: new Date().getFullYear().toString(),
  });

  const fetchThoughts = async () => {
    try {
      const params = {};
      if (filters.category) params.category = filters.category;
      if (filters.month) params.month = filters.month;
      if (filters.year) params.year = filters.year;

      const response = await axios.get('http://localhost:3001/api/thoughts', { params });
      setThoughts(response.data.thoughts);
    } catch (error) {
      console.error('Error fetching thoughts:', error);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, [filters]);

  const handleAddThought = async (content, category) => {
    try {
      await axios.post('http://localhost:3001/api/thoughts', { content, category });
      fetchThoughts();
    } catch (error) {
      console.error('Error adding thought:', error);
    }
  };

  const handleDeleteThought = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/thoughts/${id}`);
      fetchThoughts();
    } catch (error) {
      console.error('Error deleting thought:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <ThoughtInput onAddThought={handleAddThought} />
      </div>
      
      <div className="dashboard-right">
        <div className="filters">
          <h3>Filter Thoughts</h3>
          <div className="filter-controls">
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

            <input 
              type="number" 
              placeholder="Year"
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
              min="2020"
              max="2030"
            />
          </div>
        </div>

        <ThoughtsList 
          thoughts={thoughts} 
          onDeleteThought={handleDeleteThought}
        />
      </div>
    </div>
  );
};

export default Dashboard;
