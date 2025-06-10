import React from 'react';
import { FiDownload, FiEye, FiFileText, FiPackage } from 'react-icons/fi';

export default function FileDownloads() {
  // AI-TODO: Mock data - in real app, this would come from your backend
  const files = [
    {
      id: 1,
      type: 'contact_sheet',
      title: 'Contact Sheet Proofs',
      description: 'Review all student signs before approval',
      filename: 'lincoln_high_contact_sheet.pdf',
      size: '2.4 MB',
      available: true,
      approved: false
    },
    {
      id: 2,
      type: 'final_assets',
      title: 'Print-Ready Sign Files',
      description: 'High-resolution files for printing',
      filename: 'lincoln_high_final_signs.pdf',
      size: '15.8 MB',
      available: false,
      approved: false
    },
    {
      id: 3,
      type: 'delivery_bundles',
      title: 'Delivery Route Bundles',
      description: 'Organized by neighborhood with maps',
      filename: 'lincoln_high_delivery_bundles.pdf',
      size: '4.2 MB',
      available: false,
      approved: false
    }
  ];

  const handleDownload = (file: any) => {
    // In real app, this would generate a signed URL and download the file
    console.log('Downloading:', file.filename);
    alert(`Downloading ${file.filename}...`);
  };

  const handleApprove = (file: any) => {
    // In real app, this would call your backend API
    console.log('Approving:', file.filename);
    alert('Contact sheet approved! You can now proceed to payment.');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Files</h2>
      
      <div className="space-y-4">
        {files.map((file) => {
          const getIcon = (type: string) => {
            switch (type) {
              case 'contact_sheet':
                return FiEye;
              case 'final_assets':
                return FiFileText;
              case 'delivery_bundles':
                return FiPackage;
              default:
                return FiFileText;
            }
          };
          
          const Icon = getIcon(file.type);
          
          return (
            <div 
              key={file.id} 
              className={`border rounded-lg p-4 ${
                file.available ? 'border-gray-200' : 'border-gray-100 bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    file.available ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div>
                    <h3 className={`font-medium ${
                      file.available ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {file.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {file.description}
                    </p>
                    {file.available && (
                      <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                        <span>{file.filename}</span>
                        <span>•</span>
                        <span>{file.size}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {file.available ? (
                    <>
                      <button
                        onClick={() => handleDownload(file)}
                        className="inline-flex items-center space-x-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                      >
                        <FiDownload className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                      
                      {file.type === 'contact_sheet' && !file.approved && (
                        <button
                          onClick={() => handleApprove(file)}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                        >
                          Approve
                        </button>
                      )}
                    </>
                  ) : (
                    <span className="text-sm text-gray-400">Not available</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Files are available for download for 30 days after project completion. 
          We automatically delete all student data after this period for privacy protection.
        </p>
      </div>
    </div>
  );
}