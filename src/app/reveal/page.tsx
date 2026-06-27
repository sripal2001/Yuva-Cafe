"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import YuvaBrandedAsset from "@/components/YuvaBrandedAsset";
import { useRouter } from "next/navigation";

export default function RevealPage() {
  const { setHasCompletedFlow, setBoardroomMode, activeColor } = useDecision();
  const [stage, setStage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Cinematic Sequence Timing
    const t1 = setTimeout(() => setStage(1), 2000); // Fade from black to YUVA
    const t2 = setTimeout(() => setStage(2), 5000); // Fade YUVA, Reveal Grid
    
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const completePresentation = () => {
    setHasCompletedFlow(true);
    setBoardroomMode(false);
    router.push("/report");
  };

  if (stage === 0) {
    return <div className="h-screen w-screen bg-black" />; // Pure black silence
  }

  if (stage === 1) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
          className="font-heading text-super-massive font-black tracking-tighter uppercase text-white"
        >
          YUVA
        </motion.h1>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
      className="h-screen w-screen bg-[var(--bg-primary)] p-8 md:p-16 flex flex-col justify-center overflow-hidden cursor-pointer"
      onClick={completePresentation} // Click to end presentation and view report
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="grid grid-cols-4 grid-rows-2 gap-4 md:gap-8 h-full max-h-[800px] w-full max-w-7xl mx-auto relative z-10">
        
        <div className="col-span-2 row-span-2 h-full rounded-[2rem] overflow-hidden shadow-2xl">
           <YuvaBrandedAsset type="storefront" />
        </div>
        
        <div className="col-span-1 row-span-1 h-full rounded-[2rem] overflow-hidden shadow-2xl">
           <YuvaBrandedAsset type="cup" />
        </div>

        <div className="col-span-1 row-span-2 h-full rounded-[2rem] overflow-hidden shadow-2xl">
           <YuvaBrandedAsset type="instagram" />
        </div>

        <div className="col-span-1 row-span-1 h-full rounded-[2rem] overflow-hidden shadow-2xl">
           <YuvaBrandedAsset type="menu" />
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)] font-body text-xs uppercase tracking-widest animate-pulse">
        Click anywhere to generate Executive Summary
      </div>
    </motion.div>
  );
}
