"use client";

import { motion } from "framer-motion";
import MagneticWrapper from "@/components/shared/MagneticWrapper";

export default function MagneticLogo() {
  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed top-7 left-12 z-[9999]">
      <MagneticWrapper strength={0.6}>
        <motion.button
          onClick={scrollToHero}
          whileHover={{ rotateX: 8, rotateY: -8 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="
            relative w-14 h-14 rounded-full
            bg-black/40 backdrop-blur-xl
            border border-emerald-400/40
            flex items-center justify-center
            shadow-[0_0_25px_rgba(0,255,136,0.35)]
            cursor-pointer
          "
        >
          {/* Neon glow ring */}
          <span className="absolute inset-0 rounded-full border border-emerald-400/40 animate-pulse" />

          {/* Logo text */}
          <span className="relative z-10 text-sm font-bold tracking-widest text-emerald-400">
            SG
          </span>
        </motion.button>
      </MagneticWrapper>
    </div>
  );
}
