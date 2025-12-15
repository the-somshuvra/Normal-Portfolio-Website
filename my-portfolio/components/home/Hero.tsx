"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "../shared/GradientText";
import Spotlight from "../shared/Spotlight";
import MagneticWrapper from "../shared/MagneticWrapper";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center px-6 md:px-20">
      {/* Spotlight background */}
      <Spotlight />

      {/* Main Grid */}
      <div className="relative z-10 w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col items-start">
          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 tracking-widest text-sm md:text-base"
          >
            Hey, I’m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-2 text-4xl md:text-6xl font-bold leading-tight"
          >
            <GradientText>AI Boss</GradientText>
          </motion.h1>

          {/* Role */}
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
            I build premium digital experiences with interactive UI, smooth
            animations, modern aesthetics, and high-performance engineering.
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
                data-hover
              >
                View Projects
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium backdrop-blur-md transition-all"
                data-hover
              >
                Contact Me
              </a>
            </MagneticWrapper>
          </motion.div>
        </div>
{/* ================= RIGHT PROFILE VISUAL (SYNCED) ================= */}
<div className="hidden md:flex justify-center">
  <MagneticWrapper strength={0.4}>
    <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px]">

      {/* Soft green ambient glow */}
      <div className="absolute inset-0 rounded-2xl bg-emerald-400/50 blur-2xl" />

      {/* Rotating green square (visual only, synced position) */}
      <motion.div
        aria-hidden
        className="absolute -inset-1 border-2 border-emerald-400/70 rounded-2xl"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear"
        }}
      />

      {/* Profile photo */}
      <div
        data-hover
        className="relative z-10 w-full h-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-soft cursor-pointer"
      >
        <Image
          src="/images/profile.png"
          alt="AI Boss Profile Photo"
          width={370}
          height={370}
          priority
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </MagneticWrapper>
</div>


      </div>
    </section>
  );
}
