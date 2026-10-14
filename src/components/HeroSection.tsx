import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';
import { BuyerPersona, Product } from '../types';

interface HeroSectionProps {
  activePersona: BuyerPersona;
  featuredProduct: Product;
  onSelectProduct: (product: Product) => void;
  onExploreAnatomy: () => void;
  onAddToCart: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activePersona,
  featuredProduct,
  onSelectProduct,
  onExploreAnatomy,
  onAddToCart,
  onBuyNow
}) => {
  const affinity = featuredProduct.personaAffinities[activePersona.id];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        
        {/* 2-Column Split: Text Left, Product Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Persona Target Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              <span>Curated for {activePersona.name}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600 font-bold">{affinity?.matchScore ?? 98}% Workflow Affinity</span>
            </div>

            {/* Persona-adaptive Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4 text-balance">
              {activePersona.heroHeadline}
            </h1>

            {/* Subheadline tailored to persona's goals */}
            <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
              {activePersona.heroSubheadline}
            </p>

            {/* Persona Pain Point Remedy Callout */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
              <div className="text-xs font-semibold text-slate-900 flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Persona Fit Reason: {affinity?.keyHighlight}</span>
              </div>
              <p className="text-xs text-slate-600 leading-normal">
                {affinity?.reason}
              </p>
            </div>

            {/* CTAs with Buyer Button */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary Instant Buyer Button */}
              <button
                onClick={() => onBuyNow ? onBuyNow(featuredProduct) : onAddToCart(featuredProduct)}
                className="py-3 px-6 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-2 shadow-md active:scale-95"
              >
                <span>Instant Buy Now</span>
                <span className="font-mono-numbers text-xs text-slate-300">· ${featuredProduct.price.toLocaleString()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onAddToCart(featuredProduct)}
                className="py-3 px-4 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                + Add to Bag
              </button>
              
              <button
                onClick={() => onSelectProduct(featuredProduct)}
                className="py-3 px-4 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors"
              >
                Inspect Specs
              </button>

              <button
                onClick={onExploreAnatomy}
                className="py-3 px-3 text-xs font-medium text-indigo-700 hover:text-indigo-900 transition-colors"
              >
                Why this persona? →
              </button>
            </div>

          </div>

          {/* Product Image / Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl group">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Overlay info */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <div className="text-xs font-medium text-slate-300">Flagship Hardware</div>
                  <div className="text-lg font-bold">{featuredProduct.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{featuredProduct.specs.processor}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through font-mono-numbers">${featuredProduct.originalPrice?.toLocaleString()}</div>
                  <div className="text-xl font-bold font-mono-numbers text-emerald-400">${featuredProduct.price.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Trust Strip below hero as requested by frontend-design guidelines */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200 text-xs">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-slate-700 shrink-0" />
            <div>
              <div className="font-semibold text-slate-900">3-Year Factory Warranty</div>
              <div className="text-slate-500">Zero burn-in & defect guarantee</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-slate-700 shrink-0" />
            <div>
              <div className="font-semibold text-slate-900">Benchmarked Specs</div>
              <div className="text-slate-500">Raw hardware measurements only</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-slate-700 shrink-0" />
            <div>
              <div className="font-semibold text-slate-900">30-Day Studio Trial</div>
              <div className="text-slate-500">Zero restocking fee return policy</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-slate-700 shrink-0" />
            <div>
              <div className="font-semibold text-slate-900">Persona Match Guarantee</div>
              <div className="text-slate-500">Compatibility verified before ship</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
