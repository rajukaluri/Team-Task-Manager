import React, { useState } from 'react';
import API from '../services/api';

const CreateTask = ({ projectId, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Pending');
  const [dueDate, setDueDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('69f4e93440e488bd2f91758a');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const taskData = {
        title,
        status,
        dueDate,
        projectId,
        assignedTo,
      };

      const response = await API.post('/tasks', taskData);
      alert('Task created successfully!');
      
      // Reset form
      setTitle('');
      setStatus('Pending');
      setDueDate('');
      
      if (onTaskCreated) {
        onTaskCreated(response.data);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create task. Please check your data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>Create New Task</h3>
      {error && <p style={styles.error}>{error}</p>}
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            placeholder="e.g. Set up Database Schemas"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={styles.input}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Creating...' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    maxWidth: '400px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.25rem',
    color: '#1e293b',
    marginTop: 0,
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.375rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#475569',
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #cbd5e1',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    color: '#0f172a',
  },
  button: {
    padding: '0.625rem',
    backgroundColor: '#0284c7',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0.375rem',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
  error: {
    color: '#ef4444',
    fontSize: '0.875rem',
    marginBottom: '0.5rem',
  },
};

export default CreateTask;