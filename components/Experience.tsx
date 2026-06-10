"use client";

import { Briefcase } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="mb-10">
        <h2 className="font-mono text-sm text-primary">{"// experience"}</h2>
        <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Production engineering in financial systems
        </p>
      </div>

      <div className="relative space-y-8">
        <div
          className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-border sm:block"
          aria-hidden="true"
        />

        {portfolio.experience.map((job, index) => (
          <article
            key={`${job.company}-${job.period}`}
            className="relative sm:pl-12"
          >
            <div
              className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-surface sm:flex"
              aria-hidden="true"
            >
              <Briefcase size={16} className="text-primary" />
            </div>

            <div className="card-surface p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-primary">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                  <p className="text-xs text-muted">{job.location}</p>
                </div>
              </div>

              <p className="mt-3 font-mono text-xs text-secondary">
                {job.project}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {index < portfolio.experience.length - 1 && (
              <div className="my-2 h-px bg-border sm:hidden" aria-hidden="true" />
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
