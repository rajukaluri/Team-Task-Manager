import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Task Manager App</div>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#0f172a',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    color: '#475569',
    fontWeight: '500',
  },
  logoutBtn: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontWeight: '500',
  },
};

export default Navbar;