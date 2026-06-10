"use client";

import { ExternalLink, FolderGit2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-surface/30">
      <div className="mb-10">
        <h2 className="font-mono text-sm text-primary">{"// projects"}</h2>
        <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Selected work beyond trading systems
        </p>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Side projects spanning computer vision, cloud systems, data analysis,
          and accessible healthcare applications.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="card-surface group flex flex-col p-6 transition-colors hover:border-primary/30"
          >
            <div className="mb-3 flex items-start justify-between">
              <FolderGit2
                size={20}
                className="text-primary transition-colors group-hover:text-secondary"
              />
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-primary"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-3 space-y-1.5">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-muted/90"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
