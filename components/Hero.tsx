"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

function Ticker() {
  const items = [...portfolio.tickerItems, ...portfolio.tickerItems];

  return (
    <div className="relative mt-12 overflow-hidden border-y border-border bg-surface/50 py-2.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="flex animate-ticker whitespace-nowrap motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 font-mono text-xs text-muted"
          >
            <span className="text-secondary">▸</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20">
      <div className="section-padding flex-1 flex flex-col justify-center">
        <div className="mx-auto max-w-5xl w-full">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-mono text-sm text-secondary">
              <span className="text-muted">{">"}</span> Software Engineer ·
              Trading Systems · Backend
            </p>

            <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {portfolio.shortName}
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-muted sm:text-xl">
              {portfolio.heroTitle}
            </p>

            <p className="mt-3 max-w-2xl text-base text-muted/90">
              {portfolio.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={portfolio.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-surface-elevated"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-surface-elevated"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {portfolio.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="card-surface px-3 py-3 text-center"
                >
                  <div className="font-mono text-lg font-semibold text-secondary sm:text-xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[10px] leading-tight text-muted sm:text-xs">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-1 text-muted transition-colors hover:text-primary"
              aria-label="Scroll to about section"
            >
              <span className="font-mono text-xs">scroll</span>
              <ArrowDown size={16} className="animate-bounce motion-reduce:animate-none" />
            </a>
          </motion.div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}
