"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type BrandDirection = 'tropical-luxury' | 'urban-tropical' | 'sunset-social';
export type LogoOption = 'monogram' | 'luxury' | 'geometric';
export type ColorOption = 'emerald' | 'coral' | 'ocean';
export type TypoOption = 'playfair' | 'inter' | 'satoshi';

export type VoteType = 'love' | 'like' | 'maybe' | 'reject' | 'shortlist';

interface VoteRecord {
  targetId: string;
  vote: VoteType;
  timestamp: number;
}

interface DecisionContextType {
  // Brand Configuration
  brandDirection: BrandDirection;
  setBrandDirection: (direction: BrandDirection) => void;
  activeLogo: LogoOption;
  setActiveLogo: (logo: LogoOption) => void;
  activeColor: ColorOption;
  setActiveColor: (color: ColorOption) => void;
  activeTypo: TypoOption;
  setActiveTypo: (typo: TypoOption) => void;

  // Flow & State Management
  activeArenaIndex: number;
  setActiveArenaIndex: (index: number | ((prev: number) => number)) => void;
  hasCompletedFlow: boolean;
  setHasCompletedFlow: (status: boolean) => void;
  boardroomMode: boolean;
  setBoardroomMode: (status: boolean | ((prev: boolean) => boolean)) => void;

  // Voting System
  votes: VoteRecord[];
  addVote: (targetId: string, vote: VoteType) => void;
}

const DecisionContext = createContext<DecisionContextType | undefined>(undefined);

export function DecisionProvider({ children }: { children: ReactNode }) {
  const [brandDirection, setBrandDirection] = useState<BrandDirection>('tropical-luxury');
  const [activeLogo, setActiveLogo] = useState<LogoOption>('monogram');
  const [activeColor, setActiveColor] = useState<ColorOption>('emerald');
  const [activeTypo, setActiveTypo] = useState<TypoOption>('playfair');
  
  const [activeArenaIndex, setActiveArenaIndex] = useState<number>(0);
  const [hasCompletedFlow, setHasCompletedFlow] = useState<boolean>(false);
  const [boardroomMode, setBoardroomMode] = useState<boolean>(false);

  const [votes, setVotes] = useState<VoteRecord[]>([]);

  const addVote = (targetId: string, vote: VoteType) => {
    setVotes(prev => [...prev, { targetId, vote, timestamp: Date.now() }]);
  };

  return (
    <DecisionContext.Provider value={{
      brandDirection, setBrandDirection,
      activeLogo, setActiveLogo,
      activeColor, setActiveColor,
      activeTypo, setActiveTypo,
      activeArenaIndex, setActiveArenaIndex,
      hasCompletedFlow, setHasCompletedFlow,
      boardroomMode, setBoardroomMode,
      votes, addVote
    }}>
      {children}
    </DecisionContext.Provider>
  );
}

export function useDecision() {
  const context = useContext(DecisionContext);
  if (context === undefined) {
    throw new Error('useDecision must be used within a DecisionProvider');
  }
  return context;
}
