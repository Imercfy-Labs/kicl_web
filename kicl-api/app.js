const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const { authenticateToken } = require('./middleware/authMiddleware');

dotenv.config();
const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:4200',
    'https://localhost:4200',
    'http://localhost:5173',
    'https://localhost:5173',
    'https://tech-kothari-portal.netlify.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/users', authenticateToken, userRoutes);
app.use('/api/orders', authenticateToken, orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Something broke!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for origins:`, corsOptions.origin);
});