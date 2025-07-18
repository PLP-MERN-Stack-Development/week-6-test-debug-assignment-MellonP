// 1. Environment Setup
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bugRoutes from './src/routes/Bugs.js';

// 2. Initialize Express
const app = express();
console.log('🟢 Express initialized');

// 3. Enhanced CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
console.log('🛡️  CORS configured for:', corsOptions.origin);

// 4. Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('🗄️  MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// 5. Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 6. Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// 7. API Routes
app.use('/api/bugs', bugRoutes);

// 8. Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('⚠️  Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 9. Server Startup
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log('🔗 Access URLs:');
  console.log(`- Local: http://localhost:${PORT}`);
  console.log(`- API: http://localhost:${PORT}/api/bugs`);
});

// 10. Graceful Shutdown
const shutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log('🔴 Server closed');
    mongoose.connection.close(false, () => {
      console.log('🗄️  MongoDB connection closed');
      process.exit(0);
    });
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// 11. Unhandled Rejection Handling
process.on('unhandledRejection', (err) => {
  console.error('💥 Unhandled Rejection:', err);
  shutdown('UNHANDLED_REJECTION');
});
