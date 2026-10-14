import React from 'react';
import { X, Trash2, Check, Plus, SlidersHorizontal } from 'lucide-react';
import { Product, BuyerPersona } from '../types';

interface SpecCompareDrawerProps {
  comparedProducts: Product[];
  activePersona: BuyerPersona;
  isOpen: boolean;
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  onAddToCart: (product: Product) => void;
}

export const SpecCompareDrawer: React.FC<SpecCompareDrawerProps> = ({
  comparedProducts,
  activePersona,
  isOpen,
  onClose,
  onRemoveProduct,
  onClearAll,
  onAddToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-2 sm:p-6 animate-fade-in">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:px-6 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-slate-700" />
            <h2 className="text-base font-bold text-slate-900">
              Hardware Spec Comparison Matrix ({comparedProducts.length} items)
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            {comparedProducts.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-rose-600 hover:text-rose-800 font-medium flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-auto p-4 sm:p-6 flex-1">
          {comparedProducts.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              <SlidersHorizontal className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="font-semibold text-slate-700">No hardware selected for comparison</p>
              <p className="text-xs text-slate-500 mt-1">
                Click the compare icon on any product card in the storefront to evaluate side-by-side specs.
              </p>
            </div>
          ) : (
            <div className="min-w-[650px]">
              <div className="grid grid-cols-4 gap-4 pb-4 border-b border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-4">
                  Product Overview
                </div>
                {comparedProducts.map((p) => (
                  <div key={p.id} className="relative bg-slate-50 rounded-xl p-3 border border-slate-200 text-center">
                    <button
                      onClick={() => onRemoveProduct(p.id)}
                      className="absolute top-2 right-2 p-1 text-slate-400 hover:text-rose-600 rounded"
                      title="Remove from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-20 h-20 object-cover mx-auto rounded-lg mb-2"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-xs font-bold text-slate-900 line-clamp-1">{p.name}</div>
                    <div className="text-sm font-bold text-slate-900 font-mono-numbers mt-1">
                      ${p.price.toLocaleString()}
                    </div>
                    <button
                      onClick={() => onAddToCart(p)}
                      className="mt-2 w-full py-1.5 bg-slate-900 text-white text-[11px] font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-100 text-xs">
                
                {/* Persona Match Score */}
                <div className="grid grid-cols-4 gap-4 py-3 bg-indigo-50/50 -mx-4 px-4">
                  <div className="font-bold text-slate-900">
                    {activePersona.name.split(' ')[0]} Match Score
                  </div>
                  {comparedProducts.map((p) => {
                    const match = p.personaAffinities[activePersona.id]?.matchScore ?? 80;
                    return (
                      <div key={p.id} className="font-bold text-emerald-700 font-mono-numbers">
                        {match}% Affinity
                      </div>
                    );
                  })}
                </div>

                {/* Display */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="font-medium text-slate-500">Display / Visuals</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="text-slate-800">
                      {p.specs.display || 'N/A'}
                    </div>
                  ))}
                </div>

                {/* Refresh Rate */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="font-medium text-slate-500">Refresh / Polling Rate</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="text-slate-800 font-mono-numbers">
                      {p.specs.refreshRate || 'Standard 60Hz'}
                    </div>
                  ))}
                </div>

                {/* Processor */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="font-medium text-slate-500">Compute Core</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="text-slate-800">
                      {p.specs.processor || 'Hardware Controller'}
                    </div>
                  ))}
                </div>

                {/* Weight */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="font-medium text-slate-500">Weight & Portability</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="text-slate-800 font-mono-numbers">
                      {p.specs.weight || 'Standard'}
                    </div>
                  ))}
                </div>

                {/* Warranty */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="font-medium text-slate-500">Factory Warranty</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="text-slate-800 font-mono-numbers">
                      {p.specs.warrantyYears} Years Comprehensive
                    </div>
                  ))}
                </div>

                {/* OS Certification */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="font-medium text-slate-500">OS Certification</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="text-slate-800 space-y-0.5">
                      <div className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>macOS: {p.compatibility.macos ? 'Yes' : 'No'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Windows: {p.compatibility.windows ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
