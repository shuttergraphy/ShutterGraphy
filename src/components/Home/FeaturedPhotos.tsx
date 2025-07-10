import React from 'react';
import { Heart, ShoppingCart, Download, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { mockPhotos } from '../../data/mockData';

export function FeaturedPhotos() {
  const { state, dispatch } = useApp();

  const handleAddToCart = (photo: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: photo });
  };

  const handleAddToWishlist = (photo: any) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: photo });
  };

  const isInWishlist = (photoId: string) => {
    return state.wishlist.some(photo => photo.id === photoId);
  };

  return (
    <section className={`py-20 ${
      state.theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${
            state.theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Photography
          </h2>
          <p className={`text-lg ${
            state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover the most popular and trending photos from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-xl transition-transform duration-300 hover:transform hover:scale-105 ${
                state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleAddToWishlist(photo)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      isInWishlist(photo.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 hover:bg-white/30 text-white'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleAddToCart(photo)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${photo.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  state.theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {photo.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 ${
                  state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {photo.description}
                </p>

                {/* Photographer Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={photo.photographer.avatar}
                      alt={photo.photographer.username}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className={`text-sm font-medium ${
                        state.theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {photo.photographer.fullName}
                      </p>
                      <p className={`text-xs ${
                        state.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        @{photo.photographer.username}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className={`text-sm ${
                      state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {photo.rating}
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4 text-gray-500" />
                      <span className={state.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                        {photo.downloads}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-gray-500" />
                      <span className={state.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                        {photo.likes}
                      </span>
                    </div>
                  </div>
                  <div className={`text-xs ${
                    state.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {photo.resolution.width} × {photo.resolution.height}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
}