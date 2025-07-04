import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">ShutterGraphy</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Discover and share stunning photography from creators worldwide. Capture. Upload. Earn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Browse */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Browse
            </h3>
            <ul className="space-y-2">
              <li><Link to="/browse" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">All Photos</Link></li>
              <li><Link to="/categories/nature" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Nature</Link></li>
              <li><Link to="/categories/urban" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Urban</Link></li>
              <li><Link to="/categories/portrait" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Portrait</Link></li>
              <li><Link to="/categories/wildlife" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Wildlife</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Press</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Get the latest photos and photography tips delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-200 dark:border-dark-700 rounded-l-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <button className="bg-primary-500 text-white px-4 py-2 rounded-r-lg hover:bg-primary-600 transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/licenses" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors text-sm">
                Licenses
              </Link>
              <Link to="/help" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors text-sm">
                Help Center
              </Link>
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © 2024 ShutterGraphy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;