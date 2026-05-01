import React from 'react';

const TaskCard = ({ task }) => {
  // Determine the color of the badge based on the task status
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return { backgroundColor: '#dcfce7', color: '#15803d' }; // Green
      case 'In Progress':
        return { backgroundColor: '#dbeafe', color: '#1d4ed8' }; // Blue
      default:
        return { backgroundColor: '#fef9c3', color: '#a16207' }; // Yellow/Pending
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>{task.title}</h3>
        <span style={{ ...styles.badge, ...getStatusStyle(task.status) }}>
          {task.status}
        </span>
      </div>

      <div style={styles.body}>
        <p style={styles.text}>
          <strong>Due Date:</strong> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}
        </p>
        <p style={styles.text}>
          <strong>Assigned To:</strong> {task.assignedTo || 'Unassigned'}
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '0.75rem',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1e293b',
    margin: 0,
  },
  badge: {
    fontSize: '0.75rem',
    fontWeight: '500',
    padding: '0.125rem 0.5rem',
    borderRadius: '1rem',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  text: {
    fontSize: '0.875rem',
    color: '#64748b',
    margin: 0,
  },
};

export default TaskCard;
