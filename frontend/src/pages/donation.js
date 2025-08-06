// src/pages/DonationPage.js
import React from 'react';
import { HandHeart, Banknote, QrCode } from 'lucide-react';

const DonationPage = () => {
  return (
    <div className="pt-24 pb-16 bg-orange-50/50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <HandHeart className="mx-auto h-16 w-16 text-orange-500" />
          <h1 className="text-4xl font-bold text-gray-800 mt-4 tracking-tight">Support Our Temple / మా ఆలయానికి మద్దతు ఇవ్వండి</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Your generous contributions help us maintain the temple, perform daily rituals, organize community events, and serve devotees. Every donation, big or small, makes a significant impact.
            <br />
            మీ ఉదారమైన విరాళాలు ఆలయ నిర్వహణ, నిత్య పూజలు, సామాజిక కార్యక్రమాలు నిర్వహించడం మరియు భక్తులకు సేవ చేయడంలో మాకు సహాయపడతాయి.
          </p>
        </div>

        {/* Donation Options Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Bank Transfer Details Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Banknote className="h-8 w-8 text-orange-600 mr-4 flex-shrink-0" />
              <h2 className="text-2xl font-semibold text-gray-800">Bank Transfer /బ్యాంక్ బదిలీ</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Account Name:</strong> AYYAPPA SEVA SAMITHI KAILASAGIRI</p>
              <p><strong>Account Number:</strong> [Your Account Number]</p>
              <p><strong>Bank:</strong> State Bank of India</p>
              <p><strong>Branch:</strong> Moula Ali</p>
              <p><strong>IFSC Code:</strong> [Your IFSC Code]</p>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Please mention "Donation" in the transaction remarks for our records.
            </p>
          </div>

          {/* UPI / QR Code Details Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <QrCode className="h-8 w-8 text-orange-600 mr-4 flex-shrink-0" />
              <h2 className="text-2xl font-semibold text-gray-800">UPI / QR Code</h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              {/* Replace with your actual QR code image path */}
              <div className="w-48 h-48 bg-gray-200 flex items-center justify-center mb-4 rounded-lg">
                 <span className="text-gray-500">Your QR Code Image</span>
              </div>
              <p className="text-lg font-medium text-gray-800">
                <strong>UPI ID:</strong> <span className="text-orange-600">[your-upi-id@okhdfcbank]</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Scan the QR code using any UPI app like GPay, PhonePe, or Paytm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;