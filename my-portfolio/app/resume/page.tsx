export const metadata = {
  title: "Resume | AI Boss",
  description: "View and download my professional resume."
};

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
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        <GradientText>My Resume</GradientText>
      </motion.h1>

      {/* Resume Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-soft backdrop-blur-xl overflow-hidden"
      >
        <iframe
          src="/resume/my-resume.pdf"
          className="w-full h-[80vh]"
          style={{ border: "none" }}
        ></iframe>
      </motion.div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <MagneticWrapper>
          <a
            href="/resume/my-resume.pdf"
            download="AI-Boss-Resume.pdf"
            className="px-8 py-3 bg-grad-gold text-black font-semibold rounded-xl shadow-glow hover:opacity-90 transition-all"
          >
            Download Resume
          </a>
        </MagneticWrapper>

        <MagneticWrapper>
          <a
            href="/resume/my-resume.pdf"
            target="_blank"
            className="px-8 py-3 border border-white/20 text-white font-medium rounded-xl hover:border-white/40 transition-all"
          >
            Open Fullscreen
          </a>
        </MagneticWrapper>
      </div>
    </main>
  );
}
