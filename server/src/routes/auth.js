import express from 'express';
const router = express.Router();

// Add your authentication routes here
router.post('/register', (req, res) => {
  res.json({ message: 'Register route' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login route' });
});

export default router;