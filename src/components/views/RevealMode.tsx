"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RevealMode() {
  const { activeLogo, activeColor, activeTypo, votes } = useDecision();
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    // Cinematic Sequencing
    const t1 = setTimeout(() => setPhase(1), 3000); // Intro text fades out, Logo fades in
    const t2 = setTimeout(() => setPhase(2), 6000); // Logo moves, environment fades in
    const t3 = setTimeout(() => setPhase(3), 10000); // Full Executive Summary appears
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const getLogo = () => {
    switch (activeLogo) {
      case 'monogram': return "YV";
      case 'luxury': return "Yuva";
      case 'geometric': return "Y / V / A";
    }
  };

  return (
    <div className="h-full w-full bg-[#000000] overflow-y-auto overflow-x-hidden relative flex flex-col items-center justify-center text-white">
      
      {/* PHASE 0: Fade to black intro */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 0 ? 1 : 0 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
      >
        <h2 className="font-heading text-4xl tracking-widest uppercase font-light">Locking Configuration...</h2>
      </motion.div>

      {/* PHASE 1: The Logo Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
        animate={
          phase === 1 ? { opacity: 1, scale: 1, filter: "blur(0px)", y: 0 } :
          phase >= 2 ? { opacity: 1, scale: 0.5, filter: "blur(0px)", y: -300 } : {}
        }
        transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute z-40 text-center"
      >
        <h1 className="font-heading text-8xl md:text-[10rem] font-black tracking-tighter text-[var(--text-primary)]">
          {getLogo()}
        </h1>
        <p className="font-body text-[var(--accent)] tracking-[0.5em] mt-4 uppercase">The Vision Realized</p>
      </motion.div>

      {/* PHASE 2: The Environment Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 2 ? 1 : phase >= 3 ? 0.3 : 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-30"
      >
        <Image src="/tropical_shadows.png" alt="Vision" fill className="object-cover mix-blend-luminosity opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      {/* PHASE 3: The Executive Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: phase === 3 ? 1 : 0, y: phase === 3 ? 0 : 50 }}
        transition={{ duration: 1.5 }}
        className={`absolute inset-0 z-50 p-8 md:p-24 bg-[var(--bg-primary)] ${phase === 3 ? 'pointer-events-auto overflow-y-auto' : 'pointer-events-none'}`}
      >
        <div className="max-w-5xl mx-auto pb-40">
          <p className="font-body text-[var(--accent)] text-sm tracking-widest uppercase mb-4 font-bold">Executive Summary</p>
          <h2 className="font-heading text-6xl text-[var(--text-primary)] font-bold mb-16">Yuva Cafe Strategy Protocol</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[var(--bg-secondary)] p-8 rounded-3xl border border-[var(--text-secondary)]/20">
              <h3 className="font-heading text-2xl text-[var(--text-primary)] mb-6 border-b border-[var(--text-secondary)]/10 pb-4">Selected Identity</h3>
              <ul className="space-y-4 font-body text-[var(--text-primary)]">
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Logo System</span> <span className="uppercase font-bold">{activeLogo}</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Color Palette</span> <span className="uppercase font-bold">{activeColor}</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Typography</span> <span className="uppercase font-bold">{activeTypo}</span></li>
              </ul>
            </div>

            <div className="bg-[var(--bg-secondary)] p-8 rounded-3xl border border-[var(--text-secondary)]/20">
              <h3 className="font-heading text-2xl text-[var(--text-primary)] mb-6 border-b border-[var(--text-secondary)]/10 pb-4">Differentiation Strategy</h3>
              <p className="font-body text-[var(--text-secondary)] text-sm leading-relaxed">
                By locking the <strong>{activeColor}</strong> palette with <strong>{activeTypo}</strong> typography, Yuva Cafe completely bypasses the saturated "industrial cafe" look of Kavuri Hills. We are entering the market positioned as a luxury hospitality destination, allowing for higher price points and stronger community retention.
              </p>
            </div>
          </div>

          <h3 className="font-heading text-4xl text-[var(--text-primary)] mb-8">The Consensus Board</h3>
          <p className="font-body text-[var(--text-secondary)] mb-8">Data collected from "The Room Test" during this meeting.</p>
          
          <div className="bg-[var(--bg-secondary)] p-8 rounded-3xl border border-[var(--text-secondary)]/20 text-center flex flex-col items-center justify-center min-h-[200px]">
             <p className="font-heading text-[var(--accent)] text-2xl mb-2">Final Alignment Achieved.</p>
             <p className="font-body text-[var(--text-secondary)] text-sm">The stakeholders have successfully engineered the future of Yuva Cafe.</p>
          </div>
          
          <div className="mt-24 text-center">
             <h1 className="font-heading text-[6rem] text-[var(--text-primary)] font-black uppercase tracking-tighter">WHEN CAN WE START?</h1>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
