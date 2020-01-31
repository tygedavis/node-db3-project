const request = require('supertest');
const router = require('./scheme-router');

const Schemes = require('./scheme-model');
const db = require('../data/dbConfig');

describe('Scheme Model', () => {
  beforeEach(async () => {
    await db('schemes').truncate();
  })

  describe('Test environment', () => {
    it('should use testing environment', () => {
      expect(process.env.DB_ENV).toBe('testing');
    })
  })

  describe('Insert Function', () => {
    it('Adds a scheme to db', async () => {
      await Schemes.add({scheme_name: "new scheme"});

      const schemes = await db('schemes');

      expect(schemes).toHaveLength(1);
    })
  })
})