import React from 'react';
import { AlertCircle, Clock, DollarSign, Users } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: '$700 in Setup Fees',
      description: 'Print shops charge expensive setup fees for design preparation and file formatting.',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Clock,
      title: '15-20 Hours of Work',
      description: 'Volunteers spend entire weekends cropping photos, laying out designs, and exporting files.',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: Users,
      title: 'Error-Prone Process',
      description: 'Manual workflows lead to typos, wrong photos, and last-minute corrections that stress everyone.',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: AlertCircle,
      title: 'Delivery Chaos',
      description: 'Volunteers drive all over town with no optimized routes, wasting time and gas money.',
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Current Process is Expensive and Time-Consuming
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PTOs across the country struggle with the same challenges every graduation season. 
            There has to be a better way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full ${problem.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            <strong>The result?</strong> Many schools choose generic, non-personalized signs 
            to avoid the headache—but that diminishes the special moment for students and families.
          </p>
        </div>
      </div>
    </section>
  );
}