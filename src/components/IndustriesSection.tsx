import React from 'react';
import {
  Factory,
  Zap,
  Utensils,
  Car,
  Truck,
  Package,
  CheckCircle,
  ArrowUpRight,
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/companyData';

interface IndustriesSectionProps {
  onSelectIndustry: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory':
        return <Factory className="w-5 h-5 text-white" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-white" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-white" />;
      case 'Car':
        return <Car className="w-5 h-5 text-white" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-white" />;
      case 'Package':
        return <Package className="w-5 h-5 text-white" />;
      default:
        return <Factory className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-white border-t border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-[#E2E8F0] text-[#0B2F64] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#61C014]" />
            Industrial Applications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F64] tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering custom automation, heavy-duty electrical switchboards, and bespoke SPM machinery across critical industrial manufacturing domains.
          </p>
        </div>

        {/* 6 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={ind.imageUrl}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-md bg-[#0B2F64] flex items-center justify-center border border-white/10 shadow-xs">
                    {getIndustryIcon(ind.icon)}
                  </div>

                  {/* Industry Title */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold drop-shadow-xs">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-200 font-medium line-clamp-1">
                      {ind.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="space-y-1.5 mb-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Target Solutions:
                    </p>
                    {ind.solutionsProvided.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#61C014] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0 border-t border-[#E2E8F0] pt-4">
                <button
                  onClick={() => onSelectIndustry(ind.name)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-semibold text-[#0B2F64] bg-slate-50 hover:bg-[#0B2F64] hover:text-white border border-[#E2E8F0] transition-colors"
                >
                  <span>Inquire for {ind.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
