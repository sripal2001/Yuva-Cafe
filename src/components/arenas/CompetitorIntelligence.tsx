"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { Check, AlertTriangle, Target, Compass } from "lucide-react";

export default function CompetitorIntelligence() {
  const { setActiveArenaIndex, boardroomMode } = useDecision();

  return (
    <div className="h-full w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden">
      
      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 05</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">Market Intelligence</h2>
      </header>

      <div className="flex-1 p-8 pt-32 pb-32">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="col-span-3 bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 rounded-[2rem] p-8 flex items-center justify-between">
               <div>
                 <h3 className="font-heading text-4xl mb-2">Kavuri Hills Market Saturation</h3>
                 <p className="font-body text-[var(--text-secondary)] text-sm">Analysis of 15 premium cafes within a 3km radius.</p>
               </div>
               <div className="text-right">
                 <p className="font-heading text-6xl text-[var(--accent)] font-bold">82%</p>
                 <p className="font-body text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mt-1">Homogenization Rate</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
             
             {/* What Everyone Is Doing */}
             <div className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 rounded-[2rem] p-8 flex flex-col">
               <div className="flex items-center gap-3 text-[var(--text-secondary)] mb-8">
                 <AlertTriangle size={20} />
                 <h4 className="font-body uppercase tracking-[0.2em] text-xs font-bold">What Everyone Is Doing</h4>
               </div>
               <ul className="space-y-6 font-body text-sm font-light text-[var(--text-secondary)]">
                 <li><strong className="text-[var(--text-primary)] block mb-1">Industrial Interiors</strong> Exposed concrete, Edison bulbs, and raw steel are severely overused.</li>
                 <li><strong className="text-[var(--text-primary)] block mb-1">Earthy Palettes</strong> Terracotta, olive green, and beige blend into a singular identity.</li>
                 <li><strong className="text-[var(--text-primary)] block mb-1">Generic Typographic Logos</strong> Basic sans-serif fonts with no distinctive brand mark.</li>
               </ul>
             </div>

             {/* What Nobody Is Doing */}
             <div className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 rounded-[2rem] p-8 flex flex-col">
               <div className="flex items-center gap-3 text-[var(--text-primary)] mb-8">
                 <Compass size={20} />
                 <h4 className="font-body uppercase tracking-[0.2em] text-xs font-bold">What Nobody Is Doing</h4>
               </div>
               <ul className="space-y-6 font-body text-sm font-light text-[var(--text-primary)]/80">
                 <li><strong className="text-[var(--accent)] block mb-1">Premium Escapism</strong> Creating a true destination environment rather than a utilitarian workspace.</li>
                 <li><strong className="text-[var(--accent)] block mb-1">Architectural Branding</strong> Using the physical space as the primary canvas for the brand identity.</li>
                 <li><strong className="text-[var(--accent)] block mb-1">Curated Community</strong> Hosting high-value, niche networking events specifically for founders.</li>
               </ul>
             </div>

             {/* The White Space */}
             <div className="bg-[var(--accent)] text-[var(--bg-primary)] rounded-[2rem] p-8 flex flex-col shadow-2xl">
               <div className="flex items-center gap-3 mb-8">
                 <Target size={20} />
                 <h4 className="font-body uppercase tracking-[0.2em] text-xs font-bold">The Yuva White Space</h4>
               </div>
               <div className="flex-1 flex flex-col justify-center">
                 <h2 className="font-heading text-4xl leading-tight mb-4 font-bold">
                   Occupy the premium, sophisticated gap ignored by industrial clones.
                 </h2>
                 <p className="font-body text-sm font-medium opacity-80 leading-relaxed">
                   By choosing a highly distinct, luxury-leaning aesthetic, Yuva instantly bypasses the mid-market price war and commands a premium before the customer even enters the door.
                 </p>
               </div>
             </div>

          </div>

        </div>
      </div>

      {!boardroomMode && (
        <div className="absolute bottom-8 right-16 z-20">
          <button 
            onClick={() => setActiveArenaIndex(7)}
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
          >
            <Check size={16} /> Continue to Community
          </button>
        </div>
      )}

    </div>
  );
}
