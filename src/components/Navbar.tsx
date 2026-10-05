import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Droplets, ArrowRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why AquaNorth', href: '#why-us' },
    { label: 'Quality', href: '#quality' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-slate-200/80 shadow-xs py-3.5'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single element Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-900 focus-visible:outline-2 focus-visible:outline-[#0A2540] rounded-sm"
            aria-label="AquaNorth Home"
          >
            <span className="w-8 h-8 rounded-lg bg-[#0A2540] text-[#38BDF8] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <Droplets className="w-4 h-4 stroke-[2.2]" />
            </span>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540]">
              AquaNorth
            </span>
          </a>

          {/* Zone 2: Navigation Links (Text with subtle hover state) */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#0A2540] py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0EA5E9] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-slate-700 hover:text-[#0A2540] hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#0A2540]"
              aria-label={`View order bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-[#0A2540]" />
              {cartCount > 0 && (
                <span className="bg-[#0284C7] text-white text-[11px] font-semibold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Clear Order Now Button */}
            <button
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#103355] rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540]"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-lg px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#0284C7] py-2 transition-colors border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0A2540] rounded-lg shadow-sm"
            >
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Order Cart ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
