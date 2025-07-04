import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/mockData';

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Categories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our diverse collection of high-quality photos across various categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="group relative bg-white dark:bg-dark-800 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-dark-700"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {category.count.toLocaleString()} photos
              </p>
              <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;