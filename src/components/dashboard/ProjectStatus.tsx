import React from 'react';
import { FiCheckCircle, FiClock, FiUpload, FiDownload } from 'react-icons/fi';

export default function ProjectStatus() {
  // Mock data - in real app, this would come from your backend
  const projectStatus = {
    step: 2, // Current step (0-indexed)
    contactSheetApproved: false,
    paid: false
  };

  const steps = [
    {
      id: 1,
      title: 'Assets Uploaded',
      description: 'Your student photos and roster have been received',
      icon: FiUpload,
      completed: true,
      current: false
    },
    {
      id: 2,
      title: 'Contact Sheet Ready',
      description: 'Review and approve your proof sheet',
      icon: FiClock,
      completed: false,
      current: true
    },
    {
      id: 3,
      title: 'Payment Complete',
      description: 'Project fee payment processed',
      icon: FiCheckCircle,
      completed: false,
      current: false
    },
    {
      id: 4,
      title: 'Final Files Ready',
      description: 'Download your print-ready sign files',
      icon: FiDownload,
      completed: false,
      current: false
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Status</h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                step.completed 
                  ? 'bg-green-100 text-green-600' 
                  : step.current 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-400'
              }`}>
                <Icon className="h-5 w-5" />
              </div>
              
              <div className="flex-grow">
                <h3 className={`font-medium ${
                  step.completed 
                    ? 'text-green-800' 
                    : step.current 
                      ? 'text-blue-800' 
                      : 'text-gray-500'
                }`}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {step.description}
                </p>
                
                {step.current && (
                  <div className="mt-2">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Action needed:</strong> Your contact sheet is ready for review. 
                        Please download and approve it to proceed to payment.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {step.completed && (
                <FiCheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}