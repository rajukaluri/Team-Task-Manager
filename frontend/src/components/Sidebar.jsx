import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.menuGroup}>
        <h3 style={styles.heading}>Menu</h3>
        <Link to="/" style={styles.menuItem}>Dashboard</Link>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '240px',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '2rem 1rem',
    minHeight: 'calc(100vh - 73px)',
  },
  menuGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  heading: {
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#64748b',
  },
  menuItem: {
    color: '#94a3b8',
    textDecoration: 'none',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    transition: 'background-color 0.2s',
  },
};

export default Sidebar;