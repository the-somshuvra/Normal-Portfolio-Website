"use client";

import { motion } from "framer-motion";

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      key={Math.random()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
