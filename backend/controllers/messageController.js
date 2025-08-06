// controllers/messageController.js

const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
  try {
    const { name, phone, service, date, amount } = req.body;
    const newBooking = new Booking({ name, phone, service, date, amount });
    const savedBooking = await newBooking.save();
    res.json({ success: true, booking: savedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { createBooking };
