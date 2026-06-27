"use client";
import { useDecision } from "@/context/DecisionContext";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import DirectionArena from "@/components/arenas/DirectionArena";
import LogoArena from "@/components/arenas/LogoArena";
import ColorArena from "@/components/arenas/ColorArena";
import TypographyArena from "@/components/arenas/TypographyArena";
import ExperienceYuvaMode from "@/components/arenas/ExperienceYuvaMode";
import CompetitorIntelligence from "@/components/arenas/CompetitorIntelligence";
import CommunityMode from "@/components/arenas/CommunityMode";
import FutureEcosystemMode from "@/components/arenas/FutureEcosystemMode";
import RevealSequence from "@/components/arenas/RevealSequence";
import ExecutiveSummary from "@/components/arenas/ExecutiveSummary";
import OverlayUI from "@/components/OverlayUI";
import ControlDock from "@/components/ControlDock";

export default function Page() {
  const { activeArenaIndex, hasCompletedFlow, boardroomMode } = useDecision();

  const arenas = [
    <IntroScreen key="0" />,
    <DirectionArena key="1" />,
    <LogoArena key="2" />,
    <ColorArena key="3" />,
    <TypographyArena key="4" />,
    <ExperienceYuvaMode key="5" />,
    <CompetitorIntelligence key="6" />,
    <CommunityMode key="7" />,
    <FutureEcosystemMode key="8" />,
    <RevealSequence key="9" />,
    <ExecutiveSummary key="10" />
  ];

  return (
    <main className="h-screen w-screen overflow-hidden bg-[var(--bg-primary)]">
      
      {/* Global Persistant UI */}
      {/* Only show OverlayUI (Boardroom Toggle + Business Logic Card) if we are not in Intro(0) or Reveal(9) */}
      {activeArenaIndex > 0 && activeArenaIndex !== 9 && <OverlayUI />}

      {/* Free Roam Navigation Dock (Only visible when unlocked and not in boardroom mode) */}
      {hasCompletedFlow && !boardroomMode && activeArenaIndex !== 9 && (
        <ControlDock />
      )}

      {/* Arena Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeArenaIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="h-full w-full"
        >
          {arenas[activeArenaIndex]}
        </motion.div>
      </AnimatePresence>

    </main>
  );
}
