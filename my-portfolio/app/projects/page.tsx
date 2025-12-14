"use client";

import { motion } from "framer-motion";
import Projects from "@/components/home/Projects";
import GradientText from "@/components/shared/GradientText";

export default function ProjectsPage() {
  return (
    <main className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-20">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-14"
      >
        <GradientText>All Projects</GradientText>
      </motion.h1>

      {/* Projects Grid */}
      <Projects />
    </main>
  );
}
