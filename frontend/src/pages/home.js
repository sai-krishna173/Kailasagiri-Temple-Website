// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Gift, Phone, Clock, MapPin, Megaphone, FileText, Award, HandHeart, Calendar } from 'lucide-react';

// Helper component for the scrolling news ticker
const SevaNewsTicker = () => {
    const newsItems = [
        "Special Seva programs will commence from the month of August.",
        "Darshanam Timings have been changed. Please kindly check for updates.",
        "Visit the temple to receive the divine blessings of Lord Ayyappa."
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % newsItems.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [newsItems.length]);

    return (
        <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-3 text-white shadow-lg">
            <div className="container mx-auto flex items-center px-4 h-8">
                <h3 className="flex-shrink-0 bg-orange-600 text-white font-bold py-1 px-4 rounded-md text-sm uppercase tracking-wider">
                    Seva News
                </h3>
                <div className="ml-4 flex-grow h-full overflow-hidden relative">
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute w-full top-0 left-0 transition-all duration-1000 ease-in-out flex items-center h-full ${
                                index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                            }`}
                        >
                            <Megaphone size={18} className="mr-3 flex-shrink-0 text-orange-400" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Helper component for Legacy & Registration stats
const LegacyStat = ({ icon: Icon, value, label }) => (
    <div className="p-6">
        <Icon className="w-12 h-12 mx-auto text-orange-500" />
        <p className="text-4xl font-bold text-gray-800 mt-4">{value}</p>
        <h3 className="mt-2 font-semibold text-lg text-gray-600">{label}</h3>
    </div>
);

// Helper component for Information Cards
const InfoCard = ({ icon: Icon, title, line1, line2 }) => (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
        <Icon className="w-12 h-12 mx-auto text-orange-500" />
        <h3 className="mt-4 font-semibold text-2xl text-gray-700">{title}</h3>
        <p className="text-gray-600 mt-2">{line1}</p>
        <p className="text-gray-600">{line2}</p>
    </div>
);

// Helper component for the cards in the Quick Links section
const QuickLinkCard = ({ to, icon: Icon, label, highlight = false }) => (
    <Link 
        to={to} 
        className={`group text-center p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
            highlight 
            ? 'bg-orange-500 hover:bg-orange-600' 
            : 'bg-white hover:bg-gray-50'
        }`}
    >
        <Icon className={`w-12 h-12 mx-auto transition-colors ${
            highlight 
            ? 'text-white' 
            : 'text-orange-500 group-hover:text-orange-600'
        }`} />
        <h3 className={`mt-4 font-semibold text-lg ${
            highlight 
            ? 'text-white' 
            : 'text-gray-700'
        }`}>{label}</h3>
    </Link>
);

const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
        {/* Main Welcome Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600">
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                <div className="mb-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-4xl"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJwY_zMrCy-LDOPiJfKQErK18ciKFoMV2lQ&s" /></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                        Kailasagiri Ayyappa Temple
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-orange-100">
                        భక్తి, శాంతి మరియు ఆధ్యాత్మికతకు కేంద్రం
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/history" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105">
                            Our History / మా చరిత్ర
                        </Link>
                        <Link to="/events" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105">
                            Events / కార్యక్రమాలు
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <SevaNewsTicker />

        <section className="py-16 bg-orange-50/50">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
                    స్వామియే శరణం అయ్యప్ప
                </h2>
                <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
                    Experience divinity, peace, and spiritual bliss at our sacred abode. Join us for daily poojas and special events.
                </p>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <LegacyStat icon={FileText} value="438/2010" label="Registered Society Number" />
                    <LegacyStat icon={Award} value="25+" label="Years of Devotional Legacy" />
                </div>
            </div>
        </section>

        <section className="py-20 bg-orange-50/50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="w-full">
                        <img
                            src="https://templewebsite-sooty.vercel.app/static/media/rana%202.c106d54d2475a6f2778c.jpeg"
                            alt="Temple History Glimpse"
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">A Glimpse Into Our Sacred History</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            For over 25 years, our temple has been a pillar of the community, fostering devotion and peace. Founded with a vision to create a spiritual sanctuary, we continue to uphold a rich legacy of traditions and service to all devotees of Lord Ayyappa.
                        </p>
                        <Link to="/history" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 inline-block">
                            Read Our Full History
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">Upcoming Events / రాబోయే కార్యక్రమాలు</h2>
                <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg border border-orange-200">
                    <div className="flex flex-col items-center">
                        <Calendar className="w-12 h-12 text-orange-500 mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Special programs in Mandal /మండలంలో ప్రత్యేక కార్యక్రమాలు
                        </h3>
                        <p className="text-lg text-red-600 font-bold mt-2">
                            (16-11-2025 నుండి 30-12-2025 వరకు)
                        </p>
                        <Link to="/events" className="mt-6 inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-transform hover:scale-105">
                            View All Events
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* This is the ONE Quick Links section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Quick Links</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    <QuickLinkCard to="/services" icon={Heart} label="Our Services" />
                    <QuickLinkCard to="/gallery" icon={Camera} label="Photo Gallery" />
                    <QuickLinkCard to="/bookings" icon={Gift} label="Book a Pooja" />
                    <QuickLinkCard to="/donation" icon={HandHeart} label="Make a Donation" highlight={false} />
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Temple Information</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
                    <InfoCard
                        icon={Clock}
                        title="Temple Timings"
                        line1="Morning: 5:00 AM - 1:00 PM"
                        line2="Evening: 4:30 PM - 9:00 PM"
                    />
                    <InfoCard
                        icon={MapPin}
                        title="Our Location"
                        line1="Kailasagiri Temple Rd, Moula Ali"
                        line2="Secunderabad, Telangana 500040"
                    />
                </div>
            </div>
        </section>
    </div>
);

export default HomePage;