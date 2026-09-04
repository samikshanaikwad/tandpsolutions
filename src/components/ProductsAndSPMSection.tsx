import React, { useState } from 'react';
import {
  Layers,
  Cog,
  Check,
  ArrowRight,
  Shield,
  Zap,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
} from 'lucide-react';
import { PANEL_PRODUCTS, SPM_MACHINES } from '../data/companyData';
import { PanelProduct, SPMMachine } from '../types';

interface ProductsAndSPMSectionProps {
  onSelectProduct: (productName: string, category: 'panel' | 'spm') => void;
  onOpenDetailModal: (item: PanelProduct | SPMMachine, type: 'panel' | 'spm') => void;
}

export const ProductsAndSPMSection: React.FC<ProductsAndSPMSectionProps> = ({
  onSelectProduct,
  onOpenDetailModal,
}) => {
  const [activeTab, setActiveTab] = useState<'panels' | 'spm'>('panels');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  return (
    <section id="products" className="py-20 bg-white border-t border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-[#E2E8F0] text-[#0B2F64] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#61C014]" />
            Manufactured Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F64] tracking-tight">
            Products & SPM Machine Manufacturing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered, assembled, and program-tested in our Bengaluru manufacturing facility for maximum durability, neat wiring, and seamless plant integration.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-slate-50 border border-[#E2E8F0] shadow-xs">
            <button
              onClick={() => {
                setActiveTab('panels');
                setSelectedTag('all');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                activeTab === 'panels'
                  ? 'bg-[#0B2F64] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B2F64] hover:bg-white'
              }`}
            >
              <Zap className={`w-4 h-4 ${activeTab === 'panels' ? 'text-[#61C014]' : 'text-slate-400'}`} />
              <span>Electrical Control Panels ({PANEL_PRODUCTS.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('spm');
                setSelectedTag('all');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                activeTab === 'spm'
                  ? 'bg-[#0B2F64] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B2F64] hover:bg-white'
              }`}
            >
              <Cog className={`w-4 h-4 ${activeTab === 'spm' ? 'text-[#E87722]' : 'text-slate-400'}`} />
              <span>SPM Machines ({SPM_MACHINES.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Electrical Control Panels */}
        {activeTab === 'panels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PANEL_PRODUCTS.map((panel) => (
              <div
                key={panel.id}
                className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={panel.imageUrl}
                      alt={panel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Acronym Badge */}
                    <div className="absolute top-3 left-3 bg-[#0B2F64] text-white text-xs font-black px-2.5 py-1 rounded shadow-xs border border-white/10">
                      {panel.acronym}
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#0B2F64] text-[11px] font-bold px-2 py-0.5 rounded shadow-xs border border-[#E2E8F0]">
                      {panel.enclosureRating.split(' ')[0]}
                    </div>

                    {/* Title on image bottom */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-bold drop-shadow-xs leading-snug">
                        {panel.name}
                      </h3>
                    </div>
                  </div>

                  {/* Panel Details */}
                  <div className="p-5">
                    <p className="text-xs text-slate-500 font-semibold mb-2 line-clamp-1">
                      {panel.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                      {panel.description}
                    </p>

                    {/* Specs Quick Pills */}
                    <div className="space-y-1.5 mb-4 p-2.5 rounded-md bg-slate-50 border border-[#E2E8F0] text-xs">
                      <div className="flex justify-between items-center text-slate-600">
                        <span className="font-semibold text-slate-500">Voltage:</span>
                        <span className="font-bold text-[#0B2F64]">{panel.voltageRating}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span className="font-semibold text-slate-500">Enclosure:</span>
                        <span className="font-medium text-slate-700">{panel.enclosureRating}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-4">
                      {panel.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#61C014] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-[#E2E8F0] pt-4">
                  <button
                    onClick={() => onOpenDetailModal(panel, 'panel')}
                    className="text-xs font-semibold text-[#0B2F64] hover:text-[#61C014] flex items-center gap-1 transition-colors"
                  >
                    <span>Full Specs</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onSelectProduct(panel.name, 'panel')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B2F64] hover:bg-[#071f43] text-white text-xs font-semibold transition-all shadow-xs"
                  >
                    <span>Quote Panel</span>
                    <ArrowRight className="w-3 h-3 text-[#61C014]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SPM Machines */}
        {activeTab === 'spm' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPM_MACHINES.map((spm) => (
              <div
                key={spm.id}
                className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={spm.imageUrl}
                      alt={spm.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-[#E87722] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-xs">
                      {spm.category}
                    </div>

                    {/* Title on image bottom */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-bold drop-shadow-xs leading-snug">
                        {spm.name}
                      </h3>
                    </div>
                  </div>

                  {/* SPM Details */}
                  <div className="p-5">
                    <p className="text-xs text-slate-500 font-semibold mb-2 line-clamp-1">
                      {spm.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                      {spm.description}
                    </p>

                    {/* Technical Specs box */}
                    <div className="space-y-1.5 mb-4 p-2.5 rounded-md bg-slate-50 border border-[#E2E8F0] text-xs">
                      <div className="flex justify-between items-center text-slate-600">
                        <span className="font-semibold text-slate-500">Takt / Cycle:</span>
                        <span className="font-bold text-[#0B2F64]">{spm.cycleTime}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span className="font-semibold text-slate-500">Controller:</span>
                        <span className="font-medium text-slate-700 line-clamp-1">{spm.controlArchitecture}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-4">
                      {spm.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#61C014] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-[#E2E8F0] pt-4">
                  <button
                    onClick={() => onOpenDetailModal(spm, 'spm')}
                    className="text-xs font-semibold text-[#0B2F64] hover:text-[#E87722] flex items-center gap-1 transition-colors"
                  >
                    <span>Machine Specs</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onSelectProduct(spm.name, 'spm')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B2F64] hover:bg-[#071f43] text-white text-xs font-semibold transition-all shadow-xs"
                  >
                    <span>Custom SPM Quote</span>
                    <ArrowRight className="w-3 h-3 text-[#E87722]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
