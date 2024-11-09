const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
dotenv.config();
const app = express();
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));