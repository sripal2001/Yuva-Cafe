"use client";
import { useEffect } from "react";
import { useDecision } from "@/context/DecisionContext";

export default function ThemeEngine({ children }: { children: React.ReactNode }) {
  const { color, typography } = useDecision();

  const getTypoClass = () => {
    if (typography === 'sans') return 'inter';
    if (typography === 'editorial') return 'oswald';
    return 'playfair'; // serif default
  };

  useEffect(() => {
    document.body.className = `color-${color || 'emerald'} typo-${getTypoClass()} antialiased overflow-hidden selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]`;
  }, [color, typography]);

  return <>{children}</>;
}
