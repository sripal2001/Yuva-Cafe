"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import YuvaBrandedAsset from "../YuvaBrandedAsset";

export default function RevealSequence() {
  const { setActiveArenaIndex, setHasCompletedFlow, setBoardroomMode } = useDecision();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Cinematic Sequence Timing
    const t1 = setTimeout(() => setStage(1), 2000); // Fade from black to YUVA
    const t2 = setTimeout(() => setStage(2), 5000); // Fade YUVA, Reveal Grid
    const t3 = setTimeout(() => {
      setHasCompletedFlow(true); // Unlock free roam
      setBoardroomMode(false); // Exit boardroom mode to show summary controls
      setActiveArenaIndex(10); // Go to Executive Summary
    }, 15000); // 10 seconds of glory, then summary

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [setActiveArenaIndex, setHasCompletedFlow, setBoardroomMode]);

  if (stage === 0) {
    return <div className="h-full w-full bg-black" />; // Pure black silence
  }

  if (stage === 1) {
    return (
      <div className="h-full w-full bg-black flex items-center justify-center">
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
      className="h-full w-full bg-[var(--bg-primary)] p-8 flex flex-col justify-center overflow-hidden"
    >
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-full max-h-[800px] w-full max-w-7xl mx-auto">
        
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
    </motion.div>
  );
}
