import React from 'react';
import {
  Award,
  ShieldCheck,
  Sliders,
  Clock,
  Headphones,
  Check,
  X,
  FileSpreadsheet,
  CheckCircle2,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#61C014]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#61C014]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#61C014]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#61C014]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#61C014]" />;
      default:
        return <Award className="w-6 h-6 text-[#61C014]" />;
    }
  };

  const comparisonData = [
    {
      feature: 'Wire Numbering & Dressing',
      tandp: 'Computerized laser-printed cross-referenced ferrules & enclosed wiring ducts',
      conventional: 'Manual handwritten sleeves, loose ties prone to fading',
    },
    {
      feature: 'Switchgear & Busbar Grade',
      tandp: '100% Genuine OEM switchgear + Electrolytic E91 Grade copper busbars',
      conventional: 'Mixed vendor components, questionable busbar current density',
    },
    {
      feature: 'Factory Acceptance Testing (FAT)',
      tandp: '100% full-load sequence simulation, insulation Megger & HV flash test report',
      conventional: 'Basic continuity check only without rigorous load simulation',
    },
    {
      feature: 'Documentation & Schematics',
      tandp: 'Complete E-CAD drawings, terminal assignment charts & PLC backup code handed over',
      conventional: 'Basic hand sketch or missing code documentation',
    },
    {
      feature: 'After-Sales Breakdown Support',
      tandp: '24/7 dedicated engineering response with 2-4 hr Bengaluru on-site dispatch',
      conventional: 'Uncertain response times, 3rd party technician dependencies',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0B2F64] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#61C014]" />
            Why Choose T & P Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F64] tracking-tight">
            Built for Heavy Duty Reliability & Zero Stoppages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Industrial manufacturers trust T & P Solution for uncompromising panel wiring craftsmanship, reliable SPM machine logic, and fast local engineering support.
          </p>
        </div>

        {/* 5 Core Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-[#E2E8F0] p-6 hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-[#0B2F64] flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-extrabold text-[#0B2F64] bg-slate-50 px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B2F64] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#E87722] mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Quick Contact Prompt Card in the 6th slot */}
          <div className="bg-[#0B2F64] rounded-lg text-white p-6 flex flex-col justify-between shadow-xs border border-[#0B2F64]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#61C014]">
                Local Bengaluru Partner
              </span>
              <h3 className="text-xl font-bold mt-2 mb-2 text-white">
                Need a Custom Panel or SPM Feasibility Review?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with Tarun or Pavan to discuss your panel schematic, machine cycle time, and delivery timeline.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md text-xs font-semibold bg-[#61C014] hover:bg-[#4EAF0A] text-slate-950 transition-colors"
              >
                Reach Our Engineers
              </a>
              <a
                href="tel:+918762933980"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                +91 8762933980
              </a>
            </div>
          </div>
        </div>

        {/* Industrial Standards Comparison Table */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#0B2F64]">
                Manufacturing Standards Benchmark
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                How T & P Solution manufacturing quality compares against conventional market fabrications
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border border-[#E2E8F0] text-xs font-bold text-[#0B2F64]">
              <FileSpreadsheet className="w-4 h-4 text-[#61C014]" />
              <span>IS & IEC Compliant</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Quality Criterion</th>
                  <th className="py-3 px-4 text-[#0B2F64] bg-[#0B2F64]/5 rounded-t-md">
                    T & P Solution Standards
                  </th>
                  <th className="py-3 px-4 text-slate-500">
                    Conventional Market Panels
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-700">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#0B2F64] bg-[#0B2F64]/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#61C014] shrink-0" />
                      <span>{row.tandp}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{row.conventional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
