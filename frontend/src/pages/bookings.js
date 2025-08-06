import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const bookingOptions = [
  "అభిషేకం", "పడి దీపారాధన", "గణపతి హోమం", "లక్ష పుష్పార్చన",
  "మహా పడి పూజ", "శాంతి హోమం", "పల్లకీ సేవ"
];

const servicePrices = {
  "అభిషేకం": 501,
  "పడి దీపారాధన": 251,
  "గణపతి హోమం": 1116,
  "లక్ష పుష్పార్చన": 2501,
  "మహా పడి పూజ": 1501,
  "శాంతి హోమం": 1001,
  "పల్లకీ సేవ": 751
};

const BookingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: bookingOptions[0],
    date: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting booking:', {
        ...formData,
        amount: servicePrices[formData.service],
      });

      const response = await fetch('https://kailasagiri-temple-website-backend.onrender.com/api/create-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          amount: servicePrices[formData.service],
        }),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/ticket', { state: { bookingDetails: data.booking } });
      } else {
        alert('Could not create your booking. Please try again.');
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      alert('Failed to connect to the server. Please check your connection and try again.');
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Book services / సేవలను బుక్ చేసుకోండి
          </h1>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking form / బుకింగ్ ఫారం</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name / పూర్తి పేరు</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number / ఫోన్ నంబర్</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Service / సేవను ఎంచుకోండి</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                required
              >
                {bookingOptions.map(option => (
                  <option key={option} value={option}>
                    {option} - ₹{servicePrices[option]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Required Date / కావలసిన తేదీ</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl font-semibold"
            >
              Generate E-Ticket / ఇ-టికెట్ పొందండి
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
