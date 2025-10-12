import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const thoughtsApi = {
  // Get all thoughts or filter by topic
  getThoughts: async (topic = null) => {
    const params = topic ? { topic } : {};
    const response = await axios.get(`${API_BASE_URL}/thoughts`, { params });
    return response.data;
  },

  // Create a new thought
  createThought: async (thoughtData) => {
    const response = await axios.post(`${API_BASE_URL}/thoughts`, thoughtData);
    return response.data;
  },

  // Delete a thought
  deleteThought: async (thoughtId) => {
    const response = await axios.delete(`${API_BASE_URL}/thoughts/${thoughtId}`);
    return response.data;
  },

  // Get available topics
  getTopics: async () => {
    const response = await axios.get(`${API_BASE_URL}/topics`);
    return response.data;
  }
};
