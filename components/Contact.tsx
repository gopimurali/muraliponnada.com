"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

const iconMap = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  phone: Phone,
};

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mb-10 text-center">
        <h2 className="font-mono text-sm text-primary">{"// contact"}</h2>
        <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Let&apos;s connect
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
          Open to Software Engineer, Backend Engineer, and Quant Developer roles
          on trading platform, fintech, and capital markets engineering teams in
          the NYC / Jersey City area.
        </p>
      </div>

      <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
        {portfolio.socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.icon === "email" || link.icon === "phone" ? undefined : "_blank"}
              rel={
                link.icon === "email" || link.icon === "phone"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="card-surface flex items-center gap-4 p-5 transition-colors hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted">{link.label}</p>
                <p className="text-sm font-medium text-foreground">
                  {link.icon === "email"
                    ? portfolio.email
                    : link.icon === "phone"
                      ? portfolio.phone
                      : link.label}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <a
          href={`mailto:${portfolio.email}?subject=Hello%20Murali`}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <Mail size={16} />
          Send an email
        </a>
      </div>
    </SectionWrapper>
  );
}
