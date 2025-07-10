import React from 'react';
import { HeroSection } from './HeroSection';
import { Categories } from './Categories';
import { FeaturedPhotos } from './FeaturedPhotos';
import { Testimonials } from './Testimonials';
import { CallToAction } from './CallToAction';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Categories />
      <FeaturedPhotos />
      <Testimonials />
      <CallToAction />
    </div>
  );
}