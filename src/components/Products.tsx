import React, { useState } from 'react';
import { ShoppingBag, Check, Shield, Droplets, Info } from 'lucide-react';
import { Product } from '../types';
import { FadeIn } from './FadeIn';

interface ProductsProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, isCase: boolean) => void;
  onQuickOrder: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ products, onAddToCart, onQuickOrder }) => {
  // Track selected buying mode per product: 'single' or 'case'
  const [purchaseMode, setPurchaseMode] = useState<Record<string, 'single' | 'case'>>({
    'aquanorth-330ml': 'case',
    'aquanorth-1500ml': 'case',
    'aquanorth-189l': 'single',
  });

  // Track added animation feedback
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAdd = (product: Product) => {
    const isCase = purchaseMode[product.id] === 'case';
    onAddToCart(product, 1, isCase);
    setAddedItem(product.id);
    setTimeout(() => {
      setAddedItem(null);
    }, 1500);
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0284C7] mb-3">
            Pure Mountain Hydration
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A2540] mb-5 text-balance">
            Our Signature Bottle Collection
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Bottled at source in Skardu under sterile ISO-certified conditions. Available in three refined formats designed for fine hospitality, daily wellness, and residential dispensers.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, idx) => {
            const isCase = purchaseMode[product.id] === 'case';
            const price = isCase ? product.casePricePKR : product.pricePKR;
            const priceSubtext = isCase
              ? product.id === 'aquanorth-189l'
                ? 'Includes refundable bottle deposit'
                : `PKR ${(price / product.unitsPerCase).toFixed(0)} per bottle`
              : 'Per bottle retail price';

            return (
              <FadeIn key={product.id} delay={idx * 140} className="h-full">
                <div className="group flex flex-col h-full bg-[#F8FAFC] rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 relative">
                  {/* Visual Image Showcase with Neutral Studio Canvas */}
                  <div className="relative w-full aspect-[4/3] bg-white p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.size}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Subtle Size Tag */}
                    <span className="absolute top-4 left-4 text-xs font-semibold text-[#0A2540] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs border border-slate-200/60">
                      {product.size}
                    </span>

                    {product.badge && (
                      <span className="absolute top-4 right-4 text-[11px] font-semibold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-md">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    
                    {/* Category & Ideal Usage */}
                    <div className="text-xs text-slate-500 font-medium mb-1.5 flex items-center gap-1.5">
                      <span>{product.idealFor}</span>
                    </div>

                    {/* Title & Volume */}
                    <h3 className="font-display text-2xl font-bold text-[#0A2540] mb-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                      {product.description}
                    </p>

                    {/* Bottle Specifications (Unboxed clean metadata) */}
                    <div className="py-3 border-y border-slate-200/70 mb-5 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Mineral pH</span>
                        <span className="font-semibold text-slate-800">{product.specs.ph}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Material</span>
                        <span className="font-semibold text-slate-800 truncate block">{product.specs.bottleType}</span>
                      </div>
                    </div>

                    {/* Interactive Purchase Selector (Single Unit vs Case / Refill) */}
                    <div className="mb-5">
                      <div className="flex p-1 bg-white rounded-lg border border-slate-200 text-xs font-medium">
                        <button
                          type="button"
                          onClick={() =>
                            setPurchaseMode((prev) => ({ ...prev, [product.id]: 'single' }))
                          }
                          className={`flex-1 py-1.5 px-2 rounded-md transition-all ${
                            !isCase
                              ? 'bg-[#0A2540] text-white shadow-xs font-semibold'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {product.id === 'aquanorth-189l' ? 'Refill Only' : 'Single Bottle'}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setPurchaseMode((prev) => ({ ...prev, [product.id]: 'case' }))
                          }
                          className={`flex-1 py-1.5 px-2 rounded-md transition-all ${
                            isCase
                              ? 'bg-[#0A2540] text-white shadow-xs font-semibold'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {product.id === 'aquanorth-189l' ? 'New Jar + Deposit' : product.caseLabel}
                        </button>
                      </div>
                    </div>

                    {/* Price & Action Row */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="text-2xl font-bold text-[#0A2540] tabular-nums">
                          PKR {price.toLocaleString()}
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">
                          {priceSubtext}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleAdd(product)}
                          className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#0A2540] ${
                            addedItem === product.id
                              ? 'bg-emerald-600 text-white'
                              : 'bg-white hover:bg-slate-100 text-[#0A2540] border border-slate-300'
                          }`}
                          title="Add to shopping bag"
                        >
                          {addedItem === product.id ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5 text-[#0284C7]" />
                              <span>Add</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => onQuickOrder(product)}
                          className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#103355] rounded-lg shadow-xs transition-colors active:scale-95 focus-visible:outline-2 focus-visible:outline-[#0A2540]"
                        >
                          Order
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Hospitality & Corporate Wholesale Note */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F1F5F9]/80 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0284C7] shadow-xs flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0A2540]">
                Commercial Bulk & Hospitality Delivery
              </h4>
              <p className="text-sm text-slate-600 mt-0.5">
                Supplying five-star hotels, international airlines, restaurants, and executive headquarters with scheduled recurring weekly delivery and branded glassware.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0A2540] bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <span>Request Corporate Pricing</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
