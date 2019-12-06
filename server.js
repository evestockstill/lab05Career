
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
// route files
dotenv.config({ path: './config/.env' });
connectDB();

const app = express();
// body parser
app.use(express.json());

// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`server running on ${PORT}`.yellow.bold)
);
process.on('unhandledRejection', (err, promise) => {
  console.log(`error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
module.exports = app;