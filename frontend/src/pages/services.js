// src/pages/ServicesPage.js
import React from 'react';
import { services } from '../data.js';
import { ChevronRight } from 'lucide-react';

const ServicesPage = () => (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Services / ఆలయ సేవలు
                </h1>
                <p className="text-xl text-gray-600">మీ ఆధ్యాత్మిక ప్రయాణాన్ని సుసంపన్నం చేసే పవిత్ర సేవలు</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <service.icon className="text-white" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                                <p className="text-green-600 font-semibold">{service.time}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-4">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ServicesPage;