// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/secretnamespace', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Secret Namespace!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
