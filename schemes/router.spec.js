const request = require('supertest');
//const router = require('./scheme-router');
const server = require('../server');

describe('Scheme Router', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  })

  describe('GET to "/"', function(){
    it("Should return status code 200", () => {
      return request(server).get('/api/schemes/')
        .then(res => {
          expect(res.status).toBe(200);
        })
    })
  })

  describe('POST to "/"', () => {
    it("Should return a status of 201", () => {
      return request(server)
      .post('/api/schemes/')
      .send({scheme_name: 'some name'})
      .then(res => {
        expect(res.status).toBe(201);
      })
    })
  })

  describe('POST to "/"', () => {
    it("Should return body of id and name", () => {
      return request(server)
      .post('/api/schemes/')
      .send({scheme_name: 'some name'})
      .then(res => {
        expect(res.type).toMatch(/json/i)
      })
    })
  })

  describe('DELETE to "/:id"', () => {
    it('Returns status code 204', () => {
      return request(server)
        .delete('/api/schemes/1')
        .then(res => {
          expect(res.status).toBe(204);
        })
    })
  })

  describe('DELETE to "/id"', () => {
    it('Returns and object', () => {
      return request(server)
        .delete('/api/schemes/1')
        .then(res => {
          expect(res.type).toMatch(/json/i);
        })
    })
  })
})