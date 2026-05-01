import React, { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [newProject, setNewProject] = useState({ title: '' });
  const [newTask, setNewTask] = useState({
    title: '',
    status: 'Pending',
    dueDate: '',
    projectId: '',
    assignedTo: '69f4e93440e488bd2f91758a',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get('/dashboard');
        setProjects(res.data.projects || []);
        setTasks(res.data.tasks || []);
      } catch (err) {
        setError('Failed to load dashboard data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/projects', newProject);
      setProjects([...projects, res.data]);
      setNewProject({ title: '' });
      alert('Project created successfully!');
    } catch (err) {
      alert('Error creating project: ' + (err.response?.data?.error || err.message));
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/tasks', newTask);
      setTasks([...tasks, res.data]);
      setNewTask({ title: '', status: 'Pending', dueDate: '', projectId: '', assignedTo: '69f4e93440e488bd2f91758a' });
      alert('Task created successfully!');
    } catch (err) {
      alert('Error creating task: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.mainContent}>
        <Navbar />
        <div style={styles.container}>
          <h1 style={styles.heading}>Admin Dashboard</h1>
          {error && <p style={styles.error}>{error}</p>}

          {loading ? (
            <p>Loading your data...</p>
          ) : (
            <div style={styles.grid}>
              {/* Projects Section */}
              <div style={styles.card}>
                <h2>Projects</h2>
                {projects.length === 0 ? (
                  <p>No projects found.</p>
                ) : (
                  <ul style={styles.list}>
                    {projects.map((p) => (
                      <li key={p._id} style={styles.listItem}>
                        <strong>{p.title}</strong>
                        <span style={styles.idText}>ID: {p._id}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <form onSubmit={handleCreateProject} style={styles.form}>
                  <h3>Create Project</h3>
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ title: e.target.value })}
                    style={styles.input}
                    required
                  />
                  <button type="submit" style={styles.button}>Add Project</button>
                </form>
              </div>

              {/* Tasks Section with TaskCards */}
              <div style={styles.card}>
                <h2>Tasks</h2>
                {tasks.length === 0 ? (
                  <p>No tasks found.</p>
                ) : (
                  <div style={styles.taskContainer}>
                    {tasks.map((t) => (
                      <TaskCard key={t._id} task={t} />
                    ))}
                  </div>
                )}

                <form onSubmit={handleCreateTask} style={styles.form}>
                  <h3>Create Task</h3>
                  <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    style={styles.input}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Project ID"
                    value={newTask.projectId}
                    onChange={(e) => setNewTask({ ...newTask, projectId: e.target.value })}
                    style={styles.input}
                    required
                  />
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    style={styles.input}
                    required
                  />
                  <button type="submit" style={styles.button}>Add Task</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  layout: { display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' },
  mainContent: { flex: 1, display: 'flex', flexDirection: 'column' },
  container: { padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' },
  heading: { color: '#0f172a', marginBottom: '1.5rem' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' },
  card: { background: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgb(0 0 0 / 0.1)' },
  list: { listStyleType: 'none', padding: 0, margin: '0.5rem 0' },
  listItem: { padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  idText: { fontSize: '10px', color: '#64748b' },
  taskContainer: { maxHeight: '400px', overflowY: 'auto', paddingRight: '0.5rem', marginBottom: '1rem' },
  form: { marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  input: { padding: '0.5rem', border: '1px solid #cbd5e1', borderRadius: '0.375rem' },
  button: { padding: '0.625rem', backgroundColor: '#0284c7', color: '#ffffff', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' },
  error: { color: '#ef4444' },
};

export default Dashboard;