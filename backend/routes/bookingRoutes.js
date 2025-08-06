const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking.js'); // Make sure this model exists

router.post('/create-booking', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
