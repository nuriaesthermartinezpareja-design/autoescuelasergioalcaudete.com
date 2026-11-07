/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { PermisosSection } from './components/PermisosSection';
import { SergioBot } from './components/SergioBot';
import { PilaresSection } from './components/PilaresSection';
import { WhatsAppBookingSection } from './components/WhatsAppBookingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PermitDetailModal } from './components/PermitDetailModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PermitInfo } from './types';

export default function App() {
  const [selectedPermitForModal, setSelectedPermitForModal] =
    useState<PermitInfo | null>(null);
  const [selectedPermitForBooking, setSelectedPermitForBooking] =
    useState<string>('b');
  const [isLegalModalOpen, setIsLegalModalOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookPermit = (permitId: string) => {
    setSelectedPermitForBooking(permitId);
    scrollToSection('como-reservar');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-lime-400 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => scrollToSection('como-reservar')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToBot={() => scrollToSection('sergiobot')}
          onScrollToBooking={() => scrollToSection('como-reservar')}
        />

        {/* Stats Strip */}
        <StatsBar />

        {/* Categories of Permits */}
        <PermisosSection
          onSelectPermit={(permit) => setSelectedPermitForModal(permit)}
          onBookPermit={handleBookPermit}
        />

        {/* SergioBot Intelligent Advisor */}
        <SergioBot onSelectPermitForBooking={handleBookPermit} />

        {/* Our Pillars */}
        <PilaresSection />

        {/* How to Book via WhatsApp (Replaces old reservation form) */}
        <WhatsAppBookingSection preselectedPermitId={selectedPermitForBooking} />

        {/* Reviews from Google Maps */}
        <ReviewsSection />

        {/* CTA Banner */}
        <CtaBanner
          onScrollToBot={() => scrollToSection('sergiobot')}
          onScrollToBooking={() => scrollToSection('como-reservar')}
        />

        {/* Location & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={() => setIsLegalModalOpen(true)} />

      {/* Modals & Overlays */}
      <PermitDetailModal
        permit={selectedPermitForModal}
        onClose={() => setSelectedPermitForModal(null)}
        onBook={handleBookPermit}
      />

      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
