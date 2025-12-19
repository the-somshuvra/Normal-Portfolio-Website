"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";
import ProjectCard from "@/components/shared/ProjectCard";
import Calculator from "@/components/projects/Calculator";
import projects from "@/data/projects.json";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-32"
    >
      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">

        {/* Section Heading */}
        <SectionTitle
          title="Projects"
          subtitle="Selected works & interactive demos"
        />

        {/* ================= PROJECTS GRID ================= */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* ---------- Normal Project Cards ---------- */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {/* ---------- Calculator Demo Project ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 md:col-span-2"
          >
            <div className="h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-soft">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Calculator App
              </h3>

              <p className="text-white/60 text-sm mb-6 max-w-md">
                A fully functional calculator built with React state
                management, supporting basic arithmetic operations and
                clean UI interactions.
              </p>

              <Calculator />

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["React", "TypeScript", "State Management"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-lg bg-white/10 border border-white/10 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
