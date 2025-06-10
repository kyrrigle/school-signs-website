import React, { useState } from 'react';
import { FiCalendar, FiShield, FiClock } from 'react-icons/fi';

export default function SignUpSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    schoolWebsite: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // AI-TODO: Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! We\'ll send you a magic link to get started.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        schoolWebsite: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="signup" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Save Time and Money?
            </h2>
            <p className="text-xl text-gray-600">
              Sign up today and we'll send you a secure link to get started. No payment required upfront.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Create Your Account</h3>
              
              {submitMessage ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-800 font-semibold mb-2">Success!</div>
                  <p className="text-green-700">{submitMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@school.edu"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                      School Name *
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      required
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Lincoln High School"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="schoolWebsite" className="block text-sm font-medium text-gray-700 mb-2">
                      School Website *
                    </label>
                    <input
                      type="url"
                      id="schoolWebsite"
                      name="schoolWebsite"
                      required
                      value={formData.schoolWebsite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://lincolnhigh.edu"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>
              )}
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <FiCalendar className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Prefer to Talk First?</h4>
                <p className="text-gray-600 mb-4">
                  Schedule a 15-minute call to discuss your school's needs and see examples.
                </p>
                <a
                  href="https://calendly.com/signcraft-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Book a Demo Call →
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <FiShield className="h-8 w-8 text-green-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Secure & Private</h4>
                <p className="text-gray-600">
                  Student data is encrypted, handled securely, and automatically deleted 
                  30 days after project completion.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <FiClock className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h4>
                <p className="text-gray-600">
                  Proofs delivered within 1 week of receiving your assets. 
                  Final files typically ready in 1-2 days after approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}