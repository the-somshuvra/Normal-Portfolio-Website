"use client";

import { motion } from "framer-motion";
import tools from "@/data/tools.json";
import GradientText from "../shared/GradientText";

export default function Tools() {
  return (
    <div className="container mx-auto px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        <GradientText>Tools I Use</GradientText>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10
            shadow-soft hover:shadow-glow transition-all text-center"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-12 h-12 mx-auto mb-4"
            />
            <p className="font-medium">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
