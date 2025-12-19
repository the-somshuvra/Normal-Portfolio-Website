"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";
import MagneticWrapper from "@/components/shared/MagneticWrapper";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative w-full min-h-screen px-6 md:px-20 py-32"
    >
      <SectionTitle
        title="Resume"
        subtitle="Experience & qualifications"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mt-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 text-center"
      >
        <p className="text-white/70 mb-8">
          View or download my professional resume.
        </p>

        <MagneticWrapper>
          <a
            href="/resume/my-resume.pdf"
            target="_blank"
            data-hover
            className="inline-block px-6 py-3 rounded-xl bg-grad-gold text-black font-semibold shadow-glow"
          >
            Download Resume
          </a>
        </MagneticWrapper>
      </motion.div>
    </section>
  );
}
