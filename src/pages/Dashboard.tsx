import React from 'react';
import { useAuth } from '../context/AuthContext';
import ProjectStatus from '../components/dashboard/ProjectStatus';
import FileDownloads from '../components/dashboard/FileDownloads';
import PaymentSection from '../components/dashboard/PaymentSection';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back!
          </h1>
          <p className="text-gray-600 mt-2">
            Track your graduation sign project progress and download files.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProjectStatus />
            <FileDownloads />
          </div>
          
          <div className="space-y-8">
            <PaymentSection />
          </div>
        </div>
      </div>
    </div>
  );
}