import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Droplet } from 'lucide-react';
import { Product } from '../types';

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  initialProduct?: Product | null;
  onCompleteOrder: (orderSummary: {
    orderId: string;
    total: number;
    itemCount: number;
    customerName: string;
    address: string;
    city: string;
  }) => void;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  isOpen,
  onClose,
  products,
  initialProduct,
  onCompleteOrder,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || products[1]?.id || products[0]?.id
  );
  const [orderType, setOrderType] = useState<'case' | 'single'>('case');
  const [quantity, setQuantity] = useState<number>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Skardu');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setSelectedProductId(initialProduct.id);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const currentProduct = products.find((p) => p.id === selectedProductId) || products[0];
  const isCase = orderType === 'case';
  const unitPrice = isCase ? currentProduct.casePricePKR : currentProduct.pricePKR;
  const totalPrice = unitPrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      setErrorMsg('Please complete your name, phone number, and street address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrderId = `AQN-${Math.floor(10000 + Math.random() * 90000)}`;
      onCompleteOrder({
        orderId: generatedOrderId,
        total: totalPrice,
        itemCount: quantity,
        customerName: name,
        address,
        city,
      });
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[#0A2540]/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-lg p-6 sm:p-8 border border-slate-100 animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
                Direct Alpine Dispatch
              </span>
              <h3 className="font-display text-2xl font-bold text-[#0A2540]">
                Express Order AquaNorth
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                {errorMsg}
              </div>
            )}

            {/* Select Bottle Format */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Choose Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                {products.map((p) => {
                  const isSelected = p.id === currentProduct.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProductId(p.id)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'border-[#0A2540] bg-[#F0F9FF] ring-2 ring-[#0A2540]/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 object-contain mx-auto mb-1.5"
                      />
                      <div className="text-xs font-bold text-[#0A2540] truncate">{p.size}</div>
                      <div className="text-[10px] text-slate-500 truncate">{p.name.split(' ')[1]}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Packaging Option */}
            <div className="flex p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button
                type="button"
                onClick={() => setOrderType('single')}
                className={`flex-1 py-1.5 rounded-md transition-all ${
                  orderType === 'single'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {currentProduct.id === 'aquanorth-189l' ? 'Refill Jar (PKR 450)' : `Single Bottle (PKR ${currentProduct.pricePKR})`}
              </button>
              <button
                type="button"
                onClick={() => setOrderType('case')}
                className={`flex-1 py-1.5 rounded-md transition-all ${
                  orderType === 'case'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {currentProduct.id === 'aquanorth-189l' ? 'New Jar + Deposit (PKR 1,200)' : `${currentProduct.caseLabel} (PKR ${currentProduct.casePricePKR.toLocaleString()})`}
              </button>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between py-2 border-y border-slate-100">
              <span className="text-xs font-semibold text-slate-700">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center"
                >
                  -
                </button>
                <span className="font-bold text-sm text-slate-900 tabular-nums w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Recipient Details */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs px-2 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#0A2540]"
                  >
                    <option value="Skardu">Skardu</option>
                    <option value="Gilgit">Gilgit</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Lahore">Lahore</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="Street Address, Area, Landmark *"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                  />
                </div>
              </div>
            </div>

            {/* Total Summary */}
            <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-500 block">Total Due Upon Delivery</span>
                <span className="text-lg font-bold text-[#0A2540] tabular-nums">
                  PKR {totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Cash on Delivery</span>
                </span>
                <span className="text-[10px] text-slate-400">Free doorstep delivery</span>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl bg-[#0A2540] hover:bg-[#103355] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Confirming Order...</span>
              ) : (
                <>
                  <span>Place Delivery Order</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
