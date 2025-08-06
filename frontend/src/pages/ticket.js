// src/pages/TicketPage.js
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

const TicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticketRef = useRef(null);
  
  // Get booking details passed from the previous page
  const bookingDetails = location.state?.bookingDetails;

  // If no booking details are found, redirect back to the bookings page
  if (!bookingDetails) {
    navigate('/bookings');
    return null; 
  }

  const handleDownloadPdf = () => {
    const input = ticketRef.current;
    html2canvas(input, { scale: 2 }) // Use scale for better resolution
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30; // Margin from top
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save(`e-ticket-${bookingDetails.bookingId}.pdf`);
      });
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-100 flex flex-col items-center py-12">
      {/* This is the visual ticket that will be converted to PDF */}
      <div ref={ticketRef} className="bg-white p-8 border-2 border-dashed border-gray-400 w-full max-w-2xl text-gray-800">
        <div className="text-center mb-8 border-b-2 pb-4">
          <h1 className="text-3xl font-bold text-blue-800">Kailasagiri Ayyappa Temple</h1>
          <p className="text-lg">E-Ticket / Seva Reservation</p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-gray-500">BOOKING ID</p>
            <p className="font-mono text-lg">{bookingDetails.bookingId}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500">BOOKING DATE</p>
            <p className="font-mono text-lg">{new Date(bookingDetails.createdAt).toLocaleDateString('en-IN')}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500">DEVOTEE NAME</p>
            <p className="text-lg font-bold">{bookingDetails.name}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500">PHONE NUMBER</p>
            <p className="text-lg">{bookingDetails.phone}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500">SEVA / SERVICE</p>
            <p className="text-lg font-bold">{bookingDetails.service}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500">SEVA DATE</p>
            <p className="text-lg font-bold">{new Date(bookingDetails.date).toLocaleDateString('en-IN', { timeZone: 'UTC' })}</p>
          </div>
        </div>

        <div className="text-center bg-yellow-100 border-t-4 border-yellow-500 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Instructions / సూచనలు</h2>
          <p className="text-lg">Please show this E-Ticket at the temple counter to make the payment of **₹{bookingDetails.amount}** and collect your final receipt.</p>
          <p className="mt-2">దయచేసి ఈ ఇ-టికెట్‌ను ఆలయ కౌంటర్‌లో చూపి, **₹{bookingDetails.amount}** రుసుము చెల్లించి మీ రసీదును పొందగలరు.</p>
        </div>
      </div>
      
      {/* Download Button - This will NOT be in the PDF */}
      <button 
        onClick={handleDownloadPdf}
        className="mt-8 bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
      >
        Download PDF / PDF డౌన్లోడ్ చేయండి
      </button>
    </div>
  );
};

export default TicketPage;