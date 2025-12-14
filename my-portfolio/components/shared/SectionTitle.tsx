"use client";

import { motion } from "framer-motion";
import GradientText from "./GradientText";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  center = true
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={center ? "text-center mb-12" : "mb-12"}
    >
      <h2 className="text-4xl md:text-5xl font-bold">
        <GradientText>{title}</GradientText>
      </h2>

      {subtitle && (
        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
