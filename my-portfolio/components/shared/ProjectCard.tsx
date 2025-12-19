"use client";

type Project = {
  id: number;
  title: string;
  description: string;
  tech?: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 hover:scale-[1.02] transition">
      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-white/60 text-sm">
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-lg bg-white/10 border border-white/10 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
