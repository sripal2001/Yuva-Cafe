"use client";
import { useDecision, ColorOption } from "@/context/DecisionContext";
import { motion, AnimatePresence } from "framer-motion";
import YuvaBrandedAsset from "../YuvaBrandedAsset";
import { Check } from "lucide-react";

export default function ColorArena() {
  const { activeColor, setActiveColor, setActiveArenaIndex, boardroomMode } = useDecision();

  const handleSelect = (color: ColorOption) => {
    if (boardroomMode) return;
    setActiveColor(color);
  };

  const confirmColor = () => {
    setActiveArenaIndex(4); // Next Arena
  };

  const palettes = [
    { id: 'emerald', name: 'Emerald Tropical', desc: 'Lush, Organic, Premium' },
    { id: 'coral', name: 'Coral Sunset', desc: 'Warm, Social, Vibrant' },
    { id: 'ocean', name: 'Ocean Retreat', desc: 'Calm, Focused, Modern' }
  ];

  return (
    <div className="h-full w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden transition-colors duration-1000">
      
      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 02</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">Atmosphere</h2>
      </header>

      {/* Selector Console (Hidden in Boardroom Mode) */}
      {!boardroomMode && (
        <div className="absolute top-8 right-16 z-20 flex gap-4">
          {palettes.map(p => (
            <button 
              key={p.id}
              onClick={() => handleSelect(p.id as ColorOption)}
              className={`px-6 py-3 rounded-full font-body text-xs uppercase tracking-widest transition-all ${activeColor === p.id ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold' : 'border border-[var(--text-secondary)]/30 text-[var(--text-secondary)] hover:border-[var(--text-primary)]'}`}
            >
              {p.name}
            </button>
          ))}
        </div>
      )}

      {/* The Environment Grid */}
      <div className="flex-1 p-8 pt-32 pb-32">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          
          <div className="flex flex-col gap-4 md:gap-8 h-full">
             <YuvaBrandedAsset type="cup" />
             <div className="flex-1 bg-[var(--bg-secondary)] rounded-[2rem] border border-[var(--text-secondary)]/10 flex items-center justify-center p-8">
               <p className="font-heading text-2xl text-[var(--accent)] text-center">Packaging System</p>
             </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-8 h-full col-span-2">
             <YuvaBrandedAsset type="storefront" />
             <div className="grid grid-cols-2 gap-4 md:gap-8 flex-1">
                <div className="bg-[var(--bg-secondary)] rounded-[2rem] border border-[var(--text-secondary)]/10 p-8">
                   <p className="font-body text-[var(--text-secondary)] text-sm uppercase tracking-widest mb-2">Selected Palette</p>
                   <h3 className="font-heading text-4xl text-[var(--text-primary)]">{palettes.find(p => p.id === activeColor)?.name}</h3>
                   <p className="font-body text-[var(--accent)] mt-4">{palettes.find(p => p.id === activeColor)?.desc}</p>
                </div>
                <YuvaBrandedAsset type="menu" />
             </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-8 h-full">
             <div className="flex-1 bg-[var(--bg-secondary)] rounded-[2rem] border border-[var(--text-secondary)]/10 flex items-center justify-center p-8">
               <p className="font-heading text-2xl text-[var(--accent)] text-center">Digital Presense</p>
             </div>
             <YuvaBrandedAsset type="instagram" />
          </div>

        </div>
      </div>

      {/* Confirmation Console */}
      {!boardroomMode && (
        <div className="absolute bottom-8 right-16 z-20">
          <button 
            onClick={confirmColor}
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
          >
            <Check size={16} /> Confirm Atmosphere
          </button>
        </div>
      )}

    </div>
  );
}
