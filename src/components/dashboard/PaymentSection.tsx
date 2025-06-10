import React from 'react';
import { FiCreditCard, FiShield, FiCheck } from 'react-icons/fi';

export default function PaymentSection() {
  // Mock data - in real app, this would come from your backend
  const customerData = {
    tier: 'silver',
    amount: 500,
    contactSheetApproved: false,
    paid: false,
    schoolName: 'Lincoln High School'
  };

  const handlePayment = () => {
    // In real app, this would redirect to Stripe Checkout
    alert('Redirecting to secure payment...');
  };

  const getTierInfo = (tier: string) => {
    switch (tier) {
      case 'bronze':
        return { name: 'Bronze', students: '≤ 100 students', color: 'text-amber-600' };
      case 'silver':
        return { name: 'Silver', students: '≤ 300 students', color: 'text-gray-600' };
      case 'gold':
        return { name: 'Gold', students: '> 300 students', color: 'text-yellow-600' };
      default:
        return { name: 'Unknown', students: '', color: 'text-gray-600' };
    }
  };

  const tierInfo = getTierInfo(customerData.tier);

  return (
    <div className="space-y-6">
      {/* Project Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">School:</span>
            <span className="font-medium">{customerData.schoolName}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Package:</span>
            <span className={`font-medium capitalize ${tierInfo.color}`}>
              {tierInfo.name}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Students:</span>
            <span className="font-medium">{tierInfo.students}</span>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-gray-900">
                ${customerData.amount}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment</h2>
        
        {customerData.paid ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Payment Complete</h3>
            <p className="text-green-600">Your final files will be ready soon!</p>
          </div>
        ) : customerData.contactSheetApproved ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                <strong>Contact sheet approved!</strong> You can now complete your payment to receive the final print-ready files.
              </p>
            </div>
            
            <button
              onClick={handlePayment}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <FiCreditCard className="h-5 w-5" />
              <span>Pay ${customerData.amount} Now</span>
            </button>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FiShield className="h-4 w-4" />
              <span>Secure payment powered by Stripe</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCreditCard className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Payment Pending</h3>
            <p className="text-gray-600">
              Please approve the contact sheet first to unlock payment.
            </p>
          </div>
        )}
      </div>

      {/* Help Section */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
        <p className="text-sm text-blue-800 mb-4">
          Questions about your project or files? Our team is here to help.
        </p>
        <div className="space-y-2 text-sm">
          <a href="mailto:hello@signcraft.com" className="block text-blue-600 hover:underline">
            📧 hello@signcraft.com
          </a>
          <a href="tel:+15551234567" className="block text-blue-600 hover:underline">
            📞 (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
}