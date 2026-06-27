"use client";
import React from "react";
import { useMode } from "@/context/ModeContext";
import { motion, AnimatePresence } from "framer-motion";

interface PitchTooltipProps {
  children: React.ReactNode;
  title: string;
  description: string;
  position?: "top" | "bottom" | "left" | "right";
}

export default function PitchTooltip({ children, title, description, position = "right" }: PitchTooltipProps) {
  const { isPitchMode } = useMode();

  const getPositionClasses = () => {
    switch (position) {
      case "right": return "top-1/2 -translate-y-1/2 left-full ml-4";
      case "left": return "top-1/2 -translate-y-1/2 right-full mr-4";
      case "top": return "bottom-full left-1/2 -translate-x-1/2 mb-4";
      case "bottom": return "top-full left-1/2 -translate-x-1/2 mt-4";
      default: return "";
    }
  };

  return (
    <div className="relative group block w-full h-full">
      {/* The wrapped component */}
      <div className={`transition-all duration-300 w-full h-full ${isPitchMode ? "ring-2 ring-amber-500 ring-offset-4 ring-offset-zinc-950 rounded-lg" : ""}`}>
        {children}
      </div>

      {/* The Tooltip (only shows in Pitch Mode) */}
      <AnimatePresence>
        {isPitchMode && (
          <motion.div
            initial={{ opacity: 0, x: position === 'right' ? -10 : position === 'left' ? 10 : 0, y: position === 'bottom' ? -10 : position === 'top' ? 10 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`absolute ${getPositionClasses()} z-40 w-64 p-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-xl text-white pointer-events-none hidden md:block`}
          >
            <div className={`absolute w-3 h-3 bg-amber-500 transform rotate-45 
              ${position === 'right' ? '-left-1.5 top-1/2 -translate-y-1/2' : ''}
              ${position === 'left' ? '-right-1.5 top-1/2 -translate-y-1/2' : ''}
              ${position === 'top' ? '-bottom-1.5 left-1/2 -translate-x-1/2' : ''}
              ${position === 'bottom' ? '-top-1.5 left-1/2 -translate-x-1/2' : ''}
            `}></div>
            <h4 className="font-bold text-sm mb-1">{title}</h4>
            <p className="text-xs text-amber-50 leading-relaxed">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
