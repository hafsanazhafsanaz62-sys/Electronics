import React from 'react';
import { Plus, Eye, Check, SlidersHorizontal, Star } from 'lucide-react';
import { Product, BuyerPersona } from '../types';

interface ProductCardProps {
  product: Product;
  activePersona: BuyerPersona;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
  isCompared: boolean;
  onToggleCompare: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  activePersona,
  onSelect,
  onAddToCart,
  onBuyNow,
  isCompared,
  onToggleCompare
}) => {
  const affinity = product.personaAffinities[activePersona.id];

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      
      {/* Upper Area: Image + Badges */}
      <div>
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Persona Match Indicator (quiet unboxed overlay) */}
          <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-white backdrop-blur-sm px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            <span className="text-emerald-400 font-mono-numbers">{affinity?.matchScore ?? 90}% Match</span>
            <span className="text-slate-400">·</span>
            <span className="text-[11px] text-slate-300 font-normal">{activePersona.name.split(' ')[0]}</span>
          </div>

          {/* Compare toggle button on image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(product);
            }}
            aria-label="Add to comparison"
            className={`absolute top-2.5 right-2.5 p-1.5 rounded-md text-xs font-medium transition-colors ${
              isCompared
                ? 'bg-indigo-600 text-white'
                : 'bg-white/90 text-slate-700 hover:bg-white hover:text-slate-950'
            }`}
            title={isCompared ? 'Remove from compare' : 'Compare specs'}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>

          {/* Quick view hover action */}
          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <button
              onClick={() => onSelect(product)}
              className="pointer-events-auto py-2 px-4 bg-white text-slate-900 text-xs font-semibold rounded-lg shadow-md hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick Inspect</span>
            </button>
          </div>
        </div>

        {/* Card Content with Zero-Pill Unboxed Metadata */}
        <div className="p-4">
          
          {/* Metadata line with typographic separators */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <div className="flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-semibold text-slate-400">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>{product.specs.warrantyYears} Yr Warranty</span>
            </div>
            
            <div className="flex items-center gap-1 text-slate-700 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-mono-numbers">{product.rating}</span>
              <span className="text-slate-400 text-[11px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onSelect(product)}
            className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer line-clamp-1 mb-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / Key Spec teaser */}
          <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Persona Highlight Reason Box */}
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-xs text-slate-600 mb-3">
            <span className="font-semibold text-slate-800 block text-[11px] mb-0.5">
              Why it fits {activePersona.name.split(' ')[0]}:
            </span>
            <span className="text-slate-600 text-[11px] line-clamp-2">
              {affinity?.keyHighlight || product.keyFeatures[0]}
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Area: Price + Add Button + Buyer Buy Now Button */}
      <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
        <div>
          {product.originalPrice && (
            <div className="text-[11px] text-slate-400 line-through font-mono-numbers">
              ${product.originalPrice.toLocaleString()}
            </div>
          )}
          <div className="text-base sm:text-lg font-bold text-slate-900 font-mono-numbers">
            ${product.price.toLocaleString()}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onAddToCart(product)}
            className="py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
            title="Add to bag"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Bag</span>
          </button>

          {/* Dedicated Buyer Button */}
          <button
            onClick={() => onBuyNow ? onBuyNow(product) : onAddToCart(product)}
            className="py-2 px-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
            title="Direct Buy with Persona Protection"
          >
            <span>Buy Now</span>
          </button>
        </div>
      </div>

    </div>
  );
};
