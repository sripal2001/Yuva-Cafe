"use client";
import { motion } from "framer-motion";
import { useDecision } from "@/context/DecisionContext";

export default function IntroScreen() {
  const { setActiveArenaIndex } = useDecision();

  return (
    <div className="h-full w-full bg-[#000000] text-[#FFFFFF] flex flex-col justify-end p-8 md:p-16 relative overflow-hidden cursor-pointer" onClick={() => setActiveArenaIndex(1)}>
      
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none opacity-50" />

      {/* Massive Typography */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="relative z-10"
      >
        <h1 className="font-heading text-super-massive font-black tracking-tighter uppercase leading-none">
          YUVA
        </h1>
      </motion.div>

      {/* Subtle indicator to continue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-1/2 right-16 -translate-y-1/2 flex flex-col items-center gap-4 text-white/30 hidden md:flex"
      >
        <span className="font-body text-[10px] tracking-[0.5em] uppercase" style={{ writingMode: 'vertical-rl' }}>Begin Protocol</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </div>
  );
}
