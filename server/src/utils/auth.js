const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: process.env.JWT_EXPIRE || '30d' }
  );
};

// Verify JWT token
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
};

// Protect routes middleware
const protect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ error: 'Not authorized, no token provided' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Not authorized, token failed' });
  }
};

// Check ownership middleware
const checkOwnership = (model, paramName = 'id') => {
  return async (req, res, next) => {
    try {
      const doc = await model.findById(req.params[paramName]);
      
      if (!doc) {
        return res.status(404).json({ error: 'Resource not found' });
      }

      if (doc.author.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: 'Not authorized to perform this action' });
      }

      next();
    } catch (err) {
      return res.status(500).json({ error: 'Server error' });
    }
  };
};

module.exports = {
  generateToken,
  verifyToken,
  protect,
  checkOwnership
};