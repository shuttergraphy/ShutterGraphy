import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import TrendingSection from '../components/Home/TrendingSection';
import CategoriesSection from '../components/Home/CategoriesSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrendingSection />
      <CategoriesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;