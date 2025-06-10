import React from 'react';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pilot School Success Story
          </h2>
          <p className="text-xl text-blue-100">
            See how Milton High School saved time and money with our service
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <FaQuoteLeft className="h-12 w-12 text-blue-200 mx-auto mb-6" />
          
          <blockquote className="text-xl text-gray-700 text-center leading-relaxed mb-8">
            "We saved <strong>$700</strong> and finished our senior sign prep in just <strong>45 minutes</strong> 
            instead of our usual weekend of work. The quality was professional and every single 
            sign was perfect. Our volunteers kept asking 'why didn't we have this last year?'"
          </blockquote>
          
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-lg">Sarah Chen</div>
            <div className="text-gray-600">PTO President, Milton High School</div>
            <div className="text-sm text-gray-500 mt-1">300 seniors • Class of 2025</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$700</div>
              <div className="text-sm text-gray-600">Setup fees saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">45min</div>
              <div className="text-sm text-gray-600">Total prep time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">300</div>
              <div className="text-sm text-gray-600">Perfect signs delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}