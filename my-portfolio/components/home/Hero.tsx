"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "../shared/GradientText";
import Spotlight from "../shared/Spotlight";
import MagneticWrapper from "../shared/MagneticWrapper";
import { MapPin, Sparkles, Languages, Briefcase, Code, Telescope  } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center">

      {/* Spotlight background */}
      <Spotlight />

     
{/* ================= MAIN CONTAINER ================= */}
  <div className="max-w-[1280px] mx-auto px-8 md:px-70">
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24 -translate-y-16 md:-translate-y-24">



          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-start pt-34 md:pt-70">


                       {/* LOCATION BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2
                         rounded-full border border-emerald-400/40
                         bg-emerald-400/10 backdrop-blur-md
                         text-emerald-400 text-sm font-medium w-fit"
            >
              <MapPin size={16} />
              Kolkata, India
            </motion.div>

            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/100 tracking-widest text-1xl md:text-2xl"
            >
              Hey, I’m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-1 text-6xl md:text-8xl font-bold leading-tight"
            >
              <GradientText>Somshuvra Ghosh</GradientText>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-xl md:text-4xl font-medium text-white/80 max-w-2xl"
            >
              Full-Stack Developer & Creative UI Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65 }}
              className="mt-4 text-white/100 max-w-xl leading-relaxed"
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
              className="flex gap-8 mt-10"
            >
              <MagneticWrapper>
                <a
                  href="#projects"
                  className="px-20 py-5 rounded-xl bg-grad-gold text-black font-semibold hover:opacity-90 transition-all shadow-glow"
                  data-hover
                >
                  View Projects
                </a>
              </MagneticWrapper>

              <MagneticWrapper>
                <a
                  href="#contact"
                  className="px-10 py-5 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium backdrop-blur-md transition-all"
                  data-hover
                >
                  Contact Me
                </a>
              </MagneticWrapper>
            </motion.div>
          </div>

          {/* ================= RIGHT PROFILE VISUAL ================= */}
          <div className="relative flex justify-end items-center">

            <MagneticWrapper strength={0.4}>
              <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px]">

                {/* Soft green ambient glow */}
                <div className="absolute inset-0 rounded-2xl bg-emerald-400/50 blur-2xl" />

                {/* Rotating green square */}
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
                    width={420}
                    height={420}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ================= FLOATING INFO CARDS ================= */}

                {/* Top Left */}
                <FloatingCard
                  className="top-11 -left-20"
                  icon={<Telescope  size={25} />}
                  title="Explorer"
                />

                {/* Top Right */}
                <FloatingCard
                  className="-top-4 -right-9"
                  icon={<Code size={20} />}
                  title="MERN Stack Developer"
                />

                {/* Bottom */}
                <FloatingCard
                  className="-bottom-4 left-1/2 -translate-x-1/2"
                  icon={<Briefcase size={20} />}
                  title="Open to Opportunities"
                />
              </div>
            </MagneticWrapper>

          </div>
        </div>
      </div>
    </section>
  );
}
/* ================= FLOATING CARD COMPONENT ================= */
function FloatingCard({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    /*<MagneticWrapper strength={0.25}>*/
      <motion.div
        className={`absolute ${className}
        z-30
          flex items-center gap-2 px-4 py-2
          rounded-full bg-black/60 backdrop-blur-md
          border border-white/10 text-white/90
          text-sm shadow-lg cursor-pointer`}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
      >
        <span className="text-emerald-400">{icon}</span>
        <span>{title}</span>
      </motion.div>
    /*== </MagneticWrapper> ==*/
  );
}