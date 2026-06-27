"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";

export default function IntroScreen() {
  const { setAppState } = useDecision();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] relative overflow-hidden">
      <motion.div 
        initial={{ scale: 0.95, filter: "blur(10px)", opacity: 0 }}
        animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="text-center z-10"
      >
        <h1 className="font-heading text-8xl md:text-[12rem] font-black tracking-tighter uppercase text-[var(--text-primary)] leading-none mb-8">
          YUVA
        </h1>
        <p className="font-body text-[var(--text-secondary)] tracking-[0.4em] uppercase text-sm md:text-base font-light mb-16">
          Designing Hyderabad's Next Iconic Cafe
        </p>
        
        <motion.button
          onClick={() => setAppState('engine')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 border border-[var(--text-secondary)]/30 rounded-full font-body text-[var(--text-primary)] uppercase tracking-widest text-xs hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors duration-500"
        >
          Start Building
        </motion.button>
      </motion.div>

      {/* Atmospheric grain/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
}
