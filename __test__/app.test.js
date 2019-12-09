require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../config/db');
const colors = require('colors');
const mongoose = require('mongoose');


describe('application routes', () => {
  beforeAll(() => {
    connect()
  });
  afterAll(() => {
    return mongoose.connection.dropDatabase();
  });
  it('can create a bar using post', () => {
    return request(app)
    .post('/bars')
    .send({
      name: 'some bar',
      phone: '555-555-5555',
      age: 21
    })
    .then(res => {
      expect(res.body).toEqual({
        _id: expect.any(String),
        name: 'some bar',
        phone: '555-555-5555',
        age: 21,
        __v: 0
      })
    })
  });
    it('can get all bars using get method', () => {
      return request(app)
        .get('/bars')
        .then(res => {
          expect(res.body).toEqual([{
            _id: expect.any(String),
            name: 'some bar',
            phone: '555-555-5555',
            age: 21,
            __v: 0
          }]);
          expect(res.body).toHaveLength(1);
        })
      })
    });

it('can find bar by id and delete', () => {
      return request(app)
      .delete('/bars/:id')
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          name: 'some bar',
          phone: '555-555-5555',
          age: 21,
          __v: 0
      }])
    });
  });

    it('can find bar by id and update', () => {
      return request(app)
      .put('/bars/id')
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          name: 'some bar',
          phone: '555-555-5555',
          age: 21,
          __v: 0
        }])
      })
    });
    it('can find bar by a single id', () => {
      return request(app)
      .get('/bars/id')
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          name: 'some bar',
          phone: '555-555-5555',
          age: 21,
          __v: 0
    }])
  });
})




