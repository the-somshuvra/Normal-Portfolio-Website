"use client";

import { motion } from "framer-motion";
import GradientText from "../shared/GradientText";
import Spotlight from "../shared/Spotlight";
import MagneticWrapper from "../shared/MagneticWrapper";

export default function Hero() {
  return (
    <div className="relative w-full h-[90vh] flex flex-col justify-center items-start px-6 md:px-20">
      {/* Spotlight background */}
      <Spotlight />

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/60 tracking-widest text-sm md:text-base"
      >
        Hey, I’m
      </motion.p>

      {/* Gradient heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-2 text-4xl md:text-6xl font-bold leading-tight"
      >
        <GradientText>AI Boss</GradientText>
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-4 text-xl md:text-3xl font-medium text-white/80 max-w-2xl"
      >
        Full-Stack Developer & Creative UI Engineer
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65 }}
        className="mt-6 text-white/60 max-w-xl leading-relaxed"
      >
        I build premium digital experiences with interactive UI, smooth animations, 
        modern aesthetics, and high-performance engineering.  
        Crafting innovative interfaces is what I do best.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex gap-6 mt-10"
      >
        <MagneticWrapper>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-grad-gold text-black font-semibold hover:opacity-90 transition-all shadow-glow"
          >
            View Projects
          </a>
        </MagneticWrapper>

        <MagneticWrapper>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium backdrop-blur-md transition-all"
          >
            Contact Me
          </a>
        </MagneticWrapper>
      </motion.div>
    </div>
  );
}
