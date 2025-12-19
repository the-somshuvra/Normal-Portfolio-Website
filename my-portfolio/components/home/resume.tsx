"use client";

import { motion } from "framer-motion";
import MagneticWrapper from "@/components/shared/MagneticWrapper";
import GradientText from "@/components/shared/GradientText";

export default function ResumePage() {
  return (
    <main className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-20">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        <GradientText>Resume</GradientText>
      </motion.h1>

      {/* Resume Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 text-center"
      >
        <p className="text-white/70 mb-6">
          View or download my professional resume.
        </p>

        <MagneticWrapper>
          <a
            href="/resume/Somshuvra_Ghosh_Resume.pdf"  
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="inline-block px-6 py-3 rounded-xl bg-grad-gold text-black font-semibold shadow-glow hover:opacity-90 transition-all"
          >
            Download Resume
          </a>
        </MagneticWrapper>
      </motion.div>

    </main>
  );
}
