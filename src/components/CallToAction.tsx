import React from 'react';
import { ArrowRight, Truck, Check, Sparkles } from 'lucide-react';

interface CallToActionProps {
  onOrderClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOrderClick }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#38BDF8] mb-4 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bottled Fresh in Skardu</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
            Bring Mountain Purity to Your Everyday Life.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
            Whether for your dining table, workout routine, or executive boardroom—elevate every sip with naturally alkaline water directly from the heart of Skardu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onOrderClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-semibold text-[#0A2540] bg-white hover:bg-slate-100 rounded-xl shadow-xl transition-all duration-200 active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white"
            >
              <span>Order AquaNorth</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors whitespace-nowrap"
            >
              <span>Schedule Recurring Delivery</span>
            </a>
          </div>

          {/* Delivery & Assurance badges */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#38BDF8]" />
              <span>Doorstep Delivery in Skardu, Islamabad & Major Hubs</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#38BDF8]" />
              <span>100% Hermetically Sealed Bottling</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#38BDF8]" />
              <span>Flexible Subscriptions & Corporate Rates</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
