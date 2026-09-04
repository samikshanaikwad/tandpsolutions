import React from 'react';
import {
  Eye,
  Target,
  Users,
  CheckCircle,
  FileCheck,
  Zap,
  Layers,
  Wrench,
  Cpu,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const engineeringPillars = [
    {
      title: 'Schematic Design & CAD Drafting',
      desc: 'Accurate electrical GA, SLD, and wiring schematics drafted using industry standard E-CAD software.',
      icon: Layers,
    },
    {
      title: 'PLC Logic & HMI Development',
      desc: 'Multi-platform programming (Delta, Siemens, Mitsubishi, Schneider) with structured code and fail-safe interlocks.',
      icon: Cpu,
    },
    {
      title: 'Rigorous Panel Fabrication',
      desc: 'Computerized wire ferruling, high-conductivity busbar routing, and IP55/IP65 enclosure engineering.',
      icon: Wrench,
    },
    {
      title: '100% FAT & Site Commissioning',
      desc: 'End-to-end Factory Acceptance Testing, insulation Megger checks, and seamless on-site handover.',
      icon: FileCheck,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-[#E2E8F0] text-[#0B2F64] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#61C014]" />
            About T & P Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F64] tracking-tight">
            Engineering Precision. Dependable Automation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {COMPANY_INFO.overview}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Vision Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2E8F0] shadow-xs hover:shadow-sm transition-all relative overflow-hidden accent-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-50 border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#61C014]">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#61C014]">Our Forward Ambition</span>
                <h3 className="text-xl font-bold text-[#0B2F64] mt-1 mb-3">Company Vision</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {COMPANY_INFO.vision}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle className="w-4 h-4 text-[#61C014]" />
                  <span>Sustainable, scalable automation partnerships across India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2E8F0] shadow-xs hover:shadow-sm transition-all relative overflow-hidden accent-border-navy">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-50 border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#0B2F64]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B2F64]">Daily Commitment</span>
                <h3 className="text-xl font-bold text-[#0B2F64] mt-1 mb-3">Company Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {COMPANY_INFO.mission}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle className="w-4 h-4 text-[#0B2F64]" />
                  <span>Zero defect tolerance, premium switchgear, and robust programming</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Facility & Workflow Breakdown */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Images */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-md overflow-hidden border border-[#E2E8F0] shadow-xs group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="T & P Solution Automation Engineers at Work"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded text-xs font-bold text-[#0B2F64] shadow-xs border border-[#E2E8F0]">
                  Bangalore Facility Assembly Floor
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-md bg-slate-50 border border-[#E2E8F0] text-center">
                  <p className="text-xs text-slate-500 font-semibold">Location</p>
                  <p className="text-sm font-bold text-[#0B2F64] mt-0.5">Bommasandra, BLR</p>
                </div>
                <div className="p-3 rounded-md bg-slate-50 border border-[#E2E8F0] text-center">
                  <p className="text-xs text-slate-500 font-semibold">Support</p>
                  <p className="text-sm font-bold text-[#61C014] mt-0.5">24/7 Field Service</p>
                </div>
              </div>
            </div>

            {/* Right: Engineering Pillars */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#E87722] uppercase tracking-wider">How We Deliver</span>
                <h3 className="text-2xl font-bold text-[#0B2F64] mt-1">
                  Complete Engineering Lifecycle Under One Roof
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  From initial specification analysis to final on-site trial runs, our engineers ensure every wire, program loop, and safety interlock operates with deterministic reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {engineeringPillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-md bg-slate-50 border border-[#E2E8F0] hover:border-slate-300 hover:bg-white transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-8 h-8 rounded-md bg-[#0B2F64] flex items-center justify-center text-white shrink-0">
                          <Icon className="w-4 h-4 text-[#61C014]" />
                        </div>
                        <h4 className="text-sm font-bold text-[#0B2F64]">{p.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal pl-10">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
