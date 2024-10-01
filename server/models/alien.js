const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    required: true
  }
});

const Alien = mongoose.model('Alien', alienSchema);

module.exports = Alien;
