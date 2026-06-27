"use client";
import { useDecision } from "@/context/DecisionContext";
import { Check, Calendar, Users, Mic } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CommunityPage() {
  const { boardroomMode } = useDecision();
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden animate-in fade-in duration-700">
      
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent pointer-events-none opacity-50" />

      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 06</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">Community Programming</h2>
      </header>

      <div className="flex-1 p-8 pt-32 pb-32 relative z-10 flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 animate-in zoom-in-95 duration-700">
          
          <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md rounded-[2rem] border border-[var(--text-secondary)]/10 p-12 text-center group hover:bg-[var(--text-primary)] transition-colors duration-500 shadow-2xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-[var(--bg-primary)] border border-[var(--text-secondary)]/20 flex items-center justify-center mb-8 group-hover:border-[var(--bg-primary)]/50 transition-colors">
               <Calendar size={32} className="text-[var(--text-primary)] group-hover:text-[var(--bg-primary)]" />
            </div>
            <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-[var(--bg-primary)] transition-colors">Founder Fridays</h3>
            <p className="font-body text-sm font-light text-[var(--text-secondary)] group-hover:text-[var(--bg-primary)]/80 transition-colors">
              Curated evening sessions strictly for tech founders and creatives. Transforms the cafe into a high-value networking hub post 6 PM.
            </p>
          </div>

          <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md rounded-[2rem] border border-[var(--text-secondary)]/10 p-12 text-center group hover:bg-[var(--text-primary)] transition-colors duration-500 shadow-2xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-[var(--bg-primary)] border border-[var(--text-secondary)]/20 flex items-center justify-center mb-8 group-hover:border-[var(--bg-primary)]/50 transition-colors">
               <Mic size={32} className="text-[var(--text-primary)] group-hover:text-[var(--bg-primary)]" />
            </div>
            <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-[var(--bg-primary)] transition-colors">Industry Masterclass</h3>
            <p className="font-body text-sm font-light text-[var(--text-secondary)] group-hover:text-[var(--bg-primary)]/80 transition-colors">
              Bi-weekly talks featuring industry leaders. Ticketed events that create an additional revenue stream while elevating brand prestige.
            </p>
          </div>

          <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md rounded-[2rem] border border-[var(--text-secondary)]/10 p-12 text-center group hover:bg-[var(--text-primary)] transition-colors duration-500 shadow-2xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-[var(--bg-primary)] border border-[var(--text-secondary)]/20 flex items-center justify-center mb-8 group-hover:border-[var(--bg-primary)]/50 transition-colors">
               <Users size={32} className="text-[var(--text-primary)] group-hover:text-[var(--bg-primary)]" />
            </div>
            <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-[var(--bg-primary)] transition-colors">Tasting Collectives</h3>
            <p className="font-body text-sm font-light text-[var(--text-secondary)] group-hover:text-[var(--bg-primary)]/80 transition-colors">
              Exclusive weekend cupping sessions for coffee aficionados. Builds deep loyalty and pushes the narrative of artisanal excellence.
            </p>
          </div>

        </div>
      </div>

      <div className={`absolute bottom-8 right-16 z-20 transition-transform duration-500 ${boardroomMode ? 'translate-y-[200%]' : 'translate-y-0'}`}>
        <button 
          onClick={() => router.push("/ecosystem")}
          className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
        >
          <Check size={16} /> Continue to Ecosystem
        </button>
      </div>

      {boardroomMode && (
        <button onClick={() => router.push("/ecosystem")} className="absolute inset-0 z-0 cursor-pointer" aria-label="Advance Presentation" />
      )}
    </div>
  );
}
