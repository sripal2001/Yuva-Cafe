import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora, Oswald } from "next/font/google";
import "./globals.css";
import { DecisionProvider } from "@/context/DecisionContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Yuva Cafe | Boardroom Strategy Engine",
  description: "Interactive brand configuration for Kavuri Hills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable} ${lora.variable} ${oswald.variable}`}>
      <body className={`${inter.className} bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased overflow-hidden selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]`}>
        <DecisionProvider>
          {children}
        </DecisionProvider>
      </body>
    </html>
  );
}
