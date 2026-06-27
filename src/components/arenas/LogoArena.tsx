"use client";
import { useDecision, LogoOption } from "@/context/DecisionContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function LogoArena() {
  const { setActiveLogo, setActiveArenaIndex, addVote, boardroomMode, activeLogo } = useDecision();
  
  // We'll show one massive logo at a time, allowing them to swipe/click through, then "Confirm"
  const logos: { id: LogoOption, component: any, name: string }[] = [
    { id: 'monogram', name: 'The Monogram', component: <span className="font-heading text-[15rem] font-bold tracking-tighter leading-none">YV</span> },
    { id: 'luxury', name: 'Luxury Serif', component: <span className="font-heading text-[12rem] font-black uppercase tracking-widest leading-none">Yuva</span> },
    { id: 'geometric', name: 'Minimal Geometric', component: <span className="font-heading text-[10rem] font-light uppercase tracking-[0.3em] leading-none whitespace-nowrap">Y / V / A</span> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % logos.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);

  const confirmLogo = () => {
    setActiveLogo(logos[currentIndex].id);
    setActiveArenaIndex(3); // Next Arena
  };

  const handleVote = (vote: any) => {
    addVote(`logo_${logos[currentIndex].id}`, vote);
  };

  return (
    <div className="h-full w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden">
      
      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 01</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">Brand Mark</h2>
      </header>

      {/* Massive Artwork Display */}
      <div className="flex-1 flex items-center justify-center relative">
        {!boardroomMode && (
          <button onClick={handlePrev} className="absolute left-16 z-20 p-4 hover:bg-[var(--text-primary)]/10 rounded-full transition-colors">
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-center"
          >
            <div className="text-[var(--text-primary)] mb-8">
              {logos[currentIndex].component}
            </div>
            {!boardroomMode && (
               <p className="font-body text-[var(--text-secondary)] tracking-[0.3em] uppercase text-sm">{logos[currentIndex].name}</p>
            )}
          </motion.div>
        </AnimatePresence>

        {!boardroomMode && (
          <button onClick={handleNext} className="absolute right-16 z-20 p-4 hover:bg-[var(--text-primary)]/10 rounded-full transition-colors">
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        )}
      </div>

      {/* Decision Console */}
      {!boardroomMode && (
        <div className="h-32 border-t border-[var(--text-secondary)]/10 flex items-center justify-between px-16 bg-[var(--bg-secondary)]">
          
          <div className="flex gap-2">
            <VoteBtn emoji="❤️" label="Love" onClick={() => handleVote('love')} />
            <VoteBtn emoji="👍" label="Like" onClick={() => handleVote('like')} />
            <VoteBtn emoji="🧐" label="Maybe" onClick={() => handleVote('maybe')} />
            <VoteBtn emoji="❌" label="Reject" onClick={() => handleVote('reject')} />
            <div className="w-[1px] h-8 bg-[var(--text-secondary)]/30 mx-4" />
            <VoteBtn emoji="⭐" label="Shortlist" onClick={() => handleVote('shortlist')} />
          </div>

          <button 
            onClick={confirmLogo}
            className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Check size={16} /> Confirm Selection
          </button>

        </div>
      )}

    </div>
  );
}

function VoteBtn({ emoji, label, onClick }: any) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[var(--text-primary)]/5 transition-colors">
      <span className="text-xl">{emoji}</span>
      <span className="font-body text-[8px] uppercase tracking-widest text-[var(--text-secondary)]">{label}</span>
    </button>
  );
}
