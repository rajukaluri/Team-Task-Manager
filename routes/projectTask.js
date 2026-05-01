const express = require('express');
const Project = require('../models/Project');
const Task = require('../models/Task');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/projects', verifyToken, isAdmin, async (req, res) => {
  try {
    const { title, members } = req.body;
    const newProject = new Project({
      title,
      admin: req.user.id,
      members
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/tasks', verifyToken, async (req, res) => {
  try {
    const { title, dueDate, projectId, assignedTo, status } = req.body;
    const newTask = new Task({
      title,
      status: status || 'Pending',
      dueDate,
      projectId,
      assignedTo
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/dashboard', verifyToken, async (req, res) => {
  try {
    const projects = await Project.find({
      $or: [{ admin: req.user.id }, { members: req.user.id }]
    });
    const tasks = await Task.find({});
    res.json({ projects, tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;