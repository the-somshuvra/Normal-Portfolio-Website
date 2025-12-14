import "./globals.css";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/layout/Cursor";
import Providers from "@/components/providers/Providers";
import TransitionLayout from "@/components/providers/TransitionLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>
          <Navbar />
          <TransitionLayout>
            {children}
            <Footer />
          </TransitionLayout>
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}
