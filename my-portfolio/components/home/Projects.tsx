"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects.json";
import GradientText from "../shared/GradientText";
import ProjectCard from "../shared/ProjectCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function Projects() {
  return (
    <div className="container mx-auto px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <GradientText>Projects</GradientText>
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
