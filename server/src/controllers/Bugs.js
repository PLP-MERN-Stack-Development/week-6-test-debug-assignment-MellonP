const Bug = require('../models/bug.js');

// Get all bugs
export const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: bugs.length, data: bugs });
  } catch (err) {
    next(err);
  }
};

// Get single bug by ID
export const getBug = async (req, res, next) => {
  try {
    const bug = await Bug.findById(req.params.id);
    
    if (!bug) {
      return res.status(404).json({ 
        success: false, 
        error: `Bug not found with id of ${req.params.id}` 
      });
    }

    res.status(200).json({ success: true, data: bug });
  } catch (err) {
    next(err);
  }
};

// Create new bug
export const createBug = async (req, res, next) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json({ success: true, data: bug });
  } catch (err) {
    next(err);
  }
};

// Update bug
export const updateBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bug) {
      return res.status(404).json({ 
        success: false, 
        error: `Bug not found with id of ${req.params.id}` 
      });
    }

    res.status(200).json({ success: true, data: bug });
  } catch (err) {
    next(err);
  }
};

// Delete bug
export const deleteBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);

    if (!bug) {
      return res.status(404).json({ 
        success: false, 
        error: `Bug not found with id of ${req.params.id}` 
      });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBugs,
  getBug,
  createBug,
  updateBug,
  deleteBug
};