"use client";

import { motion } from "framer-motion";
import MagneticWrapper from "./MagneticWrapper";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all"
    >
      {/* Project Image */}
      <div className="relative w-full h-52 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-all" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-lg bg-white/10 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {project.demo && (
            <MagneticWrapper>
              <a
                href={project.demo}
                target="_blank"
                className="px-4 py-2 rounded-lg bg-grad-blue text-black font-semibold text-sm hover:opacity-90 transition-all"
              >
                Demo
              </a>
            </MagneticWrapper>
          )}

          {project.github && (
            <MagneticWrapper>
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm hover:border-white/40 transition-all"
              >
                Code
              </a>
            </MagneticWrapper>
          )}
        </div>
      </div>
    </motion.div>
  );
}
