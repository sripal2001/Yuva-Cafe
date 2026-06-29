"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type LogoOption = 'luxury' | 'modern' | 'community' | null;
export type ColorOption = 'emerald' | 'coral' | 'ocean' | null;
export type TypographyOption = 'serif' | 'sans' | 'editorial' | null;
export type VisualStyleOption = 'luxury' | 'modern' | 'botanical' | null;
export type PackagingOption = 'minimal' | 'luxury' | 'community' | null;
export type SocialOption = 'luxury' | 'lifestyle' | 'community' | null;
export type WebsiteStyleOption = 'hospitality' | 'minimal' | 'editorial' | null;

type DecisionContextType = {
  logo: LogoOption;
  setLogo: (v: LogoOption) => void;
  
  color: ColorOption;
  setColor: (v: ColorOption) => void;
  
  typography: TypographyOption;
  setTypography: (v: TypographyOption) => void;
  
  visualStyle: VisualStyleOption;
  setVisualStyle: (v: VisualStyleOption) => void;
  
  packaging: PackagingOption;
  setPackaging: (v: PackagingOption) => void;
  
  social: SocialOption;
  setSocial: (v: SocialOption) => void;
  
  websiteStyle: WebsiteStyleOption;
  setWebsiteStyle: (v: WebsiteStyleOption) => void;
  
  features: string[];
  toggleFeature: (feature: string) => void;
  
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

const DecisionContext = createContext<DecisionContextType | undefined>(undefined);

export function DecisionProvider({ children }: { children: ReactNode }) {
  const [logo, setLogo] = useState<LogoOption>(null);
  const [color, setColor] = useState<ColorOption>(null);
  const [typography, setTypography] = useState<TypographyOption>(null);
  const [visualStyle, setVisualStyle] = useState<VisualStyleOption>(null);
  const [packaging, setPackaging] = useState<PackagingOption>(null);
  const [social, setSocial] = useState<SocialOption>(null);
  const [websiteStyle, setWebsiteStyle] = useState<WebsiteStyleOption>(null);
  const [features, setFeatures] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <DecisionContext.Provider 
      value={{ 
        logo, setLogo,
        color, setColor,
        typography, setTypography,
        visualStyle, setVisualStyle,
        packaging, setPackaging,
        social, setSocial,
        websiteStyle, setWebsiteStyle,
        features, toggleFeature,
        currentStep, setCurrentStep
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
