const { 
  getAllBugs,
  getBugById,
  createBug,
  updateBug,
  deleteBug
} = require('../../../src/services/bugService');
const Bug = require('../../../src/models/bug.js');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

describe('Bug Service', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Bug.deleteMany({});
  });

  describe('getAllBugs', () => {
    it('should return all bugs', async () => {
      await Bug.create([
        { title: 'Bug 1', description: 'Description 1' },
        { title: 'Bug 2', description: 'Description 2' }
      ]);

      const bugs = await getAllBugs();
      expect(bugs.length).toBe(2);
      expect(bugs[0].title).toBe('Bug 2'); // Should be sorted by createdAt desc
    });
  });

  describe('getBugById', () => {
    it('should return a bug by id', async () => {
      const bug = await Bug.create({ 
        title: 'Test Bug', 
        description: 'Test Description' 
      });

      const foundBug = await getBugById(bug._id);
      expect(foundBug.title).toBe('Test Bug');
    });

    it('should throw error if bug not found', async () => {
      await expect(getBugById(new mongoose.Types.ObjectId()))
        .rejects
        .toThrow('Bug not found');
    });
  });

  // Similar tests for createBug, updateBug, deleteBug
});