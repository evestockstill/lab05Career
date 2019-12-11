/* eslint-disable no-undef */
require('dotenv').config();
const connect = require('../lib/utils/connect');
const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');
const Bar = require('../lib/models/Bar');

describe('application routes', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  let bar;
  beforeEach(async() => {
    bar = await Bar.create({
      name: 'some bar',
      phone: '555-555-5555',
      age: 21
    });
  });
  afterAll(() => {
    return mongoose.connection.close();
  });
  it('can create a bar', () => {
    return request(app)
      .post('/api/v1/bars')
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
  it('can get all bars using get method', async() => {
    const bars = await Bar.create([
      { name: 'some bar', age: 21, phone: '555-555-5555' },
      { name: 'some other bar', age: 22, phone: '666-666-6666' },
      { name: 'some new bar', age: 23, phone: '777-777-7777' }
    ]);
    return request(app)
      .get('/api/v1/bars')
      .then(res => {
        bars.forEach(bar => {
          expect(res.body).toContainEqual({
            _id: bar._id.toString(),
            name: bar.name,
            age: bar.age,
            phone: bar.phone,
            __v: 0
          });
        });
      });
  });

  it('deletes a bar by id', async() => {
    return request(app)
      .delete(`/api/v1/bars/${bar._id}`)
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
  it('gets a bar by id', async() => {
    return request(app)
      .get(`/api/v1/bars/${bar._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: bar._id.toString(),
          name: 'some bar',
          phone: '555-555-5555',
          age: 21,
          __v: 0
        });
      });
  });

  it('updates with bar with id', async() => {
    return request (app)
      .patch(`/api/v1/bars/${bar._id}`)
      .send({ name: 'some newer bar' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'some newer bar',
          phone: '555-555-5555',
          age: 21,
          __v: 0
        });
      });
  });
});


