import React from 'react';
import { CheckCircle2, X, PackageCheck, MapPin, Truck, Phone } from 'lucide-react';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderSummary: {
    orderId: string;
    total: number;
    itemCount: number;
    customerName: string;
    address: string;
    city: string;
  } | null;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  orderSummary,
}) => {
  if (!isOpen || !orderSummary) return null;

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
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center pb-6 border-b border-slate-100">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-mono font-bold text-[#0284C7] bg-[#E0F2FE] px-3 py-1 rounded-full">
              ORDER CONFIRMED · {orderSummary.orderId}
            </span>

            <h3 className="font-display text-2xl font-bold text-[#0A2540] mt-3">
              Mountain Purity on its Way
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-slate-900">{orderSummary.customerName}</span>. Your AquaNorth order has been queued for immediate dispatch.
            </p>
          </div>

          <div className="py-6 space-y-4 text-sm">
            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200/80 space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Order Reference</span>
                <span className="font-mono font-bold text-slate-800">{orderSummary.orderId}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Total Units</span>
                <span className="font-semibold text-slate-800">{orderSummary.itemCount} Items</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Amount Due</span>
                <span className="font-bold text-[#0A2540] text-sm tabular-nums">
                  PKR {orderSummary.total.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-200">
                <span className="text-slate-500">Payment Term</span>
                <span className="font-semibold text-emerald-600">Cash / Online Transfer upon Delivery</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Delivering to:</strong> {orderSummary.address}, {orderSummary.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>
                  <strong className="text-slate-800">Estimated Delivery:</strong> Same-day in {orderSummary.city} (within 3–5 hours)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>
                  <strong className="text-slate-800">Helpline:</strong> +92 (5815) 920-441 / WhatsApp +92 300 859 2040
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl bg-[#0A2540] hover:bg-[#103355] text-white font-semibold text-sm shadow-md transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
