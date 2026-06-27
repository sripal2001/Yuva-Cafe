"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Theme = 'luxury' | 'earthy' | 'industrial';

type ModeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  addToCart: () => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('luxury');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  useEffect(() => {
    document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
    if (theme !== 'luxury') {
      document.body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  const addToCart = () => {
    setCartCount(c => c + 1);
    setIsCartOpen(true);
  };

  return (
    <ModeContext.Provider value={{ theme, setTheme, isCartOpen, setIsCartOpen, cartCount, addToCart }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
