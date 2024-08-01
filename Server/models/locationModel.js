const mongoose = require('mongoose')
const locationSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    location: { type: String, required: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true }
  });
  
  module.exports = mongoose.model('Location', locationSchema);
