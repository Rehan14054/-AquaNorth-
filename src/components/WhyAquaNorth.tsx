import React, { useState } from 'react';
import { Droplet, Mountain, ShieldCheck, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { MINERAL_PROFILE } from '../data/products';
import { FadeIn } from './FadeIn';

export const WhyAquaNorth: React.FC = () => {
  const [showMineralDetails, setShowMineralDetails] = useState(false);

  const features = [
    {
      title: 'Natural Purity',
      subtitle: 'Untouched Subterranean Springs',
      description:
        'Sourced from ancient Karakoram aquifers deeply shielded from agricultural runoff, microplastics, and modern pollutants. Naturally filtered by hundreds of meters of quartz strata.',
      icon: Droplet,
      metric: '0.00%',
      metricLabel: 'Synthetic Additives or Contaminants',
    },
    {
      title: 'Fresh Mountain Source',
      subtitle: 'High-Altitude Skardu Glaciers',
      description:
        'Born at an elevation above 2,200 meters in Gilgit-Baltistan. The cold alpine temperature preserves delicate ionic water clusters, ensuring crisp, effortless cellular absorption.',
      icon: Mountain,
      metric: '2,228m',
      metricLabel: 'Glacial Catchment Altitude',
    },
    {
      title: 'Quality You Can Trust',
      subtitle: 'Rigorous Multi-Barrier Standards',
      description:
        'Every single production batch undergoes automated inline laser spectrometry, sub-micron microfiltration, and independent microbiological assaying before leaving our Skardu facility.',
      icon: ShieldCheck,
      metric: '100%',
      metricLabel: 'Batch Inspected & Certified',
    },
    {
      title: 'Refreshing Every Day',
      subtitle: 'Silky Texture & Ideal Mineral Balance',
      description:
        'A perfectly calibrated balance of calcium, magnesium, and bio-available silica gives AquaNorth an extraordinary velvety mouthfeel that leaves your palate completely clean.',
      icon: Sparkles,
      metric: 'pH 7.6',
      metricLabel: 'Naturally Alkaline Equilibrium',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0284C7] mb-3">
            The Alpine Difference
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540] mb-5 text-balance">
            Why Discerning Palates Choose AquaNorth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Not all bottled water is created equal. Sourced directly from Pakistan's most pristine northern peaks, our water delivers the timeless nourishment of living mountain geology.
          </p>
        </div>

        {/* 4 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={idx * 120} className="h-full">
                <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                  <div>
                    {/* Icon & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300 font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Header */}
                    <h3 className="font-display text-xl font-bold text-[#0A2540] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs font-medium text-[#0284C7] mb-3">
                      {feature.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Quantitative Metric */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <div className="text-xl font-bold text-[#0A2540] tabular-nums">
                      {feature.metric}
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      {feature.metricLabel}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Interactive Mineral Composition Panel */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#0A2540] flex items-center gap-2">
                <span>Verified Glacial Mineral Profile</span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
                  Lab Certified
                </span>
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Naturally dissolved electrolytes per liter measured at Skardu source laboratory.
              </p>
            </div>

            <button
              onClick={() => setShowMineralDetails(!showMineralDetails)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0A2540] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors self-start sm:self-auto"
            >
              <span>{showMineralDetails ? 'Hide Analysis' : 'View Full Mineral Analysis'}</span>
              {showMineralDetails ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {showMineralDetails && (
            <div className="mt-8 pt-6 border-t border-slate-200 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <th className="pb-3 pr-4">Mineral Component</th>
                    <th className="pb-3 px-4">Chemical Symbol</th>
                    <th className="pb-3 px-4">Concentration</th>
                    <th className="pb-3 pl-4">Hydration & Physiological Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MINERAL_PROFILE.map((item) => (
                    <tr key={item.mineral} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 pr-4 font-semibold text-[#0A2540]">
                        {item.mineral}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-500">
                        {item.chemical}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#0284C7] tabular-nums">
                        {item.amount}
                      </td>
                      <td className="py-3.5 pl-4 text-slate-600 text-xs sm:text-sm">
                        {item.benefit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2">
                <span>Testing Methodology: Inductively Coupled Plasma Mass Spectrometry (ICP-MS)</span>
                <span>Compliant with WHO Guidelines for Drinking-Water Quality & PSQCA Standard 4639</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
