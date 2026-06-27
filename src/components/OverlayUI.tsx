"use client";
import { useDecision } from "@/context/DecisionContext";
import { Maximize, Minimize, Settings2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function OverlayUI() {
  const { 
    boardroomMode, setBoardroomMode, 
    activeColor, activeLogo, brandDirection 
  } = useDecision();
  
  const pathname = usePathname();

  // Do not render OverlayUI on Welcome or Blueprint
  if (pathname === "/" || pathname === "/blueprint") {
    return null;
  }

  const getLogoRationale = () => {
    if (activeLogo === 'monogram') return 'The monogram roots the brand in heritage and exclusivity.';
    if (activeLogo === 'luxury') return 'Modern serif commands higher price points naturally.';
    return 'Minimal geometric attracts the design and architecture crowd.';
  };

  const getColorRationale = () => {
    if (activeColor === 'emerald') return 'Emerald breaks the industrial mold, establishing a premium oasis.';
    if (activeColor === 'coral') return 'Coral fosters high-energy social engagement for creatives.';
    return 'Ocean provides a calm, focused environment for remote workers.';
  };

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-1000 ${boardroomMode ? 'opacity-0' : 'opacity-100'}`}>
      
      <div className="absolute top-8 right-8 pointer-events-auto flex items-center gap-4">
        
        {/* Boardroom Mode Toggle */}
        <button 
          onClick={() => setBoardroomMode(!boardroomMode)}
          className="flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2 rounded-full font-body text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
        >
          {boardroomMode ? <Minimize size={14} /> : <Maximize size={14} />}
          <span>{boardroomMode ? 'Exit' : 'Present'}</span>
        </button>
        
        <button className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/20 flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors shadow-xl">
          <Settings2 size={16} />
        </button>

      </div>

      {/* Global Strategic Rationale Card */}
      <div className="absolute bottom-8 left-8 w-80 bg-[var(--bg-secondary)]/90 backdrop-blur-2xl border border-[var(--text-secondary)]/20 p-6 rounded-2xl pointer-events-auto shadow-2xl">
        <p className="font-body text-[10px] tracking-widest uppercase text-[var(--text-secondary)] mb-4">Strategic Logic</p>
        
        <div className="space-y-4">
           
           <div>
             <span className="font-body text-[8px] uppercase tracking-widest text-[var(--text-secondary)] block mb-1">Color Advantage</span>
             <span className="font-body text-xs text-[var(--text-primary)]">
               {getColorRationale()}
             </span>
           </div>
           
           <div>
             <span className="font-body text-[8px] uppercase tracking-widest text-[var(--text-secondary)] block mb-1">Mark Perception</span>
             <span className="font-body text-xs text-[var(--text-primary)]">
               {getLogoRationale()}
             </span>
           </div>
        </div>
      </div>

    </div>
  );
}
