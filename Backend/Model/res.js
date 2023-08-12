let mongoose = require('mongoose');

let resSchema = new mongoose.Schema({
  _id: Number,
  bus: Number,
  max_available: Number, 
  seat_selected: Array
});

module.exports = mongoose.model('res', resSchema);
