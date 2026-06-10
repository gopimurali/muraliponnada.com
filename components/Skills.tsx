"use client";

import { portfolio } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="mb-10">
        <h2 className="font-mono text-sm text-primary">{"// skills"}</h2>
        <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Technical stack
        </p>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Backend-first tooling for trading systems, financial data pipelines,
          and production operations — with applied ML experience from research and
          projects.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((category) => (
          <div key={category.name} className="card-surface p-5">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-secondary">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
