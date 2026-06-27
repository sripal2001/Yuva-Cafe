"use client";
import { useEffect } from "react";
import { useDecision } from "@/context/DecisionContext";

export default function ThemeEngine({ children }: { children: React.ReactNode }) {
  const { activeColor, activeLogo } = useDecision();

  const getTypoClass = () => {
    if (activeLogo === 'monogram') return 'playfair';
    if (activeLogo === 'luxury') return 'lora';
    return 'inter';
  };

  useEffect(() => {
    document.body.className = `color-${activeColor} typo-${getTypoClass()} antialiased overflow-hidden selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]`;
  }, [activeColor, activeLogo]);

  return <>{children}</>;
}
