/* eslint-disable no-console */
const app = require('./lib/app');
require('dotenv').config();
require('./config/db')();
// route files



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.yellow.bold);
});


