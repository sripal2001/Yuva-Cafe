"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion, AnimatePresence } from "framer-motion";
import { Presentation, X } from "lucide-react";

export default function OverlayUI() {
  const { 
    boardroomMode, setBoardroomMode, 
    brandDirection, activeColor, activeTypo 
  } = useDecision();

  const getBusinessValue = () => {
    switch (brandDirection) {
      case 'tropical-luxury':
        return "Tropical Luxury bypasses the saturated industrial market in Kavuri Hills, demanding higher price points.";
      case 'urban-tropical':
        return "Urban Tropical immediately captures the remote-work founder demographic, maximizing weekday dwell time.";
      case 'sunset-social':
        return "Sunset Social Club drives high-margin evening operations, converting a cafe into a night-time creator hub.";
      default:
        return "";
    }
  };

  return (
    <>
      {/* Boardroom Mode Toggle (Always visible unless in Boardroom Mode, then it becomes a subtle exit button) */}
      <div className="fixed top-8 right-8 z-50">
        {!boardroomMode ? (
          <button 
            onClick={() => setBoardroomMode(true)}
            className="flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-full font-body text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            <Presentation size={16} /> Present
          </button>
        ) : (
          <button 
            onClick={() => setBoardroomMode(false)}
            className="flex items-center gap-2 bg-[var(--bg-secondary)]/50 backdrop-blur-md text-[var(--text-primary)]/50 hover:text-[var(--text-primary)] px-4 py-2 rounded-full font-body text-xs uppercase tracking-widest transition-colors border border-[var(--text-secondary)]/20"
          >
            <X size={14} /> Exit
          </button>
        )}
      </div>

      {/* "Why This Wins" Card (Hidden in Boardroom Mode) */}
      <AnimatePresence>
        {!boardroomMode && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-40 max-w-xs bg-[var(--bg-secondary)]/80 backdrop-blur-2xl border border-[var(--accent)]/30 p-6 rounded-2xl shadow-[0_10px_40px_rgba(var(--accent-rgb),0.15)]"
          >
            <p className="font-body text-[var(--accent)] text-[10px] uppercase tracking-[0.2em] font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Why This Wins
            </p>
            <p className="font-body text-[var(--text-primary)] text-xs leading-relaxed font-light">
              {getBusinessValue()}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
