"use client";
import { useDecision } from "@/context/DecisionContext";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomTestFeedback({ targetId }: { targetId: string }) {
  const { addVote, votes } = useDecision();
  
  // Example hardcoded mapping, ideally we'd pass target Type and ID
  // For simplicity in this engine, we'll just show the buttons and animate a counter locally

  return (
    <div className="absolute top-4 right-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-xl border border-[var(--text-secondary)]/20 p-2 rounded-full flex gap-1 shadow-xl">
        <FeedbackButton emoji="❤️" onClick={() => addVote('logo', targetId, 'love')} />
        <FeedbackButton emoji="👍" onClick={() => addVote('logo', targetId, 'like')} />
        <FeedbackButton emoji="🧐" onClick={() => addVote('logo', targetId, 'maybe')} />
        <FeedbackButton emoji="❌" onClick={() => addVote('logo', targetId, 'reject')} />
      </div>
    </div>
  );
}

function FeedbackButton({ emoji, onClick }: { emoji: string; onClick: () => void }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--text-primary)]/10 text-sm"
    >
      {emoji}
    </motion.button>
  );
}
