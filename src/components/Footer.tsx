import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaGraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ClassYardSigns</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Helping schools save time and money with automated graduation yard sign production. 
              Professional results without the hassle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FiMail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">hello@ClassYardSigns.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-400">
            © 2025 ClassYardSigns. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}