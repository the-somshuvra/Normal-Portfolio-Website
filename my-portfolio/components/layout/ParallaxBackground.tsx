"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -220]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full"
      />
    </div>
  );
}
