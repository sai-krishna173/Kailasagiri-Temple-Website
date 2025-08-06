// src/data.js
import { Clock, Star, Heart, Gift } from 'lucide-react';

export const services = [
  { 
    title: "Daily Darshan", 
    time: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM", 
    icon: Clock, 
    description: "Regular temple darshan timings" 
  },
  { 
    title: "Special Puja", 
    time: "By Appointment", 
    icon: Star, 
    description: "Personalized puja services for devotees" 
  },
  { 
    title: "Wedding Ceremonies", 
    time: "Advance Booking Required", 
    icon: Heart, 
    description: "Sacred wedding ceremonies in divine presence" 
  },
  { 
    title: "Annadanam", 
    time: "12:00 PM - 2:00 PM", 
    icon: Gift, 
    description: "Free meal service for all devotees" 
  }
];

export const galleryImages = [
  { id: 1, alt: "Main Temple", category: "architecture" },
  { id: 2, alt: "Festival Celebration", category: "events" },
  { id: 3, alt: "Evening Aarti", category: "rituals" },
  { id: 4, alt: "Temple Interior", category: "architecture" },
  { id: 5, alt: "Cultural Program", category: "events" },
  { id: 6, alt: "Morning Puja", category: "rituals" }
];