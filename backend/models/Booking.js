const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);
