"use client";

import Image from "next/image";
import MagneticWrapper from "@/components/shared/MagneticWrapper";
import { motion } from "framer-motion";

export default function ProfileVisual() {
  return (
    <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
      
      {/* Rotating square outline */}
      <motion.div
        aria-hidden
        className="absolute inset-0 border-2 border-emerald-400/70 rounded-xl"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear"
        }}
      />

      {/* Magnetic profile image */}
      <MagneticWrapper strength={0.25}>
        <div className="relative z-10 w-full h-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-soft">
          <Image
            src="/images/profile.png"
            alt="Profile photo"
            fill
            priority
            className="object-cover"
          />
        </div>
      </MagneticWrapper>
    </div>
  );
}
