require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const projectTaskRoutes = require('./routes/projectTask');

const app = express();

// 1. THIS LINE IS CRITICAL - It must be placed before the routes
app.use(cors());
app.use(express.json()); // <--- Ensure this line is present here

// 2. Define routes after the middleware
app.use('/api/auth', authRoutes);
app.use('/api', projectTaskRoutes);

// Database Connection and Server Start
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Database"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});