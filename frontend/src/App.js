// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Import Icons
import { Home, BookOpen, Calendar, Camera, Heart, Phone, Gift, Menu, X, Mail, MapPin, HandHeart } from 'lucide-react';

// Import all page components
import HomePage from './pages/home';
import HistoryPage from './pages/history';
import EventsPage from './pages/events';
import GalleryPage from './pages/gallery';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';
import BookingsPage from './pages/bookings';
import DonationPage from './pages/donation';
import ETicketPage from './pages/ticket'; // 1. Correctly imported the E-Ticket page
import ScrollToTop from './components/scrolltotop'; 

const navigation = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/history', label: 'History', icon: BookOpen },
  { path: '/events', label: 'Events', icon: Calendar },
  { path: '/bookings', label: 'Bookings', icon: Gift },
  { path: '/donation', label: 'Donations', icon: HandHeart },
  { path: '/gallery', label: 'Gallery', icon: Camera },
  { path: '/services', label: 'Services', icon: Heart },
  { path: '/contact', label: 'Contact', icon: Phone }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
                
                <h1 className={`font-bold text-xl ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>Kailasagiri Ayyappa Temple </h1>
            </Link>
            
            <nav className="hidden md:flex space-x-4">
                {navigation.map(item => (
                    <Link key={item.path} to={item.path} className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium ${location.pathname === item.path ? (scrollY > 50 ? 'bg-orange-100 text-orange-600' : 'bg-white/20 text-white') : (scrollY > 50 ? 'text-gray-700 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10')}`}>
                        <item.icon size={16} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 rounded-lg ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
        {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg p-2">
                {navigation.map(item => (
                    <Link key={item.path} to={item.path} className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-md ${location.pathname === item.path ? 'bg-orange-100 text-orange-600' : 'text-gray-700'}`}>
                        <item.icon size={18} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        )}
      </div>
    </header>
  );
};

const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-2">Kailasagiri Ayyappa Temple / కైలాసగిరి అయ్యప్ప దేవాలయం</h3>
            <p className="text-gray-400 mb-4">Kailasagiri Temple Rd, Moula Ali, Secunderabad, Telangana 500040</p>
            <div className="flex justify-center space-x-6 mb-6">
                <a href="tel:7893844459" className="flex items-center space-x-2 text-gray-300 hover:text-orange-400"><Phone size={16} /><span>+91 7893844459</span></a>
                <a href="mailto:ayyappasevasamithikailasagiri@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-orange-400"><Mail size={16} /><span>Email Us</span></a>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-6">
                <p className="text-gray-500">© Sai Krishna Gandla. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donation" element={<DonationPage />} />
            
            {/* 2. Correctly added the route for the E-Ticket page */}
            <Route path="/ticket" element={<ETicketPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;