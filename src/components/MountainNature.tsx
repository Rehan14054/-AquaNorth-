import React from 'react';
import { Mountain, Trees, ShieldAlert, HeartHandshake } from 'lucide-react';
import landscapeImage from '../assets/images/skardu_mountain_landscape_1791201753704.jpg';

export const MountainNature: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Media Showcase Frame */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          
          {/* Main Visual Image */}
          <div className="relative aspect-[16/10] sm:aspect-[16/8] lg:aspect-[21/9] w-full bg-slate-900">
            <img
              src={landscapeImage}
              alt="Breathtaking panoramic view of the majestic Karakoram mountains and crystal river in Skardu, Gilgit-Baltistan"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Measured Scrim for WCAG AA readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/40 to-black/20" />
          </div>

          {/* Emotional Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-white">
            <div className="max-w-3xl">
              
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#38BDF8] mb-3">
                <Mountain className="w-4 h-4" />
                <span>Sanctuary of Gilgit-Baltistan</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight text-balance">
                Guardians of the Glacial Throne.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-light leading-relaxed mb-6 sm:mb-8 text-balance">
                The mountains of Skardu do not belong to us—we belong to them. For every bottle filled, AquaNorth contributes directly to alpine watershed reforestation, zero-waste clean-up expeditions along the Baltoro glacier trail, and supporting local communities across Baltistan.
              </p>

              {/* 3 Eco Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#38BDF8] shrink-0">
                    <Trees className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-100">
                    Karakoram Reforestation Initiative
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#38BDF8] shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-100">
                    100% Circular Recyclable Packaging
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#38BDF8] shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-100">
                    Community-Owned Mountain Catchments
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
