"use client";
import { useEffect } from "react";
import { useDecision } from "@/context/DecisionContext";

export default function ThemeEngine({ children }: { children: React.ReactNode }) {
  const { activeColor, activeTypo } = useDecision();

  useEffect(() => {
    document.body.className = `color-${activeColor} typo-${activeTypo} antialiased overflow-hidden selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]`;
  }, [activeColor, activeTypo]);

  return <>{children}</>;
}
