/* eslint-disable no-console */
const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/v1/bars', require('./routes/bars'));


module.exports = app;
