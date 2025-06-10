import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function PricingSection() {
  const plans = [
    {
      name: 'Bronze',
      price: 300,
      students: '≤ 100 students',
      savings: '400'
    },
    {
      name: 'Silver',
      price: 500,
      students: '≤ 300 students',
      savings: '200'
    },
    {
      name: 'Gold',
      price: 700,
      students: '> 300 students',
      savings: '0'
    }
  ];

  const features = [
    'Automated design layout',
    'Professional photo cropping',
    'Print-ready PDF files',
    'Delivery route optimization',
    'Proofs within 1 week',
    'Email and phone support',
    'Custom school branding',
    'Multiple design revisions',
    'Secure data handling'
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your plan is automatically determined by your school size. Every tier includes 
            the same comprehensive features and saves you money compared to traditional setup fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <div className="text-gray-600 text-sm mt-1">{plan.students}</div>
                </div>
                {plan.savings !== '0' && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${plan.savings} vs. setup fees
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Every Plan Includes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FiCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Save Time and Money?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Your pricing tier is automatically determined by your graduating class size. 
              Sign up today and we'll handle everything from design to delivery optimization.
            </p>
            <a
              href="#signup"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              <span>Get Started Today</span>
              <FiArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600">
            All plans include secure data handling and deletion after 30 days. 
            Questions? <a href="mailto:hello@signcraft.com" className="text-blue-600 hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
}