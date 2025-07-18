import express from "express";
import Bug from "../models/Bug.js"; // Import your Bug model

const router = express.Router();

// GET all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new bug
router.post('/', async (req, res) => {
  const bug = new Bug({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status || 'open',
    priority: req.body.priority || 'medium'
  });

  try {
    const newBug = await bug.save();
    res.status(201).json(newBug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update bug
router.patch('/:id', async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE bug
router.delete('/:id', async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;