import axios from 'axios';

// Initialize the base URL for your backend API
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Automatically attach the authorization token to every request
API.interceptors.request.use((req) => {
  // Using the hardcoded token provided
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZjRlOTM0NDBlNDg4YmQyZjkxNzU4YSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTc3NzY1ODYzMiwiZXhwIjoxNzc3NzQ1MDMyfQ.NAzy7DsQxAnFLBtsiwSnxMkfXIchpE26O0Ukn3mpv9M";
  
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  
  // Set default content type
  req.headers['Content-Type'] = 'application/json';
  
  return req;
});

export default API;