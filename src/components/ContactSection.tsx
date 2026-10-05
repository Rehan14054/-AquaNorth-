import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Home Delivery',
    city: 'Skardu',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name, phone number, and email address.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0284C7] mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540] mb-5 text-balance">
            Connect with AquaNorth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Whether inquiring about direct residential doorstep deliveries, 5-star hotel provisioning, or regional dealership distribution across Pakistan—our Skardu team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200/80 space-y-6">
              <h3 className="font-display text-2xl font-bold text-[#0A2540]">
                Headquarters & Bottling Plant
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                AquaNorth operations and bottling facility are situated directly adjacent to the pristine glacial riverbanks of Skardu, Gilgit-Baltistan.
              </p>

              <div className="space-y-5 pt-2">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0284C7] shadow-xs flex items-center justify-center shrink-0 border border-slate-200/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-slate-400">Spring & Bottling Site</h4>
                    <p className="text-sm font-semibold text-[#0A2540] mt-0.5">
                      AquaNorth Alpine Facility, Airport Road, Skardu, Gilgit-Baltistan 16100, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0284C7] shadow-xs flex items-center justify-center shrink-0 border border-slate-200/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-slate-400">Direct Phone & WhatsApp</h4>
                    <p className="text-sm font-semibold text-[#0A2540] mt-0.5">
                      +92 (5815) 920-441
                    </p>
                    <p className="text-xs text-slate-500">
                      Mobile / WhatsApp: +92 300 859 2040
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0284C7] shadow-xs flex items-center justify-center shrink-0 border border-slate-200/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-slate-400">Email Inquiries</h4>
                    <p className="text-sm font-semibold text-[#0A2540] mt-0.5">
                      care@aquanorthwater.com
                    </p>
                    <p className="text-xs text-slate-500">
                      Wholesale: orders@aquanorthwater.com
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0284C7] shadow-xs flex items-center justify-center shrink-0 border border-slate-200/60">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-slate-400">Dispatch & Support Hours</h4>
                    <p className="text-sm font-semibold text-[#0A2540] mt-0.5">
                      Monday – Saturday: 8:00 AM – 7:00 PM PKT
                    </p>
                    <p className="text-xs text-slate-500">
                      Emergency hospital and hotel dispatch 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response commitment */}
            <div className="p-5 rounded-xl bg-[#E0F2FE]/50 border border-[#BAE6FD] flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-[#0284C7] shrink-0" />
              <p className="text-xs text-slate-700 leading-normal">
                <span className="font-semibold text-[#0A2540]">Rapid Dispatch:</span> Inquiries received during business hours receive confirmation within 60 minutes.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Order Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0A2540]">
                    Inquiry Received
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your request for <span className="font-semibold text-slate-900">{formData.inquiryType}</span> in {formData.city} has been assigned ticket <span className="font-mono font-bold text-[#0284C7]">#AQN-{Math.floor(10000 + Math.random() * 90000)}</span>.
                  </p>
                  <p className="text-xs text-slate-500">
                    Our hydration logistics coordinator will contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Home Delivery',
                        city: 'Skardu',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0A2540] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl font-bold text-[#0A2540] mb-2">
                    Send an Inquiry or Schedule Delivery
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill out the form below and our team will get in touch with product pricing and delivery schedule options.
                  </p>

                  {errorMsg && (
                    <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Hussain"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540]"
                      />
                    </div>

                    {/* City Selection */}
                    <div>
                      <label htmlFor="contact-city" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Delivery City / Region
                      </label>
                      <select
                        id="contact-city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540]"
                      >
                        <option value="Skardu">Skardu & Baltistan</option>
                        <option value="Gilgit">Gilgit & Hunza</option>
                        <option value="Islamabad">Islamabad & Rawalpindi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Other">Other Region in Pakistan</option>
                      </select>
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Type of Request
                    </label>
                    <select
                      id="contact-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540]"
                    >
                      <option value="Home Delivery">Residential Doorstep Subscription (18.9L / 1.5L)</option>
                      <option value="Corporate Office">Corporate Office Water Supply</option>
                      <option value="Hotel & Dining">Hospitality & Fine Dining Glassware (330ml / 1.5L)</option>
                      <option value="Distributor Partnership">Wholesale & Regional Distributorship</option>
                      <option value="General Question">General Inquiry / Media</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message / Quantities Needed
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention your approximate weekly requirement or any special delivery requests..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0A2540] hover:bg-[#103355] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Delivery Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your contact information is strictly used for order fulfillment and never shared.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
