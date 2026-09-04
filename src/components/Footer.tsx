import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUp,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { COMPANY_INFO, PANEL_PRODUCTS, SPM_MACHINES } from '../data/companyData';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2F64] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Company Bio (Col 1 - 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center p-2 border border-white/15">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <circle cx="24" cy="24" r="20" stroke="#61C014" strokeWidth="2.5" strokeDasharray="5 3" />
                  <path d="M14 16H24M19 16V34" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M26 16H34C37 16 37 24 34 24H26V34" stroke="#61C014" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="34" cy="24" r="2.5" fill="#E87722" />
                </svg>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                T & P <span className="text-[#61C014]">SOLUTION</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Leading experts in Custom Control Panel Manufacturing, Special Purpose Machines (SPM), and End-to-End Industrial Automation in Bengaluru.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#61C014] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#61C014]" />
              <span>Certified Industrial Standards (IEC & IS Compliance)</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-[#61C014] hover:bg-[#4EAF0A] text-slate-950 transition-colors shadow-xs"
              >
                <span>Request Quotation</span>
              </button>
            </div>
          </div>

          {/* Quick Links (Col 2 - 2) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#61C014] mb-4">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Core Services</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Products & SPM</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">Technologies & Brands</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">Industries Served</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Engineering</a>
              </li>
            </ul>
          </div>

          {/* Manufactured Panels & SPM (Col 3 - 3) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#61C014] mb-4">
              Manufactured Systems
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {PANEL_PRODUCTS.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <a href="#products" className="hover:text-white transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
              {SPM_MACHINES.slice(0, 3).map((s) => (
                <li key={s.id}>
                  <a href="#products" className="hover:text-white transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 4 - 3) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#61C014] mb-4">
              Works & Factory
            </p>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address.full}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#61C014] shrink-0 mt-0.5" />
              <div>
                <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-white block">
                  {COMPANY_INFO.phones[0].number} (Tarun)
                </a>
                <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-white block">
                  {COMPANY_INFO.phones[1].number} (Pavan)
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-[#61C014] shrink-0 mt-0.5" />
              <div>
                <a href={`mailto:${COMPANY_INFO.emails[0].address}`} className="hover:text-white block">
                  {COMPANY_INFO.emails[0].address}
                </a>
                <a href={`mailto:${COMPANY_INFO.emails[1].address}`} className="hover:text-white block">
                  {COMPANY_INFO.emails[1].address}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Globe className="w-4 h-4 text-[#61C014] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.website}</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 T & P Solution. All Rights Reserved. SPM & Control Panel Manufacturing Company.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Bommasandra, Bengaluru - 560099</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
