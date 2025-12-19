"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function SectionBackground() {
  const { scrollYProgress } = useScroll();

  // Background color interpolation
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgb(5, 10, 15)",     // Home
      "rgb(10, 15, 25)",    // Projects
      "rgb(15, 10, 25)",    // Resume
      "rgb(5, 15, 20)",     // Contact
      "rgb(5, 10, 15)"
    ]
  );

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-20"
      style={{ background }}
    />
  );
}
