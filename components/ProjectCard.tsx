import React from "react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="group relative overflow-hidden bg-[var(--bg-color)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--accent-color)] hover:shadow-lg hover:shadow-[var(--accent-color)]/20 transform hover:scale-105"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
      }}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold font-mono text-[var(--accent-color)]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--text-color)]/80 h-16">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono bg-[var(--border-color)] px-2 py-1 text-[var(--accent-color)]/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono px-3 py-1 bg-[var(--accent-color)] text-[var(--bg-dark)] hover:bg-opacity-80 transition-colors"
          >
            Live &gt;
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono px-3 py-1 border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-dark)] transition-colors"
        >
          Repo &gt;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
