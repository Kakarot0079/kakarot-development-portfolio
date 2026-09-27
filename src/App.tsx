/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { WhyUs } from './components/WhyUs';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceId, PricingPlan, ProjectInquiryData } from './types';
import { X } from 'lucide-react';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectInquiryData['projectType']>('Website');
  const [selectedBudget, setSelectedBudget] = useState<ProjectInquiryData['budget']>('$100–$250');
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; content: string } | null>(null);

  // Smooth scroll handler with offset for sticky navigation
  const scrollToSection = (id: string) => {
    if (id === 'privacy') {
      setLegalModalContent({
        title: 'Privacy Policy',
        content: 'Kakarot Development values your privacy. Inquiries submitted through our forms are strictly used to evaluate and correspond regarding your custom development requirements. We do not sell or distribute contact information to third parties.',
      });
      return;
    }

    if (id === 'terms') {
      setLegalModalContent({
        title: 'Terms of Service',
        content: 'All development engagements, milestone schedules, intellectual property rights, and maintenance terms are governed by project-specific written agreements executed prior to commencement.',
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Handler when a service card CTA is clicked
  const handleServiceSelect = (serviceId: ServiceId) => {
    switch (serviceId) {
      case 'website':
        setSelectedProjectType('Website');
        setSelectedBudget('$100–$250');
        break;
      case 'discord':
        setSelectedProjectType('Discord Bot');
        setSelectedBudget('Under $100');
        break;
      case 'automation':
        setSelectedProjectType('Automation');
        setSelectedBudget('$100–$250');
        break;
      case 'maintenance':
        setSelectedProjectType('Maintenance');
        setSelectedBudget('Under $100');
        break;
    }
    scrollToSection('contact');
  };

  // Handler when a pricing package is selected
  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedProjectType(plan.defaultProjectType);
    setSelectedBudget(plan.defaultBudget);
    scrollToSection('contact');
  };

  // Handler when portfolio case study requests similar
  const handlePortfolioInquiry = (projectType: string) => {
    if (projectType === 'Discord Bot' || projectType === 'Website' || projectType === 'Automation') {
      setSelectedProjectType(projectType as ProjectInquiryData['projectType']);
    } else {
      setSelectedProjectType('Website');
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 relative overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      {/* Sticky Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onStartProject={() => scrollToSection('contact')}
          onViewWork={() => scrollToSection('portfolio')}
        />

        {/* Trust & Stats Section */}
        <TrustStats />

        {/* Services Section */}
        <Services onSelectService={handleServiceSelect} />

        {/* Process Section ("How We Work") */}
        <Process />

        {/* Portfolio Section */}
        <Portfolio onSelectProjectInquiry={handlePortfolioInquiry} />

        {/* Why Kakarot Development */}
        <WhyUs />

        {/* Pricing Section */}
        <Pricing onSelectPlan={handlePlanSelect} />

        {/* About Section */}
        <About />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact
          initialProjectType={selectedProjectType}
          initialBudget={selectedBudget}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Legal / Policy Modal */}
      {legalModalContent && (
        <div
          id="legal-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLegalModalContent(null)}
        >
          <div
            id="legal-modal-card"
            className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#0e1628] border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white mb-3">
              {legalModalContent.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {legalModalContent.content}
            </p>
            <button
              onClick={() => setLegalModalContent(null)}
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
