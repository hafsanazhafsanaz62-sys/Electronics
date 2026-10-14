import React, { useState } from 'react';
import { 
  UserCheck, 
  Target, 
  AlertTriangle, 
  Compass, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { BuyerPersona } from '../types';
import { PERSONA_COMPARISON_METRICS } from '../data/personas';

interface PersonaAnatomyViewProps {
  personas: BuyerPersona[];
  activePersona: BuyerPersona;
  onSelectPersona: (persona: BuyerPersona) => void;
  onApplyLensAndShop: (persona: BuyerPersona) => void;
}

export const PersonaAnatomyView: React.FC<PersonaAnatomyViewProps> = ({
  personas,
  activePersona,
  onSelectPersona,
  onApplyLensAndShop
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'matrix' | 'quiz'>('profile');
  const [quizAnswers, setQuizAnswers] = useState<{ q1?: string; q2?: string; q3?: string }>({});
  const [quizResult, setQuizResult] = useState<BuyerPersona | null>(null);

  const handleQuizSubmit = () => {
    if (quizAnswers.q1 === 'audio-color' || quizAnswers.q3 === 'specs') {
      setQuizResult(personas.find(p => p.id === 'alex') || personas[0]);
    } else if (quizAnswers.q1 === 'family-privacy' || quizAnswers.q3 === 'peace') {
      setQuizResult(personas.find(p => p.id === 'sophia') || personas[1]);
    } else if (quizAnswers.q1 === 'frametimes' || quizAnswers.q3 === 'speed') {
      setQuizResult(personas.find(p => p.id === 'marcus') || personas[2]);
    } else {
      setQuizResult(personas.find(p => p.id === 'elena') || personas[3]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-8">
        <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
          E-Commerce User Experience Architecture
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Anatomy of a Buyer Persona
        </h1>
        <p className="text-base text-slate-600 mt-2 leading-relaxed">
          Modern electronics retail fails when treating all buyers identically. Explore the 5 psychological
          and behavioral dimensions that shape our storefront layout, pricing transparency, and spec sheets.
        </p>
      </div>

      {/* Top Segmented Tabs: Profile Deep-Dive / Comparison Matrix / Interactive Finder */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-8">
        <button
          onClick={() => setActiveTab('profile')}
          className={`py-2 px-4 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
            activeTab === 'profile'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Interactive Persona Inspector</span>
        </button>

        <button
          onClick={() => setActiveTab('matrix')}
          className={`py-2 px-4 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
            activeTab === 'matrix'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>5-Pillar Comparison Matrix</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`py-2 px-4 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
            activeTab === 'quiz'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Buyer Archetype Finder</span>
        </button>
      </div>

      {/* TAB 1: PROFILE DEEP DIVE */}
      {activeTab === 'profile' && (
        <div className="space-y-8">
          
          {/* Persona Selection Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {personas.map((p) => {
              const isSelected = p.id === activePersona.id;
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectPersona(p)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-white border-slate-900 shadow-md ring-2 ring-slate-900/10'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.avatarUrl}
                      alt={p.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">{p.name}</div>
                      <div className="text-[11px] text-slate-500 truncate">{p.title.split('&')[0]}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Persona Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 lg:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <img
                  src={activePersona.avatarUrl}
                  alt={activePersona.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-slate-800 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Active Persona Lens
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">{activePersona.name}</h2>
                  <p className="text-sm text-slate-300 mt-0.5">{activePersona.title}</p>
                  <p className="text-xs text-slate-400 italic mt-1.5 max-w-xl">
                    "{activePersona.tagline}"
                  </p>
                </div>
              </div>

              <button
                onClick={() => onApplyLensAndShop(activePersona)}
                className="py-3 px-5 bg-white text-slate-950 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
              >
                <span>Shop Through {activePersona.name.split(' ')[0]}'s Lens</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5-PILLAR ANATOMY CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Demographics */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Demographics</h3>
                  <div className="text-[11px] text-slate-500">Quantitative Human Profile</div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Age</span>
                  <span className="font-semibold text-slate-900 font-mono-numbers">{activePersona.demographics.age} years old</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Occupation</span>
                  <span className="font-semibold text-slate-900 text-right">{activePersona.demographics.occupation}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Household Income</span>
                  <span className="font-semibold text-slate-900 font-mono-numbers">{activePersona.demographics.annualIncome}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Location</span>
                  <span className="font-semibold text-slate-900">{activePersona.demographics.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Annual Tech Budget</span>
                  <span className="font-semibold text-emerald-700 font-mono-numbers">{activePersona.demographics.techBudgetAnnual}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Household Structure</span>
                  <span className="font-semibold text-slate-900 text-right">{activePersona.demographics.household}</span>
                </div>
              </div>
            </div>

            {/* 2. Psychographics */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Psychographics</h3>
                  <div className="text-[11px] text-slate-500">Beliefs, Aesthetics & Identity</div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block mb-1">Core Values</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activePersona.psychographics.coreValues.map((v, i) => (
                      <span key={i} className="text-slate-700 font-medium bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Tech Philosophy</span>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    "{activePersona.psychographics.techPhilosophy}"
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Aesthetic Preference</span>
                  <p className="text-slate-700 leading-relaxed">
                    {activePersona.psychographics.aestheticPreference}
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 block mb-1">Key Trust Signals</span>
                  <ul className="space-y-1 text-slate-600">
                    {activePersona.psychographics.trustSignals.map((sig, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{sig}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Goals & Motivation */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Goals & Motivation</h3>
                  <div className="text-[11px] text-slate-500">Desired Outcomes & Purchase Drivers</div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block mb-1">Primary Performance Goals</span>
                  <ul className="space-y-1.5 text-slate-700">
                    {activePersona.goals.primaryGoals.map((g, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Target className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Decision Priority</span>
                  <div className="font-semibold text-slate-900 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    {activePersona.goals.decisionPriority}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Aspirational Workflow</span>
                  <p className="text-slate-600 leading-relaxed">
                    {activePersona.goals.aspirationalWorkflow}
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Pain Points & Friction */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4 lg:col-span-2">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Pain Points & Doubts</h3>
                  <div className="text-[11px] text-slate-500">Where Traditional Stores Lose This Buyer</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <span className="font-semibold text-rose-700 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Spec Jargon & Anxieties
                  </span>
                  <ul className="space-y-1 text-slate-600">
                    {activePersona.painPoints.specAnxieties.map((anx, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">·</span>
                        <span>{anx}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="font-semibold text-rose-700 flex items-center gap-1.5 pt-2">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Compatibility Doubts
                  </span>
                  <ul className="space-y-1 text-slate-600">
                    {activePersona.painPoints.compatibilityFriction.map((fric, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">·</span>
                        <span>{fric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 space-y-2.5">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>How Lumina Solves It in Code & UX</span>
                  </div>
                  <ul className="space-y-2 text-emerald-950">
                    {activePersona.painPoints.howStorefrontSolvesIt.map((sol, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Digital Behavior */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                  05
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Digital Behavior</h3>
                  <div className="text-[11px] text-slate-500">Shopping Patterns & Research Path</div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="text-slate-500 block mb-0.5">Primary Channels</span>
                  <div className="text-slate-800 font-medium">
                    {activePersona.digitalBehavior.researchChannels.join(', ')}
                  </div>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Decision Timeframe</span>
                  <span className="font-semibold text-slate-900">{activePersona.digitalBehavior.decisionTimeframe}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Primary Device</span>
                  <span className="font-semibold text-slate-900">{activePersona.digitalBehavior.primaryDevice}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Review Scrutiny</span>
                  <span className="font-semibold text-indigo-700">{activePersona.digitalBehavior.reviewScrutiny}</span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Payment Style</span>
                  <span className="text-slate-800">{activePersona.digitalBehavior.paymentPreference}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: 5-PILLAR COMPARISON MATRIX */}
      {activeTab === 'matrix' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg font-bold text-slate-900">Side-by-Side Persona Matrix</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Comparative analysis of all 4 buyer segments across Demographics, Psychographics, Goals, Pain Points, and Digital Behaviors.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5 w-44">Attribute</th>
                  <th className="p-3.5">Alex Chen (Pro Audio)</th>
                  <th className="p-3.5">Sophia Martinez (Smart Home)</th>
                  <th className="p-3.5">Marcus Vance (Esports Gamer)</th>
                  <th className="p-3.5">Elena Rostova (Executive Nomad)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PERSONA_COMPARISON_METRICS.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-slate-50 font-bold text-slate-900 text-xs">
                      <td colSpan={5} className="px-3.5 py-2 uppercase tracking-wider text-[11px] text-slate-500">
                        {section.category}
                      </td>
                    </tr>
                    {section.attributes.map((attr, aIdx) => (
                      <tr key={aIdx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-3.5 font-medium text-slate-600 bg-slate-50/30">{attr.name}</td>
                        <td className="p-3.5 text-slate-900 font-mono-numbers">{attr.alex}</td>
                        <td className="p-3.5 text-slate-900 font-mono-numbers">{attr.sophia}</td>
                        <td className="p-3.5 text-slate-900 font-mono-numbers">{attr.marcus}</td>
                        <td className="p-3.5 text-slate-900 font-mono-numbers">{attr.elena}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: BUYER ARCHETYPE FINDER QUIZ */}
      {activeTab === 'quiz' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
          <div className="text-center mb-6">
            <Sparkles className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h2 className="text-xl font-bold text-slate-900">Find Your Buyer Archetype</h2>
            <p className="text-xs text-slate-500 mt-1">
              Answer 3 brief questions to determine which buyer persona best matches your current tech priorities.
            </p>
          </div>

          <div className="space-y-6 text-xs">
            {/* Question 1 */}
            <div>
              <label className="font-bold text-slate-800 block mb-2 text-sm">
                1. What is your highest technical priority when evaluating hardware?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'audio-color', label: 'Color accuracy & studio audio fidelity' },
                  { id: 'family-privacy', label: 'Local privacy & simple smart automation' },
                  { id: 'frametimes', label: 'Maximum refresh rate & lowest latency' },
                  { id: 'portability', label: 'Battery endurance & featherweight carry' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuizAnswers(prev => ({ ...prev, q1: opt.id }))}
                    className={`p-3 rounded-lg border text-left font-medium transition-colors ${
                      quizAnswers.q1 === opt.id
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <label className="font-bold text-slate-800 block mb-2 text-sm">
                2. What frustrates you most on typical electronics websites?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'marketing-jargon', label: 'Vague marketing buzzwords with zero raw specs' },
                  { id: 'subscriptions', label: 'Hidden monthly fees for basic features' },
                  { id: 'thermal-ghosting', label: 'Exaggerated response times and overheating' },
                  { id: 'heavy-chargers', label: 'Fake battery runtimes and heavy power bricks' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuizAnswers(prev => ({ ...prev, q2: opt.id }))}
                    className={`p-3 rounded-lg border text-left font-medium transition-colors ${
                      quizAnswers.q2 === opt.id
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <label className="font-bold text-slate-800 block mb-2 text-sm">
                3. What describes your evaluation timeframe?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'specs', label: '2-3 weeks of forum threads & lab charts' },
                  { id: 'peace', label: '1-2 weeks consulting family & reviews' },
                  { id: 'speed', label: 'Fast impulse buy when a benchmark is broken' },
                  { id: 'urgent', label: 'Instant decision for upcoming travel needs' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuizAnswers(prev => ({ ...prev, q3: opt.id }))}
                    className={`p-3 rounded-lg border text-left font-medium transition-colors ${
                      quizAnswers.q3 === opt.id
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleQuizSubmit}
              disabled={!quizAnswers.q1 || !quizAnswers.q2 || !quizAnswers.q3}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
            >
              Analyze My Buyer Persona Match
            </button>

            {quizResult && (
              <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white animate-fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={quizResult.avatarUrl}
                    alt={quizResult.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs text-emerald-400 font-semibold">Your Archetype Match:</div>
                    <div className="text-base font-bold">{quizResult.name} ({quizResult.title})</div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  {quizResult.tagline}
                </p>
                <button
                  onClick={() => {
                    onSelectPersona(quizResult);
                    onApplyLensAndShop(quizResult);
                  }}
                  className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  Activate {quizResult.name.split(' ')[0]}'s Persona Lens & View Storefront →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
