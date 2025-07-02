
import React from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import FreeClassSection from '@/components/FreeClassSection';
import PhotoGallery from '@/components/PhotoGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <FreeClassSection />
      <PhotoGallery />
      <TestimonialsSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
