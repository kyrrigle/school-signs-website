import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import TestimonialSection from '../components/landing/TestimonialSection';
import PricingSection from '../components/landing/PricingSection';
import SignUpSection from '../components/landing/SignUpSection';

export default function LandingPage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TestimonialSection />
      <PricingSection />
      <SignUpSection />
    </div>
  );
}