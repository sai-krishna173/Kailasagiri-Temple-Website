const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  service: String,
  date: Date,
  amount: Number,
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
  
},{timestamps:true});

module.exports = mongoose.model('Booking', bookingSchema);
