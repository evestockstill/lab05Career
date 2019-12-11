/* eslint-disable no-console */
const Bar = require('../models/Bar');
const { Router } = require('express');

module.exports = Router()
  .get('/', async(req, res) => {
    const bars = await Bar.find();
    res.send(bars);
  })
  .get('/:id', async(req, res) => {
    const bar = await Bar.findById(req.params.id);
    res.send(bar);
  })
  .post('/', async(req, res) => {
    const bar = await Bar.create(req.body);
    res.send(bar);
  })
  .put('/:id', async(req, res) => {
    const bar = await Bar.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }); res.send(bar);
  })
  .patch('/:id', async(req, res) => {
    const bar = await Bar.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }); res.send(bar);
  })
  .delete('/:id', async(req, res) => {
    const bar = await Bar.findByIdAndDelete(req.params.id);
    res.send(bar);
  });
