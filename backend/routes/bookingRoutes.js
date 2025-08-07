const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

function generateBookingId() {
  return 'BK' + Date.now().toString().slice(-6);
}

router.post('/create-booking', async (req, res) => {
  try {
    const { name, phone, service, date, amount } = req.body;

    const bookingId = generateBookingId();

    const newBooking = new Booking({
      name,
      phone,
      service,
      date,
      amount,
      bookingId
    });

    await newBooking.save();

    res.status(200).json({ success: true, booking: newBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});
module.exports = router;
