import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, School, Mail, Phone, Globe, Save } from 'lucide-react';

export default function AccountSettings() {
  const { user } = useAuth();
  
  // Mock customer data - in real app, this would come from your backend
  const [formData, setFormData] = useState({
    name: 'Sarah Chen',
    email: user?.email || '',
    phone: '(617) 555-0123',
    schoolName: 'Lincoln High School',
    schoolWebsite: 'https://lincolnhigh.edu'
  });
  
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setUpdateMessage('');

    // Simulate API call
    setTimeout(() => {
      setUpdateMessage('Account updated successfully!');
      setIsUpdating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your account information and school details.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
            <p className="text-gray-600 mt-1">
              Update your personal and school information here.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {updateMessage && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">{updateMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-1" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                  <School className="h-4 w-4 inline mr-1" />
                  School Name
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="schoolWebsite" className="block text-sm font-medium text-gray-700 mb-2">
                <Globe className="h-4 w-4 inline mr-1" />
                School Website
              </label>
              <input
                type="url"
                id="schoolWebsite"
                name="schoolWebsite"
                value={formData.schoolWebsite}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isUpdating}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Save className="h-5 w-5" />
                <span>{isUpdating ? 'Updating...' : 'Save Changes'}</span>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Data & Privacy</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              <strong>Data Retention:</strong> Your student data is automatically deleted 30 days after project completion for privacy protection.
            </p>
            <p>
              <strong>Security:</strong> All data is encrypted in transit and at rest. We use industry-standard security measures to protect your information.
            </p>
            <p>
              <strong>Support:</strong> Need help? Contact us at{' '}
              <a href="mailto:hello@signcraft.com" className="text-blue-600 hover:underline">
                hello@signcraft.com
              </a>{' '}
              or{' '}
              <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}