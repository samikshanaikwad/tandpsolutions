import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  FileText,
  ChevronRight,
  ShieldCheck,
  Download,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onRequestQuote: () => void;
  onOpenStandaloneHtml?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote, onOpenStandaloneHtml }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'products', 'technologies', 'industries', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Products & SPM', href: '#products', id: 'products' },
    { label: 'Technologies', href: '#technologies', id: 'technologies' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Strip with Contact & Location */}
      <div className="bg-[#0B2F64] text-white text-xs border-b border-white/10 py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#61C014]" />
              {COMPANY_INFO.address.full}
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#61C014]" />
              ISO Standard Compliant • 100% Tested
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E87722]" />
              {COMPANY_INFO.phones[0].number} (Tarun)
            </a>
            <a
              href={`mailto:${COMPANY_INFO.emails[0].address}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#61C014]" />
              {COMPANY_INFO.emails[0].address}
            </a>
            {onOpenStandaloneHtml && (
              <button
                onClick={onOpenStandaloneHtml}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-all"
                title="View & download standalone single-file HTML code"
              >
                <Download className="w-3 h-3 text-[#61C014]" />
                Single-File HTML Code
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled
            ? 'shadow-md border-b border-slate-200 py-3'
            : 'border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Area */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            {/* Custom Industrial Vector Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0B2F64] flex items-center justify-center p-2 shadow-sm border border-[#0B2F64]/20 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                {/* Circuit tracks and gear accent */}
                <circle cx="24" cy="24" r="20" stroke="#61C014" strokeWidth="2.5" strokeDasharray="5 3" />
                <path d="M14 16H24M19 16V34" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M26 16H34C37 16 37 24 34 24H26V34" stroke="#61C014" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="34" cy="24" r="2.5" fill="#E87722" />
                <circle cx="14" cy="16" r="2" fill="#E87722" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0B2F64]">
                  T & P <span className="text-[#61C014]">SOLUTION</span>
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                SPM & Control Panel Manufacturing
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-[#0B2F64] bg-slate-50 font-bold border-b-2 border-[#61C014]'
                      : 'text-slate-600 hover:text-[#0B2F64] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onRequestQuote}
              id="header-quote-btn"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#0B2F64] hover:bg-[#071f43] text-white px-4 py-2 rounded-md text-sm font-semibold shadow-xs transition-all border border-[#0B2F64]/10 active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-[#61C014]" />
              <span>Request a Quote</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-50 border border-[#E2E8F0]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] shadow-lg max-h-[85vh] overflow-y-auto px-4 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-md text-sm font-semibold ${
                  activeSection === link.id
                    ? 'bg-slate-50 text-[#0B2F64] border-l-4 border-[#61C014]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-5 border-t border-[#E2E8F0] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#0B2F64] hover:bg-[#071f43] text-white py-2.5 rounded-md text-sm font-semibold shadow-xs"
            >
              <FileText className="w-4 h-4 text-[#61C014]" />
              <span>Request a Quote</span>
            </button>

            {onOpenStandaloneHtml && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStandaloneHtml();
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 rounded-md text-xs font-semibold border border-[#CBD5E1]"
              >
                <Download className="w-4 h-4 text-[#0B2F64]" />
                <span>Single-File HTML Code</span>
              </button>
            )}

            <div className="text-xs text-slate-500 pt-2 space-y-1.5">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E87722]" />
                {COMPANY_INFO.phones[0].number} / {COMPANY_INFO.phones[1].number}
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#61C014]" />
                {COMPANY_INFO.emails[0].address}
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0B2F64]" />
                {COMPANY_INFO.address.full}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
