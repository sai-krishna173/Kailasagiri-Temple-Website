const Booking = require('../models/Booking');

// ✅ Generate unique bookingId
function generateBookingId() {
  return 'BK' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100);
}

// ✅ Controller function
const createBooking = async (req, res) => {
  try {
    const { name, phone, service, date, amount } = req.body;

    // ✅ Log to confirm
    const bookingId = generateBookingId();
    console.log("Generated Booking ID:", bookingId);

    // ✅ Create new booking with bookingId
    const newBooking = new Booking({
      name,
      phone,
      service,
      date,
      amount,
      bookingId,
      createdAt:new Date()  // ✅ this MUST be added
    });

    await newBooking.save();

    res.status(200).json({ success: true, booking: newBooking });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ success: false, message: "Booking failed", error: error.message });
  }
};

module.exports = { createBooking };
