import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  PhoneCall,
  Settings,
  Sparkles,
  Award,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onContact, onRequestQuote }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#F8FAFC] overflow-hidden">
      {/* Subtle industrial grid pattern overlay in light slate */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      {/* Subtle decorative radial glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#61C014]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-[#0B2F64]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-slate-700 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#61C014] animate-pulse" />
              <span className="text-[#0B2F64] font-bold">Bengaluru Manufacturing Hub</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">ISO Standard Process Compliance</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B2F64] tracking-tight leading-[1.12]">
              Powering the Future of{' '}
              <span className="relative whitespace-nowrap text-[#0B2F64]">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0B2F64] via-[#0B2F64] to-[#61C014]">
                  Industrial Automation
                </span>
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#61C014]/20 -z-0 rounded-sm" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Leading experts in Custom Control Panel Manufacturing, Special Purpose Machines (SPM), and End-to-End Industrial Automation.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#61C014] shrink-0" />
                <span>Custom PLC & HMI Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#61C014] shrink-0" />
                <span>MCC, PCC, APFC & VFD Drive Panels</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#61C014] shrink-0" />
                <span>Turnkey SPM Mechanical & Electrical Fabrication</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#61C014] shrink-0" />
                <span>100% Pre-Dispatch Full-Load Testing</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExplore}
                id="hero-explore-btn"
                className="inline-flex items-center justify-center gap-2 bg-[#0B2F64] hover:bg-[#071f43] text-white px-6 py-3 rounded-md text-sm font-semibold shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 text-[#61C014]" />
              </button>

              <button
                onClick={onContact}
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0B2F64] border border-[#CBD5E1] px-6 py-3 rounded-md text-sm font-semibold shadow-xs transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#E87722]" />
                <span>Contact Engineering Team</span>
              </button>

              <button
                onClick={onRequestQuote}
                id="hero-quote-btn"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-[#0B2F64] underline underline-offset-4 decoration-[#61C014] py-2 px-1"
              >
                <Sparkles className="w-4 h-4 text-[#61C014]" />
                <span>Quick Custom Quote</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#61C014]" />
                Delta • Schneider • Siemens • Mitsubishi
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Award className="w-4 h-4 text-[#E87722]" />
                Bommasandra Industrial Area, Bengaluru
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-lg bg-white border border-[#E2E8F0] shadow-xs overflow-hidden">
                {/* Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
                    alt="T & P Solution Control Panel Inspection and Testing"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  {/* Top Badge on image */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md border border-[#E2E8F0] shadow-xs flex items-center gap-2 text-xs font-bold text-[#0B2F64]">
                    <Settings className="w-3.5 h-3.5 text-[#61C014] animate-spin" style={{ animationDuration: '8s' }} />
                    <span>In-House Testing Facility</span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#61C014]">
                      Precision Wiring & Assembly
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white drop-shadow-xs">
                      PLC Automation & Motor Control Panels
                    </p>
                  </div>
                </div>

                {/* Floating Metric Card Overlay */}
                <div className="p-4 bg-slate-50 border-t border-[#E2E8F0] grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-md border border-[#E2E8F0] shadow-xs">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-medium">Panels Built</span>
                      <Cpu className="w-4 h-4 text-[#0B2F64]" />
                    </div>
                    <p className="text-2xl font-black text-[#0B2F64]">500+</p>
                    <p className="text-[11px] text-[#61C014] font-semibold">100% FAT Certified</p>
                  </div>

                  <div className="bg-white p-3 rounded-md border border-[#E2E8F0] shadow-xs">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-medium">SPM Machines</span>
                      <Settings className="w-4 h-4 text-[#E87722]" />
                    </div>
                    <p className="text-2xl font-black text-[#0B2F64]">85+</p>
                    <p className="text-[11px] text-[#E87722] font-semibold">Custom Built Units</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-4">
          {COMPANY_INFO.metrics.map((m, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-[#E2E8F0] shadow-xs text-center">
              <p className="text-2xl sm:text-3xl font-black text-[#0B2F64] tracking-tight">
                {m.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
