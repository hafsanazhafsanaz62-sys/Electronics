import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CartItem, BuyerPersona } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  activePersona: BuyerPersona;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  activePersona,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * appliedDiscount) / 100;
  const subtotal = rawSubtotal - discountAmount;
  const estimatedTax = subtotal * 0.0825;
  const total = subtotal + estimatedTax;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'PERSONA10' || promoCode.trim().toUpperCase() === 'LUMINA10') {
      setAppliedDiscount(10);
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'CREATOR15') {
      setAppliedDiscount(15);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try PERSONA10 or CREATOR15');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end animate-fade-in">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-base font-bold text-slate-900">Your Shopping Bag</h2>
            <div className="text-xs text-slate-500">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} items · Tailored for {activePersona.name}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <p className="font-semibold text-slate-800 text-sm mb-1">Your bag is empty</p>
              <p className="text-xs text-slate-500 mb-4">Discover hardware benchmarked for your workflow.</p>
              <button
                onClick={onClose}
                className="py-2 px-4 bg-slate-900 text-white text-xs font-semibold rounded-lg"
              >
                Browse Storefront
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover bg-white shrink-0 border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-slate-900 truncate">
                    {item.product.name}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {item.product.category} · {item.product.specs.warrantyYears} Yr Warranty
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono-numbers mt-1">
                    ${item.product.price.toLocaleString()}
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-md p-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-slate-500 hover:text-slate-900 rounded"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-slate-900 px-1 font-mono-numbers">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-slate-500 hover:text-slate-900 rounded"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-400 hover:text-rose-600 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Persona tailored perk note */}
          {cart.length > 0 && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Persona Protection Active: </span>
                <span>
                  {activePersona.id === 'alex' && '30-Day Zero-Restock Studio Acoustic Trial Guarantee.'}
                  {activePersona.id === 'sophia' && 'Carbon-Neutral Delivery & 100% Recycled Packaging included.'}
                  {activePersona.id === 'marcus' && 'Zero Dead-Pixel & Zero Burn-In Hardware Protection included.'}
                  {activePersona.id === 'elena' && 'Worldwide 48-Hour Priority Travel Replacement option included.'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            
            {/* Promo code input */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (try PERSONA10)"
                  className="w-full pl-8 pr-2 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>
              <button
                onClick={handleApplyPromo}
                className="py-1.5 px-3 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
              >
                Apply
              </button>
            </div>
            {promoError && <p className="text-[11px] text-rose-600">{promoError}</p>}
            {appliedDiscount > 0 && (
              <p className="text-[11px] text-emerald-700 font-medium">
                {appliedDiscount}% Persona Discount Applied!
              </p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono-numbers text-slate-900 font-medium">${rawSubtotal.toLocaleString()}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Persona Promo ({appliedDiscount}%)</span>
                  <span className="font-mono-numbers">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Tax (8.25%)</span>
                <span className="font-mono-numbers">${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-emerald-600">
                <span>Shipping</span>
                <span>FREE (2-Day Priority)</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total</span>
                <span className="font-mono-numbers text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
