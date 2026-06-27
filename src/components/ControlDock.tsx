"use client";
import { useDecision, LogoOption, ColorOption, TypoOption, ViewMode } from "@/context/DecisionContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LayoutGrid, Palette, Type, Navigation, CheckCircle2, X } from "lucide-react";

export default function ControlDock() {
  const { 
    activeLogo, setActiveLogo, 
    activeColor, setActiveColor, 
    activeTypo, setActiveTypo,
    viewMode, setViewMode,
    setAppState
  } = useDecision();

  const [expandedSection, setExpandedSection] = useState<'logo' | 'color' | 'typo' | 'views' | null>(null);

  const colors: { id: ColorOption; name: string; hex: string }[] = [
    { id: 'emerald', name: 'Emerald & Sand', hex: '#0F1C16' },
    { id: 'volcanic', name: 'Volcanic Black', hex: '#0C0C0C' },
    { id: 'ocean', name: 'Ocean Blue', hex: '#0B192C' },
    { id: 'terracotta', name: 'Warm Terracotta', hex: '#3B241C' },
  ];

  const logos: { id: LogoOption; name: string }[] = [
    { id: 'monogram', name: 'The Monogram' },
    { id: 'luxury', name: 'Luxury Serif' },
    { id: 'geometric', name: 'Minimal Geometric' },
  ];

  const typos: { id: TypoOption; name: string }[] = [
    { id: 'serif', name: 'Playfair Display' },
    { id: 'sans', name: 'Inter Minimal' },
    { id: 'editorial', name: 'Lora Editorial' },
  ];

  const views: { id: ViewMode; name: string }[] = [
    { id: 'realworld', name: 'Real World Mode' },
    { id: 'competitors', name: 'Kavuri Hills Intelligence' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      
      {/* Expanded Popover */}
      <AnimatePresence>
        {expandedSection && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-4 bg-[var(--bg-secondary)]/80 backdrop-blur-2xl border border-[var(--text-secondary)]/20 p-2 rounded-2xl flex flex-wrap justify-center gap-2 shadow-2xl relative max-w-[90vw]"
          >
            <button 
              onClick={() => setExpandedSection(null)}
              className="absolute -top-3 -right-3 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full p-1 shadow-lg"
            >
              <X size={14} />
            </button>

            {expandedSection === 'color' && colors.map(c => (
              <button 
                key={c.id} 
                onClick={() => setActiveColor(c.id)}
                className={`px-6 py-4 rounded-xl flex flex-col items-center gap-2 transition-all ${activeColor === c.id ? 'bg-[var(--text-primary)]/10' : 'hover:bg-[var(--text-primary)]/5'}`}
              >
                <div className="w-8 h-8 rounded-full border border-white/20 shadow-inner" style={{ backgroundColor: c.hex }} />
                <span className="font-body text-xs text-[var(--text-primary)] whitespace-nowrap">{c.name}</span>
              </button>
            ))}

            {expandedSection === 'logo' && logos.map(l => (
              <button 
                key={l.id} 
                onClick={() => setActiveLogo(l.id)}
                className={`px-6 py-4 rounded-xl font-heading text-lg transition-all ${activeLogo === l.id ? 'bg-[var(--text-primary)]/10 text-[var(--accent)]' : 'text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5'}`}
              >
                {l.name}
              </button>
            ))}

            {expandedSection === 'typo' && typos.map(t => (
              <button 
                key={t.id} 
                onClick={() => setActiveTypo(t.id)}
                className={`px-6 py-4 rounded-xl font-body text-sm transition-all ${activeTypo === t.id ? 'bg-[var(--text-primary)]/10 text-[var(--accent)]' : 'text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5'}`}
              >
                {t.name}
              </button>
            ))}

            {expandedSection === 'views' && views.map(v => (
              <button 
                key={v.id} 
                onClick={() => setViewMode(v.id)}
                className={`px-6 py-4 rounded-xl font-body text-sm uppercase tracking-widest transition-all ${viewMode === v.id ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold' : 'text-[var(--text-primary)] hover:bg-[var(--text-primary)]/10'}`}
              >
                {v.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Dock */}
      <div className="bg-[var(--bg-secondary)]/60 backdrop-blur-3xl border border-[var(--text-secondary)]/20 p-2 rounded-full flex items-center gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <DockButton icon={LayoutGrid} label="Logo" onClick={() => setExpandedSection('logo')} active={expandedSection === 'logo'} />
        <DockButton icon={Palette} label="Color" onClick={() => setExpandedSection('color')} active={expandedSection === 'color'} />
        <DockButton icon={Type} label="Typography" onClick={() => setExpandedSection('typo')} active={expandedSection === 'typo'} />
        
        <div className="w-[1px] h-8 bg-[var(--text-secondary)]/30 mx-2" />
        
        <DockButton icon={Navigation} label="Views" onClick={() => setExpandedSection('views')} active={expandedSection === 'views'} />
        
        <div className="w-[1px] h-8 bg-[var(--text-secondary)]/30 mx-2" />
        
        <button 
          onClick={() => setAppState('reveal')}
          className="ml-2 bg-[var(--accent)] text-[var(--bg-primary)] px-6 py-3 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <CheckCircle2 size={16} /> Finish
        </button>
      </div>
    </div>
  );
}

function DockButton({ icon: Icon, label, onClick, active }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${active ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]' : 'text-[var(--text-primary)] hover:bg-[var(--text-primary)]/10'}`}
    >
      <Icon size={18} strokeWidth={2} />
      <span className="font-body text-xs font-medium">{label}</span>
    </button>
  );
}
