import React from 'react';
import { FiCheckCircle, FiUpload, FiEye, FiDownload } from 'react-icons/fi';
import { FaTruck } from 'react-icons/fa';

export default function SolutionSection() {
  const steps = [
    {
      icon: FiUpload,
      title: 'Upload Your Assets',
      description: 'Send us your student roster (CSV), photos, and school branding via secure link. Takes 5 minutes.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: FiEye,
      title: 'Review Proofs',
      description: 'Within one week, we deliver a PDF contact sheet of all signs for your approval.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: FiCheckCircle,
      title: 'Approve & Pay',
      description: 'Make any corrections, approve the final design, and complete payment through our secure portal.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: FiDownload,
      title: 'Get Print Files',
      description: 'Receive print-ready PDFs and delivery bundles—take them to any print shop, no setup fees.',
      color: 'text-amber-600 bg-amber-100'
    }
  ];

  const benefits = [
    'No more cropping photos or laying out designs',
    'Professional, consistent results every time',
    'Optimized delivery routes save time and gas',
    // If you want to use the truck icon somewhere, use <FaTruck />
    'Print-ready files work with any vendor',
    'Secure handling of student information',
    'Fast turnaround: proofs in 1 week, finals in 1-2 days'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Turnkey Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle the entire production workflow behind the scenes. You upload, 
            approve, and receive—that's it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FiCheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}