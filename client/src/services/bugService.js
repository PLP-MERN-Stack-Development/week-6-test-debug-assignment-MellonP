import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bugs';

// Named export for getting all bugs
// bugService.js
export const getBugs = async () => {
  const res = await fetch('http://localhost:5000/api/bugs');
  if (!res.ok) throw new Error('Failed to fetch');
  const data = await res.json();
  return data; 
};

// Named export for getting bug by ID
export const getBugById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching bug:", err);
    throw err;
  }
};

// Named export for creating a bug
export const createBug = async (bugData) => {
  try {
    const response = await axios.post(API_URL, bugData);
    return response.data;
  } catch (err) {
    console.error("Error creating bug:", err);
    throw err;
  }
};
