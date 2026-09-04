import React, { useState } from 'react';
import {
  Cpu,
  Code,
  Workflow,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Info,
  X,
  ShieldAlert,
} from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#61C014]" />;
      case 'Code':
        return <Code className="w-6 h-6 text-[#61C014]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#61C014]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#61C014]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#61C014]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0B2F64] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#61C014]" />
            Engineering Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F64] tracking-tight">
            Our Core Industrial Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Turnkey electrical fabrication, industrial software development, and precision automation engineered to elevate your factory throughput and operational safety.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                  {/* Service Number Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-[#0B2F64] text-xs font-black px-2.5 py-1 rounded shadow-xs">
                    0{index + 1}
                  </div>

                  {/* Icon & Title Overlay on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#0B2F64] flex items-center justify-center shrink-0 border border-white/10 shadow-md">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white drop-shadow-xs">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-200 font-medium line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.fullDesc}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Scope & Highlights:
                    </p>
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#61C014] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2E8F0]">
                    {service.specs.map((sp, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded bg-slate-50 border border-[#E2E8F0] text-slate-700 text-[11px] font-semibold"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-5 pt-3 flex items-center justify-between gap-3 border-t border-[#E2E8F0] bg-slate-50/50">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0B2F64] transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-[#0B2F64]" />
                  <span>Technical Specs</span>
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 bg-[#0B2F64] hover:bg-[#071f43] text-white text-xs font-bold px-3.5 py-2 rounded-md transition-colors shadow-xs"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#61C014]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-xl p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-[#0B2F64] flex items-center justify-center text-white shrink-0">
                {getIcon(activeModalService.iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B2F64]">
                  {activeModalService.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {activeModalService.shortDesc}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Full Technical Features & Deliverables:
              </h4>
              <ul className="space-y-2">
                {activeModalService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#61C014] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 p-3.5 rounded-md bg-slate-50 border border-[#E2E8F0]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Standards & Compliance:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.specs.map((sp, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0B2F64]"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 rounded-md text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(title);
                }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-bold bg-[#0B2F64] hover:bg-[#071f43] text-white shadow-xs transition-colors"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4 text-[#61C014]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
