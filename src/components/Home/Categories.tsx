import React from 'react';
import { useApp } from '../../context/AppContext';
import { mockCategories } from '../../data/mockData';

export function Categories() {
  const { state } = useApp();

  return (
    <section className={`py-20 ${
      state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${
            state.theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Explore Categories
          </h2>
          <p className={`text-lg ${
            state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Browse photos by category to find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockCategories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-square relative">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.photoCount.toLocaleString()} photos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}