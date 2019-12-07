const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    maxlength: 20
  },
  age: {
    type: Number,
    required: true,
    min: 21
  },
  averageRating: {
    type: Number,
    min: 1,
    max: 10
  }
});

module.exports = mongoose.model('Bar', schema);
