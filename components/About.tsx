"use client";

import { MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-surface/30">
      <div className="mb-10">
        <h2 className="font-mono text-sm text-primary">{"// about"}</h2>
        <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Engineering production systems for capital markets
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4 text-muted leading-relaxed">
          {portfolio.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <div
            className="flex h-48 w-48 items-center justify-center rounded-2xl border border-border bg-surface-elevated"
            aria-hidden="true"
          >
            <span className="font-mono text-5xl font-bold text-primary/30">
              MP
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} className="text-primary" />
            {portfolio.location}
          </div>
          <p className="mt-1 font-mono text-xs text-muted">
            {portfolio.yearsExperience} experience
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="card-surface p-5">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
            What I build & support
          </h3>
          <ul className="space-y-2">
            {portfolio.about.careerFocus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-surface p-5">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
            Target roles
          </h3>
          <ul className="space-y-2">
            {portfolio.about.targetRoles.map((role) => (
              <li
                key={role}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
