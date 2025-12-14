"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills.json";
import GradientText from "../shared/GradientText";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className="container mx-auto px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        <GradientText>Skills</GradientText>
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-soft hover:shadow-glow transition-all text-center"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mx-auto mb-4"
            />
            <p className="font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
