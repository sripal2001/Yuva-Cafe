"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type BrandDirection = 'tropical-luxury' | 'creative-hub' | 'social-club' | null;
export type LogoOption = 'monogram' | 'luxury' | 'geometric';
export type ColorOption = 'emerald' | 'coral' | 'ocean';
// We bundle Typography into the Logo decision to reduce fatigue.
// Monogram -> Playfair, Luxury -> Satoshi, Geometric -> Inter.

type DecisionContextType = {
  brandDirection: BrandDirection;
  setBrandDirection: (d: BrandDirection) => void;
  activeLogo: LogoOption;
  setActiveLogo: (l: LogoOption) => void;
  activeColor: ColorOption;
  setActiveColor: (c: ColorOption) => void;
  boardroomMode: boolean;
  setBoardroomMode: (m: boolean) => void;
};

const DecisionContext = createContext<DecisionContextType | undefined>(undefined);

export function DecisionProvider({ children }: { children: ReactNode }) {
  const [brandDirection, setBrandDirection] = useState<BrandDirection>(null);
  const [activeLogo, setActiveLogo] = useState<LogoOption>('monogram');
  const [activeColor, setActiveColor] = useState<ColorOption>('emerald');
  const [boardroomMode, setBoardroomMode] = useState<boolean>(false);

  return (
    <DecisionContext.Provider 
      value={{ 
        brandDirection, setBrandDirection, 
        activeLogo, setActiveLogo, 
        activeColor, setActiveColor, 
        boardroomMode, setBoardroomMode 
      }}
    >
      {children}
    </DecisionContext.Provider>
  );
}

export function useDecision() {
  const context = useContext(DecisionContext);
  if (context === undefined) {
    throw new Error("useDecision must be used within a DecisionProvider");
  }
  return context;
}
