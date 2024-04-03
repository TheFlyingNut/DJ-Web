// app.js

const express = require('express');
const mongoose = require('mongoose');

// Import routes
const attendanceRouter = require('./Express/attendance');

var app = express();

// ADD THIS
var cors = require('cors');
app.use(cors());

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://kartiktornadus098:kartik12@cluster0.pcmzvwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', attendanceRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
