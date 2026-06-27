"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type AppState = 'intro' | 'engine' | 'reveal' | 'summary';
export type ViewMode = 'realworld' | 'competitors';

export type LogoOption = 'monogram' | 'luxury' | 'geometric';
export type ColorOption = 'emerald' | 'volcanic' | 'ocean' | 'terracotta';
export type TypoOption = 'serif' | 'sans' | 'editorial';

// The Room Test Voting Data Structure
export type VoteTarget = 'logo' | 'color' | 'typography';
export type VoteValue = 'love' | 'like' | 'maybe' | 'reject';

type DecisionContextType = {
  appState: AppState;
  setAppState: (state: AppState) => void;
  
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  activeLogo: LogoOption;
  setActiveLogo: (logo: LogoOption) => void;

  activeColor: ColorOption;
  setActiveColor: (color: ColorOption) => void;

  activeTypo: TypoOption;
  setActiveTypo: (typo: TypoOption) => void;

  votes: Record<VoteTarget, Record<string, Record<VoteValue, number>>>;
  addVote: (target: VoteTarget, item: string, value: VoteValue) => void;
};

const DecisionContext = createContext<DecisionContextType | undefined>(undefined);

export function DecisionProvider({ children }: { children: ReactNode }) {
  const [appState, setAppState] = useState<AppState>('intro');
  const [viewMode, setViewMode] = useState<ViewMode>('realworld');
  
  const [activeLogo, setActiveLogo] = useState<LogoOption>('monogram');
  const [activeColor, setActiveColor] = useState<ColorOption>('volcanic');
  const [activeTypo, setActiveTypo] = useState<TypoOption>('serif');

  const [votes, setVotes] = useState<Record<VoteTarget, Record<string, Record<VoteValue, number>>>>({
    logo: {},
    color: {},
    typography: {}
  });

  const addVote = (target: VoteTarget, item: string, value: VoteValue) => {
    setVotes(prev => {
      const newVotes = { ...prev };
      if (!newVotes[target][item]) {
        newVotes[target][item] = { love: 0, like: 0, maybe: 0, reject: 0 };
      }
      newVotes[target][item][value] += 1;
      return newVotes;
    });
  };

  // Sync state to body classes for pure CSS-driven theming across the entire DOM
  useEffect(() => {
    // Clear old classes
    document.body.className = document.body.className
      .replace(/color-\w+/g, '')
      .replace(/typo-\w+/g, '')
      .trim();
    
    // Add new classes
    document.body.classList.add(`color-${activeColor}`);
    document.body.classList.add(`typo-${activeTypo}`);
  }, [activeColor, activeTypo]);

  return (
    <DecisionContext.Provider value={{
      appState, setAppState,
      viewMode, setViewMode,
      activeLogo, setActiveLogo,
      activeColor, setActiveColor,
      activeTypo, setActiveTypo,
      votes, addVote
    }}>
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
