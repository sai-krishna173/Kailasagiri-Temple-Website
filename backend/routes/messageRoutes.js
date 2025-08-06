// backend/routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/messageController');

router.post('/create-booking', createBooking);

module.exports = router;
