import React from 'react';
import {
  Cpu,
  Monitor,
  Radio,
  Activity,
  Network,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { SUPPORTED_TECHNOLOGIES, BRAND_PARTNERS } from '../data/companyData';

export const TechAndBrandsSection: React.FC = () => {
  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#61C014]" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-[#61C014]" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-[#61C014]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#61C014]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#61C014]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#61C014]" />;
    }
  };

  return (
    <section id="technologies" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0B2F64] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#61C014]" />
            Engineering Stack & Partners
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F64] tracking-tight">
            Technologies & Supported Automation Brands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We architect and program mission-critical industrial solutions using industry-standard platforms trusted by global manufacturing leaders.
          </p>
        </div>

        {/* 1. Supported Technologies Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E2E8F0]">
            <div>
              <h3 className="text-xl font-bold text-[#0B2F64]">Supported Technologies</h3>
              <p className="text-xs text-slate-500 font-medium">Core hardware and network capabilities deployed in our panels & SPM machinery</p>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 bg-white border border-[#E2E8F0] text-slate-700 rounded-md shadow-xs">
              5 Core Technology Domains
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPORTED_TECHNOLOGIES.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md bg-[#0B2F64] flex items-center justify-center shrink-0">
                    {getTechIcon(tech.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#61C014]">
                      {tech.category}
                    </span>
                    <h4 className="text-base font-bold text-[#0B2F64]">{tech.name}</h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {tech.description}
                </p>

                <div className="pt-3 border-t border-[#E2E8F0]">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Architectures / Protocols:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.protocolsOrTypes.map((item, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-[#E2E8F0] text-[11px] font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Supported Brands (Brand Partner Showcase Cards) */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E2E8F0]">
            <div>
              <h3 className="text-xl font-bold text-[#0B2F64]">Supported Automation Brands</h3>
              <p className="text-xs text-slate-500 font-medium">Certified integration, sourcing, and programming across top industrial OEMs</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#61C014]">
              <ShieldCheck className="w-4 h-4" />
              <span>Genuine Components Only</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_PARTNERS.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#E2E8F0] p-5 shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Brand Visual Pill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-md bg-slate-50 border border-[#E2E8F0] flex items-center justify-center font-black text-sm tracking-wider text-slate-800 group-hover:scale-105 transition-transform">
                      {brand.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-50 border border-[#E2E8F0] text-slate-600">
                      Standard
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#0B2F64] mb-1 group-hover:text-[#61C014] transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#E87722] mb-3">
                    {brand.tier}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0]">
                  <p className="text-[11px] font-semibold text-slate-500 line-clamp-2">
                    <span className="font-bold text-slate-700">Specialization: </span>
                    {brand.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
