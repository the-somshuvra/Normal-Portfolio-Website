"use client";

import { motion } from "framer-motion";
import GradientText from "../shared/GradientText";

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">
      
      {/* Left: Picture */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-soft border border-white/10 hover:shadow-glow transition-all">
          <img
            src="/images/profile.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Right: Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>About Me</GradientText>
        </h2>

        <p className="text-white/70 leading-relaxed">
          I am a full-stack developer focused on building modern, aesthetic, 
          and high-performance digital experiences. My work blends clean UI design, 
          advanced animations, interactive 3D elements, and scalable engineering principles.
        </p>

        <p className="mt-4 text-white/70 leading-relaxed">
          My goal is simple: create interfaces that feel premium, smooth, and alive.
          I specialize in React, Next.js, Tailwind, GSAP, Framer Motion, and
          interactive 3D using Three.js.
        </p>
      </motion.div>
    </div>
  );
}
