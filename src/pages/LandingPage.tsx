import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import TestimonialSection from '../components/landing/TestimonialSection';
import PricingSection from '../components/landing/PricingSection';
import SignUpSection from '../components/landing/SignUpSection';

export default function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollTo === 'pricing') {
      const el = document.getElementById('pricing');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      // Remove scrollTo from state to prevent repeated scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

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