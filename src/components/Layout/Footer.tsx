import React from 'react';
import { Camera, Mail, MapPin, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export function Footer() {
  const { state } = useApp();

  return (
    <footer className={`border-t transition-colors ${
      state.theme === 'dark' 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ShutterGraphy
              </span>
            </div>
            <p className={`text-sm leading-relaxed mb-4 ${
              state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The premier platform for buying and selling high-quality photography. 
              Connect with talented photographers worldwide and discover stunning images 
              for your creative projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`p-2 rounded-lg transition-colors ${
                  state.theme === 'dark'
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                    : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-lg transition-colors ${
                  state.theme === 'dark'
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                    : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-lg transition-colors ${
                  state.theme === 'dark'
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                    : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${
              state.theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Browse Photos', 'Sell Your Work', 'Pricing', 'FAQ', 'Support'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`text-sm transition-colors ${
                      state.theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${
              state.theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Legal
            </h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'License Agreement', 'Copyright Policy'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`text-sm transition-colors ${
                      state.theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${
          state.theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${
              state.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2024 ShutterGraphy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className={`text-sm transition-colors ${
                  state.theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Accessibility
              </a>
              <a
                href="#"
                className={`text-sm transition-colors ${
                  state.theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}