// src/pages/GalleryPage.js

import React from 'react';


import g1 from '../images/g1.jpeg';
import g7 from '../images/g7.webp';
import check from '../images/check.jpeg';
import g3 from '../images/g3.jpeg';
import g5 from '../images/g5.webp';
import commi from '../images/commi.jpeg';
import g4 from '../images/g4.webp';
import g6 from '../images/g6.jpeg';
import g2 from '../images/g2.jpeg';
import football from '../images/football.jpg';

const images = [
  g1,
  g7,
  check,
  g3,
  g5,
  commi,
  g4,
  g6,
  g2,
  football,
];

const PageLayout = ({ title, children }) => (
    <div className="min-h-screen pt-24 p-4 md:pt-28 bg-white">
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-16 text-orange-600 text-center scroll-mt-24">{title}</h1>
            {children}
        </div>
    </div>
);

const GalleryPage = () => (
    <PageLayout title="Gallery / గ్యాలరీ">
        {images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src={image}
                            alt={`Temple gallery view ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-lg text-gray-700 text-center">
                The photo gallery is currently empty.
            </p>
        )}
    </PageLayout>
);

export default GalleryPage;