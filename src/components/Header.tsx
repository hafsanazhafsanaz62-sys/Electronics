import React from 'react';
import { ShoppingBag, SlidersHorizontal, ShieldCheck, UserCheck } from 'lucide-react';
import { BuyerPersona } from '../types';

interface HeaderProps {
  activeTab: 'store' | 'anatomy' | 'compare' | 'admin';
  setActiveTab: (tab: 'store' | 'anatomy' | 'compare' | 'admin') => void;
  activePersona: BuyerPersona;
  personas: BuyerPersona[];
  onSelectPersona: (persona: BuyerPersona) => void;
  cartCount: number;
  onOpenCart: () => void;
  compareCount: number;
  onOpenCompare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  activePersona,
  personas,
  onSelectPersona,
  cartCount,
  onOpenCart,
  compareCount,
  onOpenCompare
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('store')}
          className="text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-slate-900" aria-hidden="true" />
          <span>LUMINA ELECTRONICS</span>
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('store')}
            className={`whitespace-nowrap shrink-0 transition-colors flex items-center gap-1.5 ${
              activeTab === 'store' ? 'text-slate-950 font-bold' : 'hover:text-slate-950'
            }`}
          >
            <span>Buyer Storefront</span>
          </button>
          <button
            onClick={() => setActiveTab('anatomy')}
            className={`whitespace-nowrap shrink-0 transition-colors flex items-center gap-1.5 ${
              activeTab === 'anatomy' ? 'text-slate-950 font-semibold' : 'hover:text-slate-950'
            }`}
          >
            <UserCheck className="w-4 h-4 text-slate-500" />
            <span>Persona Anatomy</span>
          </button>
          <button
            onClick={onOpenCompare}
            className={`whitespace-nowrap shrink-0 transition-colors flex items-center gap-1.5 ${
              activeTab === 'compare' ? 'text-slate-950 font-semibold' : 'hover:text-slate-950'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <span>Spec Compare {compareCount > 0 && `(${compareCount})`}</span>
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`whitespace-nowrap shrink-0 transition-colors flex items-center gap-1.5 ${
              activeTab === 'admin' ? 'text-slate-950 font-semibold' : 'hover:text-slate-950'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-slate-500" />
            <span>Admin Panel</span>
          </button>
        </nav>

        {/* Zone 3: Interactive Controls (Persona Lens Selector & Shopping Bag) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Persona quick switch */}
          <div className="relative group">
            <button
              className="flex items-center gap-2 py-1.5 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              title="Active Buyer Persona Lens"
            >
              <img
                src={activePersona.avatarUrl}
                alt={activePersona.name}
                className="w-5 h-5 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="hidden sm:inline">Lens: <span className="font-semibold text-slate-900">{activePersona.name.split(' ')[0]}</span></span>
            </button>

            {/* Dropdown to pick persona */}
            <div className="absolute right-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-lg p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
              <div className="text-[11px] font-semibold text-slate-400 px-2 py-1 uppercase tracking-wider">
                Select Buyer Persona Lens
              </div>
              {personas.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectPersona(p)}
                  className={`w-full flex items-center gap-3 px-2 py-2 text-left rounded-md transition-colors ${
                    p.id === activePersona.id ? 'bg-slate-100 text-slate-900 font-medium' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <img
                    src={p.avatarUrl}
                    alt={p.name}
                    className="w-7 h-7 rounded-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold truncate">{p.name}</div>
                    <div className="text-[11px] text-slate-500 truncate">{p.title}</div>
                  </div>
                  {p.id === activePersona.id && (
                    <span className="text-[10px] bg-slate-900 text-white px-1.5 py-0.5 rounded text-xs font-mono">
                      Active
                    </span>
                  )}
                </button>
              ))}
              <div className="border-t border-slate-100 mt-2 pt-2">
                <button
                  onClick={() => setActiveTab('anatomy')}
                  className="w-full text-center text-xs font-medium text-slate-700 hover:text-slate-900 py-1"
                >
                  Explore Full Persona Anatomy →
                </button>
              </div>
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Open Shopping Bag"
            className="flex items-center gap-2 py-2 px-3.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-mono-numbers">{cartCount}</span>
          </button>
        </div>

      </div>

      {/* Mobile nav bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-100 px-2 py-2 bg-slate-50 text-xs">
        <button
          onClick={() => setActiveTab('store')}
          className={`px-2 py-1 font-medium ${activeTab === 'store' ? 'text-slate-900 font-bold' : 'text-slate-600'}`}
        >
          Store
        </button>
        <button
          onClick={() => setActiveTab('anatomy')}
          className={`px-2 py-1 font-medium ${activeTab === 'anatomy' ? 'text-slate-900 font-bold' : 'text-slate-600'}`}
        >
          Persona Anatomy
        </button>
        <button
          onClick={onOpenCompare}
          className={`px-2 py-1 font-medium ${activeTab === 'compare' ? 'text-slate-900 font-bold' : 'text-slate-600'}`}
        >
          Compare ({compareCount})
        </button>
        <button
          onClick={() => setActiveTab('admin')}
          className={`px-2 py-1 font-medium ${activeTab === 'admin' ? 'text-slate-900 font-bold' : 'text-slate-600'}`}
        >
          Admin
        </button>
      </div>
    </header>
  );
};
