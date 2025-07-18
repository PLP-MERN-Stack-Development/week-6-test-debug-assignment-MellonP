const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const { protect, checkOwnership } = require('../utils/auth');

// Get all posts
router.get('/', async (req, res) => {
  try {
    let query = {};
    
    // Filter by category if provided
    if (req.query.category) {
      query.category = req.query.category;
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const posts = await Post.find(query)
      .skip(skip)
      .limit(limit)
      .populate('author', 'username')
      .populate('category', 'name');

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username')
      .populate('category', 'name');

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create post
router.post('/', protect, async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const post = new Post({
      title,
      content,
      category,
      author: req.user._id
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Update post
router.put('/:id', protect, checkOwnership(Post), async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, category },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete post
router.delete('/:id', protect, checkOwnership(Post), async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;