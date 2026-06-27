"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function CommunityMode() {
  const { setActiveArenaIndex, boardroomMode } = useDecision();

  const events = [
    { title: "Coffee & Code", desc: "Weekly meetup for Kavuri Hills tech founders", tag: "Tech" },
    { title: "Creator Nights", desc: "Networking and collaboration for designers and artists", tag: "Culture" },
    { title: "Roast Masterclass", desc: "Weekend workshops on V60 pouring and bean origins", tag: "Coffee" },
  ];

  return (
    <div className="h-full w-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-hidden">
      
      <header className="absolute top-8 left-16 z-20">
        <p className="font-body text-[var(--text-secondary)] text-[10px] tracking-[0.3em] uppercase mb-2">Arena 06</p>
        <h2 className="font-heading text-2xl font-black uppercase tracking-widest">A Destination</h2>
      </header>

      <div className="flex-1 flex items-center justify-center p-16 pt-32">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           
           <div>
             <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
               More than a cafe.
               <br />
               <span className="text-[var(--accent)]">A cultural anchor.</span>
             </h1>
             <p className="font-body text-[var(--text-secondary)] text-lg font-light leading-relaxed mb-12 max-w-xl">
               Yuva is designed to be the epicenter of networking and culture in Kavuri Hills. By activating the space in the evenings with curated events, we transform empty tables into a high-margin community engine.
             </p>

             <div className="space-y-6">
                {events.map((e, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    key={i} 
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[var(--bg-secondary)] transition-colors border border-transparent hover:border-[var(--text-secondary)]/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] text-xs font-bold font-body uppercase tracking-wider shrink-0">
                      {e.tag}
                    </div>
                    <div>
                      <h4 className="font-heading text-xl mb-1">{e.title}</h4>
                      <p className="font-body text-sm text-[var(--text-secondary)] font-light">{e.desc}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
           </div>

           <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-[var(--text-secondary)]/20">
              <Image src="/blank_storefront.png" alt="Community Event" fill className="object-cover mix-blend-luminosity opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                 <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-xl p-8 rounded-[2rem] border border-[var(--text-secondary)]/30">
                    <p className="font-body text-[var(--accent)] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Event
                    </p>
                    <h3 className="font-heading text-3xl mb-2">Startup Pitch Night</h3>
                    <p className="font-body text-[var(--text-secondary)] text-sm">Capacity: 45 / 50 • Kavuri Hills</p>
                 </div>
              </div>
           </div>

        </div>
      </div>

      {!boardroomMode && (
        <div className="absolute bottom-8 right-16 z-20">
          <button 
            onClick={() => setActiveArenaIndex(8)}
            className="bg-[var(--accent)] text-[var(--bg-primary)] px-12 py-4 rounded-full font-body text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
          >
            <Check size={16} /> Continue to Ecosystem
          </button>
        </div>
      )}

    </div>
  );
}
