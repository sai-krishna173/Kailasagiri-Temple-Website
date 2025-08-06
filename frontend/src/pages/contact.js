import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Contact Us / మమ్మల్ని సంప్రదించండి
                </h1>
                <p className="text-lg text-gray-600">We'd love to hear from you. Reach out with any questions or inquiries.</p>
            </div>
            
            {/* Main content card */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* Column 1: Temple Information */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800">Temple Information / ఆలయ సమాచారం</h3>
                        <InfoItem 
                            icon={Phone} 
                            title="Phone / ఫోన్"
                            text="+91 7893844459"
                            href="tel:+917893844459"
                        />
                        <InfoItem 
                            icon={Mail} 
                            title="Email / ఈమెయిల్"
                            text="ayyappasevasamithikailasagiri@gmail.com"
                            href="mailto:ayyappasevasamithikailasagiri@gmail.com"
                        />
                        {/* 1. ADDED href PROP TO MAKE THE ADDRESS A CLICKABLE LINK */}
                        <InfoItem 
                            icon={MapPin} 
                            title="Address / చిరునామా"
                            text="Kailasagiri Temple Rd, Moula Ali, Secunderabad, Telangana 500040"
                            href="https://maps.app.goo.gl/XR4uKRkdsT8jhi1dA"
                        />
                    </div>
                    
                    {/* Column 2: "SEND US A MESSAGE" FORM */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800">Send Us a Message / సందేశం పంపండి</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name / పేరు</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Your Full Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email / ఈమెయిల్</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject / విషయం</label>
                                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Reason for contacting" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / సందేశం</label>
                                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" placeholder="Write your message here..."></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* "FIND US ON A MAP" SECTION */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Find Us On a Map / మాప్ లో మమ్మల్ని కనుగొనండి</h2>
                <div className="max-w-6xl mx-auto rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                     {/* 2. UPDATED iframe src WITH THE CORRECT EMBEDDABLE GOOGLE MAPS LINK */}
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.27369395272!2d78.54579487588334!3d17.44650850099684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a2d8aaaaaab%3A0x133d3c88027585a2!2sAyyappa%20Swamy%20Temple%2C%20Kailasagiri!5e0!3m2!1sen!2sin!4v1722336338575!5m2!1sen!2sin1"
                        className="w-full h-96"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kailasagiri Ayyappa Temple Location"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
);

// Helper component for information items to reduce repetition
const InfoItem = ({ icon: Icon, title, text, href }) => {
    const content = (
        <>
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-orange-600" />
            </div>
            <div>
                <h4 className="font-bold text-gray-800">{title}</h4>
                <p className="text-gray-600 break-words">{text}</p>
            </div>
        </>
    );

    // If an href is provided, wrap the content in a link tag
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group hover:bg-orange-50 p-2 rounded-lg transition-colors">
                {content}
            </a>
        );
    }

    return <div className="flex items-center space-x-4 p-2">{content}</div>;
};

export default ContactPage;