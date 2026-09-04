import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsAndSPMSection } from './components/ProductsAndSPMSection';
import { TechAndBrandsSection } from './components/TechAndBrandsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { StandaloneHtmlModal } from './components/StandaloneHtmlModal';
import { PanelProduct, SPMMachine } from './types';
import { MessageSquare, FileText, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [standaloneModalOpen, setStandaloneModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);

  // Detail Modal state
  const [detailModalItem, setDetailModalItem] = useState<PanelProduct | SPMMachine | null>(null);
  const [detailModalType, setDetailModalType] = useState<'panel' | 'spm'>('panel');

  const handleOpenQuote = (initialItemName?: string) => {
    setSelectedProductForQuote(initialItemName);
    setQuoteModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductFromCard = (productName: string, category: 'panel' | 'spm') => {
    handleOpenQuote(productName);
  };

  const handleOpenDetailModal = (item: PanelProduct | SPMMachine, type: 'panel' | 'spm') => {
    setDetailModalItem(item);
    setDetailModalType(type);
  };

  const handleExploreScroll = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-[#61C014] selection:text-white">
      {/* Header */}
      <Header
        onRequestQuote={() => handleOpenQuote()}
        onOpenStandaloneHtml={() => setStandaloneModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onExplore={handleExploreScroll}
          onContact={handleContactScroll}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Core Services Section */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* 4. Products & SPM Machine Manufacturing Section */}
        <ProductsAndSPMSection
          onSelectProduct={handleSelectProductFromCard}
          onOpenDetailModal={handleOpenDetailModal}
        />

        {/* 5. Technologies & Brands Expertise Section */}
        <TechAndBrandsSection />

        {/* 6. Industries We Serve Section */}
        <IndustriesSection
          onSelectIndustry={(ind) => handleSelectServiceFromCard(`Industrial Automation for ${ind}`)}
        />

        {/* 7. Why Choose T & P Solution Section */}
        <WhyUsSection />

        {/* 8. Contact & Location Section */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* Footer */}
      <Footer onRequestQuote={() => handleOpenQuote()} />

      {/* Floating Action Buttons (Sticky Quick WhatsApp & Quote) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phones[0].raw}`}
          className="hidden sm:flex items-center gap-2 bg-[#0B2F64] hover:bg-[#071f43] text-white px-3.5 py-2 rounded-full shadow-lg text-xs font-bold transition-all transform hover:scale-105 border border-white/20"
          title="Call Tarun (Engineering Lead)"
        >
          <Phone className="w-3.5 h-3.5 text-[#E87722]" />
          <span>Call: +91 8762933980</span>
        </a>

        {/* WhatsApp Floating Chat */}
        <a
          href="https://wa.me/918762933980?text=Hello%20T%20%26%20P%20Solution%20Team%2C%20I%20would%20like%20to%20inquire%20about%20Control%20Panels%20and%20SPM%20Machinery."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white px-4 py-3 rounded-full shadow-xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Direct</span>
        </a>
      </div>

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />

      <ProductDetailModal
        item={detailModalItem}
        type={detailModalType}
        onClose={() => setDetailModalItem(null)}
        onRequestQuote={(name) => handleOpenQuote(name)}
      />

      <StandaloneHtmlModal
        isOpen={standaloneModalOpen}
        onClose={() => setStandaloneModalOpen(false)}
      />
    </div>
  );
}
