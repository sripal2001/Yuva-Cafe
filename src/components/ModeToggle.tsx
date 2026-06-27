"use client";
import React from "react";
import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { Presentation, Coffee } from "lucide-react";

export default function ModeToggle() {
  const { isPitchMode, togglePitchMode } = useMode();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePitchMode}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl font-semibold backdrop-blur-md transition-colors ${
          isPitchMode
            ? "bg-amber-500/90 text-white border border-amber-400"
            : "bg-zinc-900/90 text-zinc-100 border border-zinc-700"
        }`}
      >
        {isPitchMode ? <Presentation size={20} /> : <Coffee size={20} />}
        <span>{isPitchMode ? "Pitch Mode Active" : "User Mode"}</span>
      </motion.button>
    </div>
  );
}
