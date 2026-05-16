"use client";

import { Sparkles } from "lucide-react";

type HighlightedProject = {
  title: string;
  type: string;
  description: string;
  details?: string[];
  impact?: string[];
  accent: string;
};

type HighlightedProjectProps = {
  project: HighlightedProject;
};

export default function HighlightedProject({ project }: HighlightedProjectProps) {
  return (
    <article className="glass-card highlighted-projects-card">
      <div className="section-title">
        <Sparkles size={24} />
        <h2>Featured Project</h2>
      </div>

      <div className="highlighted-card-header">
        <span className="highlighted-badge">{project.type}</span>
        <h3>{project.title}</h3>
      </div>

      <p className="highlighted-description">{project.description}</p>

      <div className="highlighted-details">
        <div className="highlighted-section">
          <h4>Core features</h4>
          <ul>
            {(project.details ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="highlighted-section">
          <h4>Impact</h4>
          <ul>
            {(project.impact ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
