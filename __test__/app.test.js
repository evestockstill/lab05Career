/* eslint-disable no-undef */
require('dotenv').config();
const connect = require('../config/db');
const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');

describe('application routes', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    return mongoose.connection.close();
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
        });
      });
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
      });
  });
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
      }]);
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
      }]);
    });
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
      }]);
    });
});

it('gets a bar by id on GET', async() => {
  const bar =  await Bar.create ({
    name: bar.name,
    phone: '555-555-5555',
    age: 21,
  });
  return request(app)
    .get(`/bars/${bar._id}`)
    .then(res => {
      expect(res.body).toEqual({
        _id: bar._id.toString(),
        name: bar.name,
        phone: bar.phone,
        age: bar.age,
        __v: bar.__
      });
    });
});

it('updates with PATCH', async() => {
  const bar = await Bar.create({
    name: 'some bar',
    phone: '555-555-5555',
    age: 21,
  });
  return request (app)
    .patch(`/bars/${bar._id}`)
    .send({ name: 'some baar' })
    .then(res => {
      expect(res.body).toEqual({
        _id: bar._id.toString(),
        name: 'bar',
        __v: bar.__v
      });
    });
});


