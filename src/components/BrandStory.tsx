import React from 'react';
import { Compass, Sparkles, Wind, Shield } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0284C7] mb-3">
            The Origin & Heritage
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540] mb-6 text-balance">
            Born in the Mountains. Made for Life.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            High in the Karakoram range of Gilgit-Baltistan lies Skardu—a legendary valley ringed by towering peaks, ancient glaciers, and untouched alpine springs. Here, where nature commands absolute silence, AquaNorth is born.
          </p>
        </div>

        {/* Narrative Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Deep Story Elements */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
              <h3 className="font-display text-2xl font-bold text-[#0A2540]">
                A Journey Filtered by Time and Granite
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Before reaching your glass, every drop of AquaNorth embarks on a decadal geological journey. Pure snowmelt from altitudes exceeding 6,000 meters percolates through subterranean layers of Karakoram granite, quartz, and mineral-rich sediment.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This natural filtration shields the water from all modern atmospheric elements, infusing it with vital electrolytes—calcium, magnesium, and natural silica—delivering an impeccably balanced, silky-smooth taste with an optimal pH of 7.6.
              </p>
            </div>

            {/* 3 Story Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200/70 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-3">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-sm font-semibold text-[#0A2540] mb-1">Untouched Geography</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Shielded from industrial pollutants by hundreds of kilometers of wild mountain terrain.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/70 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-3">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-sm font-semibold text-[#0A2540] mb-1">Living Minerals</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Naturally dissolved electrolytes that nourish cellular vitality without artificial reconstitution.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/70 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-3">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-sm font-semibold text-[#0A2540] mb-1">Bottled at Source</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Direct pipeline extraction in Skardu ensures water is bottled within minutes of emergence.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Geographical Anchor Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A2540] text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#0EA5E9]/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                  <Wind className="w-4 h-4" />
                  <span>The Karakoram Alpine Sanctuary</span>
                </div>

                <blockquote className="font-display text-xl sm:text-2xl font-light italic leading-snug text-slate-100">
                  "Water in its absolute form is not merely a drink—it is the memory of snow, rock, and mountain light."
                </blockquote>

                <div className="pt-6 border-t border-slate-700/80 space-y-3.5 text-sm">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Spring Source</span>
                    <span className="font-semibold text-slate-200">Karakoram Glacial Aquifer</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Location</span>
                    <span className="font-semibold text-slate-200">Skardu, Gilgit-Baltistan</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Source Altitude</span>
                    <span className="font-semibold text-slate-200 tabular-nums">2,228 Meters / 7,310 Ft</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Natural Flow Temp</span>
                    <span className="font-semibold text-slate-200 tabular-nums">6.2°C Constant</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Microbial Status</span>
                    <span className="font-semibold text-emerald-400">100% Pathogen-Free At Source</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#quality"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] hover:text-white transition-colors"
                  >
                    <span>Read our 5-stage purity standard</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
