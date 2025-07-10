import React from 'react';
import { Camera, TrendingUp, Shield, DollarSign } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export function CallToAction() {
  const { state } = useApp();

  return (
    <section className={`py-20 ${
      state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            state.theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Start Your Journey?
          </h2>
          <p className={`text-lg ${
            state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Whether you're a photographer or looking for the perfect image, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Photographers */}
          <div className={`p-8 rounded-2xl ${
            state.theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${
                state.theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                For Photographers
              </h3>
              <p className={`${
                state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Turn your passion into profit by selling your photography
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-emerald-600" />
                <span className={state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Keep up to 80% of your sales
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <span className={state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Real-time analytics and insights
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span className={state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Secure payments and copyright protection
                </span>
              </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Selling Today
            </button>
          </div>

          {/* For Buyers */}
          <div className={`p-8 rounded-2xl ${
            state.theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${
                state.theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                For Buyers
              </h3>
              <p className={`${
                state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Find the perfect images for your creative projects
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-teal-600" />
                <span className={state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Licensed for commercial use
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-teal-600" />
                <span className={state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  High-resolution downloads
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-teal-600" />
                <span className={state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Affordable pricing for all budgets
                </span>
              </div>
            </div>

            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Browse Photography
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}