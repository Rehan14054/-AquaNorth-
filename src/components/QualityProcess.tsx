import React, { useState } from 'react';
import { Filter, Sun, ShieldCheck, Sparkles, CheckCircle2, Award, Zap } from 'lucide-react';

export const QualityProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Glacial Granite Pre-Filtration',
      phase: 'Natural Catchment',
      icon: Filter,
      description:
        'Water emerges from deep mountain aquifers naturally clarified through centuries of compressed Karakoram quartz and granite layers, leaving larger particulates behind before entering our facility.',
      keyMetric: '< 0.05 NTU Turbidity',
    },
    {
      number: '02',
      title: '0.2-Micron Sub-Micron Membranes',
      phase: 'Physical Barrier',
      icon: Zap,
      description:
        'State-of-the-art ceramic and hollow-fiber microfiltration membranes remove microscopic impurities while preserving 100% of beneficial ionized electrolytes (Calcium, Magnesium, Silica).',
      keyMetric: '99.999% Particulate Removal',
    },
    {
      number: '03',
      title: 'Ozone & Ultraviolet Sterilization',
      phase: 'Bio-Safety',
      icon: Sun,
      description:
        'A chemical-free dual sanitization matrix uses precise UV light frequencies and active oxygen (ozone) that dissipates into pure dissolved oxygen, leaving zero chemical traces or aftertaste.',
      keyMetric: 'Zero Residual Chemicals',
    },
    {
      number: '04',
      title: 'Class-100 Cleanroom Bottling',
      phase: 'Contactless Hygiene',
      icon: ShieldCheck,
      description:
        'Automated German-engineered monobloc rotary machines rinse, fill, and cap each bottle in a HEPA-filtered positive-pressure cleanroom. The water is never exposed to human touch.',
      keyMetric: 'ISO Class 5 Cleanroom Air',
    },
    {
      number: '05',
      title: 'Laser Batch Verification & Hermetic Seal',
      phase: 'Tamper Protection',
      icon: Sparkles,
      description:
        'Each bottle receives an ultrasonic tamper-evident seal and inline spectroscopic laser verification. Every production batch is logged with a verifiable QR authenticity code.',
      keyMetric: '100% Batch Traceability',
    },
  ];

  return (
    <section id="quality" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0284C7] mb-3">
            Standards & Hygiene
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540] mb-5 text-balance">
            The 5-Stage Purity Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            We preserve nature’s perfection through ultra-modern hygiene protocols. No boiling, no harsh demineralization—just meticulous, non-invasive purification.
          </p>
        </div>

        {/* Step-by-Step Visual Interactive Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-md'
                      : 'bg-white text-slate-800 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-1 rounded-md ${
                        isActive ? 'bg-[#38BDF8] text-[#0A2540]' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <p className={`text-xs font-semibold ${isActive ? 'text-[#38BDF8]' : 'text-[#0284C7]'}`}>
                        {step.phase}
                      </p>
                      <h4 className="text-sm font-bold truncate max-w-[220px] sm:max-w-xs">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-white/10 text-white' : 'text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Stage Deep Dive */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-md">
                      Stage {steps[activeStep].number} of 05
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0A2540] mt-3">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                    {React.createElement(steps[activeStep].icon, { className: 'w-7 h-7 stroke-[2]' })}
                  </div>
                </div>

                <p className="text-base text-slate-600 leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>

                <div className="bg-[#F8FAFC] p-4.5 rounded-xl border border-slate-200/70 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">
                      Target Safety Benchmark
                    </span>
                    <span className="text-base font-bold text-[#0A2540]">
                      {steps[activeStep].keyMetric}
                    </span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2 pt-8 mt-8 border-t border-slate-100">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      activeStep === idx ? 'w-8 bg-[#0A2540]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Quality Certifications Strip */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
            <Award className="w-4 h-4 text-[#0284C7]" />
            <span>Accredited Certifications & Safety Audits</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div className="border-l-2 border-[#0284C7] pl-4">
              <h5 className="font-bold text-[#0A2540] text-sm">ISO 22000</h5>
              <p className="text-xs text-slate-500 mt-0.5">Food Safety Management System</p>
            </div>
            <div className="border-l-2 border-[#0284C7] pl-4">
              <h5 className="font-bold text-[#0A2540] text-sm">HACCP Certified</h5>
              <p className="text-xs text-slate-500 mt-0.5">Critical Control Point Verification</p>
            </div>
            <div className="border-l-2 border-[#0284C7] pl-4">
              <h5 className="font-bold text-[#0A2540] text-sm">PSQCA Approved</h5>
              <p className="text-xs text-slate-500 mt-0.5">Pakistan Standards Standard 4639</p>
            </div>
            <div className="border-l-2 border-[#0284C7] pl-4">
              <h5 className="font-bold text-[#0A2540] text-sm">Halal Certified</h5>
              <p className="text-xs text-slate-500 mt-0.5">100% Pure Natural Source Guarantee</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
