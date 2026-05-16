"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  type: string;
  description: string;
  url: string;
  accent: string;
};

type ProjectsPanelProps = {
  projects: Project[];
};

const INITIAL_VISIBLE_COUNT = 12;

export default function ProjectsPanel({ projects }: ProjectsPanelProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.type)))],
    [projects]
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [selectedCategory]);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.type === selectedCategory),
    [projects, selectedCategory]
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const canLoadMore = visibleProjects.length < filteredProjects.length;

  return (
    <article className="glass-card projects-card">
      <div className="project-header">
        <div className="section-title">
          <ArrowUpRight size={24} />
          <h2>Projects</h2>
        </div>
        <p className="project-count">
          Showing {Math.min(visibleCount, filteredProjects.length)} of {filteredProjects.length}
        </p>
      </div>

      <div className="project-tabs project-tabs-inline" aria-label="Project categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-list project-list-grid">
        {visibleProjects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>{project.type}</span>
            <strong>{project.title}</strong>
            <small>{project.description}</small>
            <ArrowUpRight size={16} />
          </a>
        ))}
      </div>

      {canLoadMore && (
        <div className="project-footer">
          <button
            type="button"
            className="load-more-button"
            onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE_COUNT)}
          >
            Load more
          </button>
        </div>
      )}
    </article>
  );
}
