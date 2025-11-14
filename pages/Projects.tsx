import React, { useState, useMemo } from "react";
import { PROJECTS } from "../constants";
import { ProjectCategory } from "../types";
import ProjectCard from "../components/ProjectCard";

const FilterButton: React.FC<{
  category: ProjectCategory;
  label: string;
  activeCategory: ProjectCategory;
  setCategory: (category: ProjectCategory) => void;
}> = ({ category, label, activeCategory, setCategory }) => {
  const isActive = category === activeCategory;
  return (
    <button
      onClick={() => setCategory(category)}
      className={`font-mono text-sm px-4 py-2 border-2 transition-all duration-300 ${
        isActive
          ? "bg-[var(--accent-color)] text-[var(--bg-dark)] border-[var(--accent-color)]"
          : "border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
      }`}
    >
      {label}
    </button>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.ALL
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === ProjectCategory.ALL) {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section aria-label="Data Heists">
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-center text-[var(--accent-color)]">
        &gt; DATA_HEISTS
      </h2>
      <div className="mt-8 mb-12 flex justify-center flex-wrap gap-2 md:gap-4">
        <FilterButton
          category={ProjectCategory.ALL}
          label="ALL"
          activeCategory={activeCategory}
          setCategory={setActiveCategory}
        />
        <FilterButton
          category={ProjectCategory.FRONTEND}
          label="FRONTEND"
          activeCategory={activeCategory}
          setCategory={setActiveCategory}
        />
        <FilterButton
          category={ProjectCategory.BACKEND}
          label="BACKEND"
          activeCategory={activeCategory}
          setCategory={setActiveCategory}
        />
        <FilterButton
          category={ProjectCategory.FULLSTACK}
          label="FULLSTACK"
          activeCategory={activeCategory}
          setCategory={setActiveCategory}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="transition-opacity duration-500 ease-in-out"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
