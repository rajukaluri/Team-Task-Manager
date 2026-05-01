import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Login page route */}
        <Route path="/login" element={<Login />} />
        
        {/* The Dashboard page route */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Redirect any unknown routes back to the dashboard/login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;