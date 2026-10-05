import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Mountain, Droplet } from 'lucide-react';
import heroImage from '../assets/images/aquanorth_hero_skardu_1791201739118.jpg';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-white">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E0F2FE]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Origin Location Subtitle / Trust Indicator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0284C7] mb-4">
              <Mountain className="w-3.5 h-3.5" />
              <span>Sourced from Skardu, Gilgit-Baltistan</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>2,228m Altitude</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A2540] leading-[1.12] mb-6 text-balance">
              Pure Water. <br className="hidden sm:inline" />
              From the Heart <br className="hidden sm:inline" />
              of the Mountains.
            </h1>

            {/* Supporting text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              Experience the purity of naturally sourced water inspired by the pristine mountains of Skardu. Filtered through ancient Karakoram granite strata for an unmatched crisp finish.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#0A2540] hover:bg-[#103355] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0A2540]"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-[#0A2540] bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0A2540]"
              >
                <span>Explore Products</span>
              </a>
            </div>

            {/* Key Quality Pillars (No pill badges, clean typography) */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                  <Droplet className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span>Mineral pH</span>
                </div>
                <p className="text-xl font-bold text-[#0A2540] tabular-nums">7.6</p>
                <p className="text-xs text-slate-500">Naturally Alkaline</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span>TDS Purity</span>
                </div>
                <p className="text-xl font-bold text-[#0A2540] tabular-nums">118 <span className="text-xs font-normal text-slate-500">mg/L</span></p>
                <p className="text-xs text-slate-500">Silky & Featherlight</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span>Bottled At</span>
                </div>
                <p className="text-xl font-bold text-[#0A2540]">Source</p>
                <p className="text-xs text-slate-500">Skardu Alpine Plant</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image with Mountain & Water */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 group">
                <img
                  src={heroImage}
                  alt="AquaNorth premium bottled water set against the dramatic snow peaks and crystal glacial waters of Skardu"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11] transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle scrim gradient for elegant lighting depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider">Karakoram Glacial Aquifer</p>
                    <p className="text-sm font-semibold text-[#0A2540]">Skardu Valley, Northern Pakistan</p>
                  </div>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Zero Impurities
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Accent behind card */}
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#0EA5E9]/10 rounded-2xl -z-10 blur-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
