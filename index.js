require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const projectTaskRoutes = require('./routes/projectTask');

const app = express();

// 1. Critical Middleware
app.use(cors());
app.use(express.json());

// 2. Default Root Route Added Below
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Team Task Manager API!',
    status: 'Active and running',
  });
});

// 3. Define routes after the middleware
app.use('/api/auth', authRoutes);
app.use('/api', projectTaskRoutes);

// Database Connection and Server Start
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});