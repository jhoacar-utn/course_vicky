const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
  message: String
});

const Welcome = mongoose.model('welcome', welcomeSchema);


module.exports = Welcome;
