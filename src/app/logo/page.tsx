"use client";
import { useDecision, LogoOption } from "@/context/DecisionContext";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoPage() {
  const { setActiveLogo, addVote, boardroomMode, activeLogo } = useDecision();
  const router = useRouter();
  
  const logos: { id: LogoOption, component: any, name: string }[] = [
    { id: 'monogram', name: 'The Monogram', component: <span className="font-heading text-[15rem] font-bold tracking-tighter leading-none drop-shadow-2xl">YV</span> },
    { id: 'luxury', name: 'Luxury Serif', component: <span className="font-heading text-[12rem] font-black uppercase tracking-widest leading-none drop-shadow-2xl">Yuva</span> },
    { id: 'geometric', name: 'Minimal Geometric', component: <span className="font-heading text-[10rem] font-light uppercase tracking-[0.3em] leading-none whitespace-nowrap drop-shadow-2xl">Y / V / A</span> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % logos.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);

  const confirmLogo = () => {
    setActiveLogo(logos[currentIndex].id);
    router.push("/color");
  };

  const handleVote = (vote: any) => addVote(`logo_${logos[currentIndex].id}`, vote);

  return (
    <div className="h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden animate-in fade-in duration-700">
      
      {/* Visual Depth Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 01</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">Brand Mark</h2>
      </header>

      <div className="flex-1 flex items-center justify-center relative z-10">
        {!boardroomMode && (
          <button onClick={handlePrev} className="absolute left-16 z-20 p-4 hover:bg-[var(--text-primary)]/10 rounded-full transition-colors">
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
        )}

        <div className="text-center animate-in zoom-in-95 duration-500">
           <div className="text-[var(--text-primary)] mb-8">
             {logos[currentIndex].component}
           </div>
           {!boardroomMode && (
              <p className="font-body text-[var(--text-secondary)] tracking-[0.3em] uppercase text-sm">{logos[currentIndex].name}</p>
           )}
        </div>

        {!boardroomMode && (
          <button onClick={handleNext} className="absolute right-16 z-20 p-4 hover:bg-[var(--text-primary)]/10 rounded-full transition-colors">
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        )}
      </div>

      {/* Decision Console */}
      <div className={`h-32 border-t border-[var(--text-secondary)]/10 flex items-center justify-between px-16 bg-[var(--bg-secondary)]/80 backdrop-blur-xl absolute bottom-0 w-full transition-transform duration-500 ${boardroomMode ? 'translate-y-full' : 'translate-y-0'}`}>
        
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
      
      {/* Invisible Global Advance for Boardroom Mode */}
      {boardroomMode && (
        <button onClick={confirmLogo} className="absolute inset-0 z-0 cursor-pointer" aria-label="Advance Presentation" />
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
