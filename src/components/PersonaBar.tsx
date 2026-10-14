import React from 'react';
import { Sparkles, ArrowRight, Info, Target, HeartHandshake, Zap } from 'lucide-react';
import { BuyerPersona } from '../types';

interface PersonaBarProps {
  activePersona: BuyerPersona;
  personas: BuyerPersona[];
  onSelectPersona: (persona: BuyerPersona) => void;
  onOpenAnatomy: () => void;
  onOpenQuiz: () => void;
}

export const PersonaBar: React.FC<PersonaBarProps> = ({
  activePersona,
  personas,
  onSelectPersona,
  onOpenAnatomy,
  onOpenQuiz
}) => {
  return (
    <div className="bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          
          {/* Active Persona summary */}
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src={activePersona.avatarUrl}
                alt={activePersona.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-700"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-1 -right-1 text-[10px] bg-emerald-500 text-slate-950 font-bold px-1 rounded-full leading-tight">
                98%
              </span>
            </div>
            
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-semibold text-white">{activePersona.name}</span>
                <span aria-hidden="true">·</span>
                <span>{activePersona.demographics.age} yrs</span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{activePersona.title}</span>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
                <Target className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">Active Goal: <strong className="text-white font-medium">{activePersona.goals.primaryGoals[0]}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Persona Pills switcher & Action buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 hidden sm:inline">Switch Lens:</span>
            <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg">
              {personas.map((p) => {
                const isActive = p.id === activePersona.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => onSelectPersona(p)}
                    className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap text-xs font-medium ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                    }`}
                  >
                    {p.name.split(' ')[0]}
                  </button>
                );
              })}
            </div>

            <button
              onClick={onOpenAnatomy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors whitespace-nowrap font-medium ml-1"
            >
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inspect Persona Anatomy</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={onOpenQuiz}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors whitespace-nowrap font-medium shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Persona Matcher Quiz</span>
            </button>
          </div>

        </div>

        {/* Persona friction & storefront remedy callout */}
        <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-rose-400 font-medium flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Persona Pain Point:
            </span>
            <span className="text-slate-300">{activePersona.painPoints.storefrontFriction}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <HeartHandshake className="w-3 h-3" />
              Storefront Remedy:
            </span>
            <span className="text-slate-300">{activePersona.painPoints.howStorefrontSolvesIt[0]}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
