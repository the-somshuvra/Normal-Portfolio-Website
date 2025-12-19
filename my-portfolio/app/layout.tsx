import "./globals.css";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";

import DockNavbar from "@/components/layout/DockNavbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Cursor from "@/components/layout/Cursor";
import ParallaxBackground from "@/components/layout/ParallaxBackground";
import SectionBackground from "@/components/layout/SectionBackground";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>

        <SectionBackground />
        <ScrollProgress />
        <ParallaxBackground />
        {children}
        <DockNavbar />
        <Cursor />
      </body>
    </html>
  );
}
