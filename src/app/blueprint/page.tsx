"use client";
import { useDecision } from "@/context/DecisionContext";
import YuvaBrandedAsset from "@/components/YuvaBrandedAsset";
import { Download } from "lucide-react";

export default function BlueprintPage() {
  const { brandDirection, activeLogo, activeColor } = useDecision();

  const getPositioningName = () => {
    if (brandDirection === 'tropical-luxury') return "Tropical Luxury";
    if (brandDirection === 'social-club') return "Social Club";
    return "Creative Hub";
  };

  const getTypography = () => {
    if (activeLogo === 'monogram') return "Playfair Display (Serif)";
    if (activeLogo === 'luxury') return "Satoshi (Modern Serif)";
    return "Inter (Geometric Sans)";
  };

  return (
    <div className="min-h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] p-8 md:p-16 transition-colors duration-1000 overflow-y-auto">
      
      <header className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 flex justify-between items-end border-b border-[var(--text-secondary)]/20 pb-8">
        <div>
           <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-4">Final Output</p>
           <h2 className="font-heading text-4xl md:text-6xl text-[var(--text-primary)] font-black tracking-tighter uppercase">The Yuva Blueprint</h2>
        </div>
        <button className="flex items-center gap-2 font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
           <Download size={14} /> Export PDF
        </button>
      </header>

      <div className="grid md:grid-cols-12 gap-8 animate-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
        
        {/* Left Column: Brand DNA */}
        <div className="md:col-span-4 flex flex-col gap-8">
           
           <div className="bg-[var(--bg-secondary)]/50 border border-[var(--text-secondary)]/20 p-8 rounded-3xl">
              <span className="font-body text-[8px] uppercase tracking-widest text-[var(--text-secondary)] block mb-2">Core Positioning</span>
              <h3 className="font-heading text-3xl text-[var(--text-primary)] mb-6">{getPositioningName()}</h3>
              
              <span className="font-body text-[8px] uppercase tracking-widest text-[var(--text-secondary)] block mb-2">Color Atmosphere</span>
              <h3 className="font-heading text-xl text-[var(--accent)] mb-6 capitalize">{activeColor} Palette</h3>

              <span className="font-body text-[8px] uppercase tracking-widest text-[var(--text-secondary)] block mb-2">Typography Strategy</span>
              <h3 className="font-heading text-xl text-[var(--text-primary)] mb-6">{getTypography()}</h3>
           </div>

           <div className="bg-[var(--bg-secondary)]/50 border border-[var(--text-secondary)]/20 p-8 rounded-3xl">
              <span className="font-body text-[8px] uppercase tracking-widest text-[var(--text-secondary)] block mb-4">Brand Statement</span>
              <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                Yuva is Kavuri Hills' definitive <span className="text-[var(--text-primary)]">{getPositioningName().toLowerCase()}</span>. 
                By utilizing a <span className="text-[var(--text-primary)]">{activeColor}</span> atmosphere combined with <span className="text-[var(--text-primary)]">{getTypography()}</span> typography, the space immediately establishes a premium standard that bypasses generic industrial cafe tropes.
              </p>
           </div>

        </div>

        {/* Right Column: Visual Proof */}
        <div className="md:col-span-8 flex flex-col gap-8">
           <div className="w-full h-[50vh] rounded-3xl overflow-hidden shadow-2xl">
              <YuvaBrandedAsset type="storefront" />
           </div>
           
           <div className="grid grid-cols-2 gap-8">
              <div className="w-full h-[30vh] rounded-3xl overflow-hidden shadow-2xl">
                 <YuvaBrandedAsset type="cup" />
              </div>
              <div className="w-full h-[30vh] rounded-3xl overflow-hidden shadow-2xl">
                 <YuvaBrandedAsset type="instagram" />
              </div>
           </div>
        </div>

      </div>

    </div>
  );
}
