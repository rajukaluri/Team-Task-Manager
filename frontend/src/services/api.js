import axios from 'axios';

const API = axios.create({
  baseURL: 'https://team-task-manager-production-e5fe.up.railway.app/api',
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