import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { CartItem, BuyerPersona, Order } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  activePersona: BuyerPersona;
  onOrderCompleted: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  activePersona,
  onOrderCompleted
}) => {
  const [step, setStep] = useState<'info' | 'perks' | 'payment' | 'confirmed'>('info');
  const [customerName, setCustomerName] = useState(activePersona.name);
  const [customerEmail, setCustomerEmail] = useState(`${activePersona.id}@lumina-client.com`);
  const [address, setAddress] = useState(activePersona.demographics.location);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const trackingNumber = `TRK-${Math.floor(10000 + Math.random() * 90000)}-${activePersona.id.toUpperCase()}`;

    const newOrder: Order = {
      id: orderId,
      customerName,
      customerEmail,
      personaId: activePersona.id,
      items: cart.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        quantity: item.quantity,
        unitPrice: item.product.price
      })),
      totalAmount,
      status: 'Processing',
      createdAt: new Date().toISOString(),
      shippingAddress: address,
      trackingNumber
    };

    setCompletedOrder(newOrder);
    onOrderCompleted(newOrder);
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              {step === 'confirmed' ? 'Order Confirmed' : 'Secure Express Checkout'}
            </h2>
            <div className="text-xs text-slate-500">
              {step !== 'confirmed' && `Tailored for ${activePersona.name} · Step ${step === 'info' ? '1/3' : step === 'perks' ? '2/3' : '3/3'}`}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close checkout"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Shipping Details */}
        {step === 'info' && (
          <div className="p-6 space-y-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-700">Pre-filled with Persona Profile: </span>
                <span className="text-slate-900 font-bold">{activePersona.name}</span>
              </div>
              <span className="text-[11px] text-indigo-600 font-medium">{activePersona.title}</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Full Customer Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Email for Benchmarking Report & Tracking</label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Delivery Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep('perks')}
                className="py-2.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Continue to Persona Guarantees</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Persona-Specific Delivery Perks */}
        {step === 'perks' && (
          <div className="p-6 space-y-4 text-xs">
            <div className="text-sm font-bold text-slate-900">
              Complimentary Persona Protections & Packaging
            </div>
            <p className="text-slate-600">
              Lumina automatically attaches customized handling protocols to solve {activePersona.name}'s known pain points:
            </p>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/70 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">
                    {activePersona.id === 'alex' && 'Hardware Signal Path Calibration Certificate'}
                    {activePersona.id === 'sophia' && '100% Biodegradable Mushroom Packaging & Carbon-Neutral Transit'}
                    {activePersona.id === 'marcus' && 'Pre-Shipment 24-Hour Thermal & Dead-Pixel Burn-in Stress Test'}
                    {activePersona.id === 'elena' && 'Worldwide 48-Hour Priority Passport Replacement Protection'}
                  </div>
                  <div className="text-slate-600 text-[11px] mt-0.5">
                    Included free of charge based on your buyer persona profile.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <Truck className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Express Insured Transit</div>
                  <div className="text-slate-600 text-[11px] mt-0.5">
                    Real-time signature required upon delivery to prevent porch theft of high-value electronics.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep('info')}
                className="text-slate-500 hover:text-slate-900 font-medium"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep('payment')}
                className="py-2.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment Simulation */}
        {step === 'payment' && (
          <div className="p-6 space-y-4 text-xs">
            <div className="text-sm font-bold text-slate-900">Select Payment Method</div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'card', label: 'Credit Card / Apple Pay' },
                { id: 'paypal', label: 'PayPal Instant' },
                { id: 'financing', label: '0% APR Monthly (12 Mo)' },
                { id: 'corporate', label: 'Corporate VAT Invoice' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`p-3 rounded-xl border text-left font-medium transition-colors ${
                    paymentMethod === m.id
                      ? 'border-slate-900 bg-slate-50 text-slate-900 ring-1 ring-slate-900'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex justify-between font-medium text-slate-600">
                <span>Order Total:</span>
                <span className="font-bold text-slate-900 text-sm font-mono-numbers">${totalAmount.toLocaleString()}</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Encrypted with 256-bit TLS. 30-day money back guarantee with zero return fees.
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep('perks')}
                className="text-slate-500 hover:text-slate-900 font-medium"
              >
                ← Back
              </button>
              <button
                onClick={handlePlaceOrder}
                className="py-3 px-8 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-md flex items-center gap-2"
              >
                <span>Authorize & Place Order</span>
                <span className="font-mono-numbers text-xs opacity-90">· ${totalAmount.toLocaleString()}</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Order Confirmed Receipt */}
        {step === 'confirmed' && completedOrder && (
          <div className="p-6 sm:p-8 text-center space-y-4 text-xs">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900">
              Payment Confirmed — Preparing Shipment
            </h3>
            
            <p className="text-slate-600 max-w-md mx-auto text-xs leading-relaxed">
              Thank you, <strong>{completedOrder.customerName}</strong>. Your order has been registered in the system
              and tagged with the <strong>{activePersona.name}</strong> buyer segment.
            </p>

            {/* Receipt Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto space-y-2 font-mono-numbers">
              <div className="flex justify-between pb-2 border-b border-slate-200 font-sans text-xs">
                <span className="text-slate-500">Order Number</span>
                <span className="font-bold text-slate-900">{completedOrder.id}</span>
              </div>
              <div className="flex justify-between font-sans text-xs">
                <span className="text-slate-500">Tracking Number</span>
                <span className="text-indigo-600 font-semibold">{completedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between font-sans text-xs">
                <span className="text-slate-500">Buyer Persona Tag</span>
                <span className="font-medium text-slate-900">{activePersona.name} ({activePersona.id})</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 font-sans text-xs">
                <span className="font-bold text-slate-900">Amount Paid</span>
                <span className="font-bold text-slate-900 text-sm">${completedOrder.totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto py-2.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors"
              >
                Back to Storefront
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
