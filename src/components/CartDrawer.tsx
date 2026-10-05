import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, isCase: boolean, newQty: number) => void;
  onRemoveItem: (productId: string, isCase: boolean) => void;
  onCheckoutSuccess: (orderSummary: { orderId: string; total: number; itemCount: number; customerName: string; address: string; city: string }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [city, setCity] = useState('Skardu');
  const [deliveryNote, setDeliveryNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => {
    const unitPrice = item.isCase ? item.product.casePricePKR : item.product.pricePKR;
    return sum + unitPrice * item.quantity;
  }, 0);

  const freeDeliveryThreshold = 1200;
  const isDeliveryFree = subtotal >= freeDeliveryThreshold || items.length === 0;
  const deliveryFee = isDeliveryFree ? 0 : 150;
  const grandTotal = subtotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      setErrorMsg('Your order bag is currently empty.');
      return;
    }
    if (!customerName.trim() || !customerPhone.trim() || !deliveryAddress.trim()) {
      setErrorMsg('Please complete your name, phone number, and delivery address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrderId = `AQN-${Math.floor(10000 + Math.random() * 90000)}`;
      onCheckoutSuccess({
        orderId: generatedOrderId,
        total: grandTotal,
        itemCount: items.reduce((acc, curr) => acc + curr.quantity, 0),
        customerName,
        address: deliveryAddress,
        city,
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A2540]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-[#F8FAFC]">
            <div>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Your Hydration Order
              </h2>
              <p className="text-xs text-slate-500">
                Direct dispatch from Skardu bottling facility
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-[#0A2540]">Your bag is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Select a size from our 330ml, 1.5L, or 18.9L bottles to begin your order.
                </p>
              </div>
            ) : (
              <div className="space-y-4 divide-y divide-slate-100">
                {items.map((item) => {
                  const itemPrice = item.isCase
                    ? item.product.casePricePKR
                    : item.product.pricePKR;
                  const itemTotal = itemPrice * item.quantity;

                  return (
                    <div
                      key={`${item.product.id}-${item.isCase ? 'case' : 'single'}`}
                      className="pt-4 first:pt-0 flex gap-4 items-center"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-contain bg-[#F8FAFC] rounded-lg border border-slate-100 p-1 shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#0A2540] truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {item.isCase ? item.product.caseLabel : `Single Bottle (${item.product.size})`}
                        </p>
                        <p className="text-xs font-semibold text-[#0284C7] mt-0.5 tabular-nums">
                          PKR {itemPrice.toLocaleString()} each
                        </p>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.isCase, item.quantity - 1)
                            }
                            className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-slate-800 w-6 text-center tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.isCase, item.quantity + 1)
                            }
                            className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-bold text-[#0A2540] tabular-nums">
                          PKR {itemTotal.toLocaleString()}
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id, item.isCase)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors mt-2"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Quick Delivery Details Form */}
            {items.length > 0 && (
              <form id="cart-order-form" onSubmit={handlePlaceOrder} className="pt-6 border-t border-slate-200 space-y-3.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Delivery Destination
                </h3>

                {errorMsg && (
                  <p className="text-xs font-medium text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                    {errorMsg}
                  </p>
                )}

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Recipient Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                  />

                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs px-2.5 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#0A2540]"
                  >
                    <option value="Skardu">Skardu City</option>
                    <option value="Shigar">Shigar Valley</option>
                    <option value="Gilgit">Gilgit City</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Lahore">Lahore</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Delivery Street Address (House/Office, Area, Landmark) *"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Delivery instructions (e.g. Ring bell, leave at reception)"
                    value={deliveryNote}
                    onChange={(e) => setDeliveryNote(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540]"
                  />
                </div>
              </form>
            )}
          </div>

          {/* Footer & Order Trigger */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-[#F8FAFC] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Cart Subtotal</span>
                  <span className="font-semibold text-slate-800 tabular-nums">PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Express Logistics</span>
                  <span className="font-semibold text-slate-800">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 font-semibold">FREE (Order &gt; PKR 1,200)</span>
                    ) : (
                      `PKR ${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#0A2540] pt-2 border-t border-slate-200">
                  <span>Grand Total</span>
                  <span className="tabular-nums">PKR {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Payment on Doorstep Delivery (Cash or Bank Transfer)</span>
              </div>

              <button
                type="submit"
                form="cart-order-form"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-[#0A2540] hover:bg-[#103355] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Order Dispatch...</span>
                ) : (
                  <>
                    <span>Confirm Order (PKR {grandTotal.toLocaleString()})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
