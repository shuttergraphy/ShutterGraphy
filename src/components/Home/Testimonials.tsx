import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
    content: 'ShutterGraphy has transformed how we source images for our campaigns. The quality is exceptional and the licensing is crystal clear.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Photographer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
    content: 'As a photographer, I love how easy it is to upload and sell my work. The platform takes care of everything, and I can focus on creating.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
    content: 'The variety and quality of photos available is incredible. I always find exactly what I need for my projects.',
  },
];

export function Testimonials() {
  const { state } = useApp();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-20 ${
      state.theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${
            state.theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            What Our Community Says
          </h2>
          <p className={`text-lg ${
            state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join thousands of photographers and buyers who trust ShutterGraphy
          </p>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ${
                index === currentTestimonial
                  ? 'opacity-100 transform translate-x-0'
                  : 'opacity-0 transform translate-x-4 absolute inset-0'
              }`}
            >
              <div className={`text-center p-8 rounded-2xl ${
                state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}>
                <Quote className="h-8 w-8 text-emerald-600 mx-auto mb-6" />
                
                <blockquote className={`text-xl mb-6 ${
                  state.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <p className={`font-semibold ${
                      state.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-sm ${
                      state.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial
                  ? 'bg-emerald-600'
                  : state.theme === 'dark'
                  ? 'bg-gray-600'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}