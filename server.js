
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
// route files
dotenv.config({ path: './config/.env' });
connectDB();


const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`server running on ${PORT}`.yellow.bold)
);
process.on('unhandledRejection', (err, promise) => {
  console.log(`error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
