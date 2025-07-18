const Bug = require('../models/bug.js');
const logger = require('../utils/logger');

const getAllBugs = async () => {
  try {
    return await Bug.find().sort({ createdAt: -1 });
  } catch (err) {
    logger.error('Error fetching bugs:', err);
    throw err;
  }
};

const getBugById = async (id) => {
  try {
    const bug = await Bug.findById(id);
    if (!bug) {
      throw new Error('Bug not found');
    }
    return bug;
  } catch (err) {
    logger.error(`Error fetching bug ${id}:`, err);
    throw err;
  }
};

const createBug = async (bugData) => {
  try {
    const bug = new Bug(bugData);
    return await bug.save();
  } catch (err) {
    logger.error('Error creating bug:', err);
    throw err;
  }
};

const updateBug = async (id, updateData) => {
  try {
    const bug = await Bug.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });
    if (!bug) {
      throw new Error('Bug not found');
    }
    return bug;
  } catch (err) {
    logger.error(`Error updating bug ${id}:`, err);
    throw err;
  }
};

const deleteBug = async (id) => {
  try {
    const bug = await Bug.findByIdAndDelete(id);
    if (!bug) {
      throw new Error('Bug not found');
    }
    return bug;
  } catch (err) {
    logger.error(`Error deleting bug ${id}:`, err);
    throw err;
  }
};

module.exports = {
  getAllBugs,
  getBugById,
  createBug,
  updateBug,
  deleteBug
};