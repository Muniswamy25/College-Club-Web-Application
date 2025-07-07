
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  link: String,
});

module.exports = mongoose.model('Event', eventSchema);
