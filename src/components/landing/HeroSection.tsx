import React, { useState, useEffect } from 'react';
import { FiCalendar, FiArrowRight, FiClock, FiDollarSign } from 'react-icons/fi';

export default function HeroSection() {
  // Array of hero images
  const heroImages = [
    "/hero-sign-1.jpg",
    "/hero-sign-2.jpg",
    "/hero-sign-3.jpg"
    // Add more images as needed
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setFade(true); // Fade in new image
      }, 400); // Fade out duration
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Save <span className="text-blue-600">$700</span> on Graduation Yard Signs
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Eliminate setup fees and reclaim 20+ volunteer hours with our automated 
              yard sign production service. Professional results, zero hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://calendly.com/signcraft-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <FiCalendar className="h-5 w-5" />
                <span>Schedule a Call</span>
              </a>
              <a
                href="#signup"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <FiArrowRight className="h-5 w-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <FiDollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">$700 Saved</div>
                  <div className="text-sm text-gray-600">No setup fees</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FiClock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">20+ Hours</div>
                  <div className="text-sm text-gray-600">Volunteer time saved</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="w-full aspect-[4/3]">
                <img
                  src={heroImages[currentImage]}
                  alt={`Graduation yard sign ${currentImage + 1}`}
                  className={`w-full h-full object-contain rounded-lg transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Professional, personalized signs</p>
                <p className="text-sm text-gray-600">delivered print-ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}