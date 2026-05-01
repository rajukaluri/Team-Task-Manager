import axios from 'axios';

const API = axios.create({
  baseURL: 'https://your-backend-service.up.railway.app/api', // <-- Your Railway live URL
});

API.interceptors.request.use((req) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZjRlOTM0NDBlNDg4YmQyZjkxNzU4YSIsInR5cCI6IkFkbWluIiwiaWF0IjoxNzc3NjY4NjMyLCJleHAiOjE3Nzc3NDUwMzJ9.NAzy7DsQxAnFLBtsiwSnxMkfXIchpE26O0Ukn3mpv9M";
  
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  req.headers['Content-Type'] = 'application/json';
  return req;
});

export default API;