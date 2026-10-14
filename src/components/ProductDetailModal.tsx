import React, { useState } from 'react';
import { X, Check, Star, Shield, ShieldCheck, Zap, Sparkles, SlidersHorizontal, Laptop, HelpCircle } from 'lucide-react';
import { Product, BuyerPersona } from '../types';

interface ProductDetailModalProps {
  product: Product;
  activePersona: BuyerPersona;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
  isCompared: boolean;
  onToggleCompare: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  activePersona,
  onClose,
  onAddToCart,
  onBuyNow,
  isCompared,
  onToggleCompare
}) => {
  const [selectedTab, setSelectedTab] = useState<'specs' | 'compatibility' | 'persona-fit' | 'reviews'>('specs');
  const [selectedOS, setSelectedOS] = useState<'macos' | 'windows' | 'linux'>('macos');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const affinity = product.personaAffinities[activePersona.id];

  const handleAdd = () => {
    onAddToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const isOSCompatible =
    selectedOS === 'macos'
      ? product.compatibility.macos
      : selectedOS === 'windows'
      ? product.compatibility.windows
      : product.compatibility.linux;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700 uppercase tracking-wider">{product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-numbers">SKU: {product.id}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Contiguous Purchase Module PDP */}
        <div className="overflow-y-auto p-6 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Gallery Left */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Persona match breakdown box */}
              <div className="bg-slate-900 text-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold">Persona Match Score: {affinity?.matchScore ?? 90}%</span>
                  </div>
                  <span className="text-[11px] text-slate-400">For {activePersona.name}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {affinity?.reason}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
                  Verified Match: {affinity?.keyHighlight}
                </div>
              </div>

              {/* What's in the Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
                <div className="font-semibold text-slate-900 mb-2">Package Contents (In the Box)</div>
                <ul className="space-y-1.5 text-slate-600">
                  {product.inTheBox.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Purchase Module Right */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-slate-900 font-mono-numbers">{product.rating}</span>
                    <span>({product.reviewCount} verified reviews)</span>
                  </div>
                  <span className="text-emerald-600 font-medium">{product.stock} units in stock</span>
                </div>

                <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  {product.name}
                </h1>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 pb-4 border-b border-slate-200">
                  <span className="text-3xl font-extrabold text-slate-900 font-mono-numbers">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-400 line-through font-mono-numbers">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs text-slate-500">Free 2-Day Air Shipping</span>
                </div>
              </div>

              {/* Key Features bullet list */}
              <div>
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                  Engineered Advantages
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {product.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Buy CTAs with Buyer Button */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                <button
                  onClick={handleAdd}
                  className="w-full sm:flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <span>Add to Bag</span>
                      <span className="font-mono-numbers text-[11px] text-slate-500">· ${product.price.toLocaleString()}</span>
                    </>
                  )}
                </button>

                {/* Instant Buyer Button */}
                <button
                  onClick={() => {
                    if (onBuyNow) {
                      onBuyNow(product);
                    } else {
                      handleAdd();
                    }
                  }}
                  className="w-full sm:flex-1 py-3 px-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Instant Buy Now</span>
                </button>

                <button
                  onClick={() => onToggleCompare(product)}
                  className={`py-3 px-3.5 rounded-xl border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                    isCompared
                      ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>{isCompared ? 'Compared' : 'Compare'}</span>
                </button>
              </div>

              {/* Interactive Tabs for Spec Matrix / Compatibility / Reviews */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-4 text-xs font-medium">
                  <button
                    onClick={() => setSelectedTab('specs')}
                    className={`pb-1 transition-colors ${
                      selectedTab === 'specs'
                        ? 'text-slate-900 border-b-2 border-slate-900 font-semibold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Technical Specifications
                  </button>
                  <button
                    onClick={() => setSelectedTab('compatibility')}
                    className={`pb-1 transition-colors ${
                      selectedTab === 'compatibility'
                        ? 'text-slate-900 border-b-2 border-slate-900 font-semibold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Setup Compatibility Checker
                  </button>
                  <button
                    onClick={() => setSelectedTab('persona-fit')}
                    className={`pb-1 transition-colors ${
                      selectedTab === 'persona-fit'
                        ? 'text-slate-900 border-b-2 border-slate-900 font-semibold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Persona Fit Analysis
                  </button>
                </div>

                {/* Tab: Specs Matrix */}
                {selectedTab === 'specs' && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                    {product.specs.display && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Display</span>
                        <span className="text-slate-800 font-medium">{product.specs.display}</span>
                      </div>
                    )}
                    {product.specs.processor && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Processor</span>
                        <span className="text-slate-800 font-medium">{product.specs.processor}</span>
                      </div>
                    )}
                    {product.specs.memory && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Memory / Bandwidth</span>
                        <span className="text-slate-800 font-medium">{product.specs.memory}</span>
                      </div>
                    )}
                    {product.specs.storage && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Internal Storage</span>
                        <span className="text-slate-800 font-medium">{product.specs.storage}</span>
                      </div>
                    )}
                    {product.specs.refreshRate && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Refresh / Polling Rate</span>
                        <span className="text-slate-800 font-medium font-mono-numbers">{product.specs.refreshRate}</span>
                      </div>
                    )}
                    {product.specs.responseTime && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Pixel Response Time</span>
                        <span className="text-slate-800 font-medium font-mono-numbers">{product.specs.responseTime}</span>
                      </div>
                    )}
                    {product.specs.driverSize && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Transducer Drivers</span>
                        <span className="text-slate-800 font-medium">{product.specs.driverSize}</span>
                      </div>
                    )}
                    {product.specs.frequencyResponse && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Frequency Response</span>
                        <span className="text-slate-800 font-medium font-mono-numbers">{product.specs.frequencyResponse}</span>
                      </div>
                    )}
                    {product.specs.impedance && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Impedance</span>
                        <span className="text-slate-800 font-medium font-mono-numbers">{product.specs.impedance}</span>
                      </div>
                    )}
                    {product.specs.weight && (
                      <div className="border-b border-slate-100 pb-1.5">
                        <span className="text-slate-400 block text-[11px]">Hardware Weight</span>
                        <span className="text-slate-800 font-medium font-mono-numbers">{product.specs.weight}</span>
                      </div>
                    )}
                    {product.specs.connectivity && (
                      <div className="border-b border-slate-100 pb-1.5 col-span-2">
                        <span className="text-slate-400 block text-[11px]">Connectivity & Ports</span>
                        <span className="text-slate-800 font-medium">{product.specs.connectivity}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab: Compatibility Checker */}
                {selectedTab === 'compatibility' && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-3">
                    <div className="text-xs font-semibold text-slate-800">
                      Select your operating environment:
                    </div>
                    <div className="flex items-center gap-2">
                      {(['macos', 'windows', 'linux'] as const).map((os) => (
                        <button
                          key={os}
                          onClick={() => setSelectedOS(os)}
                          className={`py-1.5 px-3 rounded-lg text-xs font-medium capitalize transition-colors ${
                            selectedOS === os
                              ? 'bg-slate-900 text-white'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {os === 'macos' ? 'macOS' : os}
                        </button>
                      ))}
                    </div>

                    <div className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                      isOSCompatible
                        ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                        : 'bg-amber-50/80 border-amber-200 text-amber-900'
                    }`}>
                      {isOSCompatible ? (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-semibold text-xs">
                          {isOSCompatible
                            ? `Fully Certified & Supported on ${selectedOS.toUpperCase()}`
                            : `Limited or Specialized Support on ${selectedOS.toUpperCase()}`}
                        </div>
                        <div className="text-[11px] mt-0.5 opacity-90 leading-relaxed">
                          {product.compatibility.notes}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab: Persona Fit Analysis */}
                {selectedTab === 'persona-fit' && (
                  <div className="space-y-3 text-xs">
                    <div className="text-slate-700 leading-relaxed">
                      Lumina evaluated this device against <strong>{activePersona.name}'s</strong> core workflow,
                      addressing specific pain points in their buying journey:
                    </div>
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
                      <div className="font-semibold text-slate-900 text-xs">
                        How this solves {activePersona.name.split(' ')[0]}'s Top Anxiety:
                      </div>
                      <div className="text-slate-600 text-xs italic">
                        "{activePersona.painPoints.storefrontFriction}"
                      </div>
                      <div className="text-emerald-700 font-medium text-xs pt-1 border-t border-slate-200 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{affinity?.reason}</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
