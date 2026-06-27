"use client";
import { useDecision } from "@/context/DecisionContext";
import ControlDock from "./ControlDock";
import RealWorldMode from "./views/RealWorldMode";
import CompetitorIntelligence from "./views/CompetitorIntelligence";
import { motion, AnimatePresence } from "framer-motion";

export default function BoardroomEngine() {
  const { viewMode } = useDecision();

  return (
    <div className="h-full w-full overflow-hidden bg-[var(--bg-primary)] relative">
      
      {/* The 80% Canvas rendering the Active View */}
      <div className="h-full w-full relative z-10">
        <AnimatePresence mode="wait">
          {viewMode === 'realworld' && (
            <motion.div 
              key="realworld"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="h-full w-full"
            >
              <RealWorldMode />
            </motion.div>
          )}
          
          {viewMode === 'competitors' && (
            <motion.div 
              key="competitors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="h-full w-full"
            >
              <CompetitorIntelligence />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* The Apple-style Control Dock */}
      <ControlDock />
      
    </div>
  );
}
