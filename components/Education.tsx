"use client";

import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-surface/30">
      <div className="mb-10">
        <h2 className="font-mono text-sm text-primary">{"// education"}</h2>
        <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Education
        </p>
      </div>

      <div className="space-y-4">
        {portfolio.education.map((edu) => (
          <article
            key={`${edu.degree}-${edu.period}`}
            className="card-surface flex gap-4 p-6"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background"
              aria-hidden="true"
            >
              <GraduationCap size={18} className="text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-muted">{edu.school}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted">
                  {edu.period}
                </p>
              </div>
              <p className="mt-1 text-xs text-muted">{edu.location}</p>
              {edu.details && (
                <p className="mt-2 font-mono text-xs text-secondary">
                  {edu.details}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
