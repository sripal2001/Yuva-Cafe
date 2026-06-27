"use client";
import { useDecision } from "@/context/DecisionContext";
import IntroScreen from "@/components/IntroScreen";
import BoardroomEngine from "@/components/BoardroomEngine";
import RevealMode from "@/components/views/RevealMode";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const { appState } = useDecision();

  return (
    <main className="bg-[var(--bg-primary)] overflow-hidden h-screen w-screen">
      <AnimatePresence mode="wait">
        
        {appState === 'intro' && (
          <motion.div className="h-full w-full" key="intro" exit={{ opacity: 0, filter: "blur(20px)" }} transition={{ duration: 1 }}>
            <IntroScreen />
          </motion.div>
        )}

        {appState === 'engine' && (
          <motion.div className="h-full w-full" key="engine" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <BoardroomEngine />
          </motion.div>
        )}

        {appState === 'reveal' && (
          <motion.div className="h-full w-full" key="reveal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <RevealMode />
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
}
