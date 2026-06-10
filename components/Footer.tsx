import { portfolio } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {year} {portfolio.shortName}. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-4">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={portfolio.resumePath}
            download
            className="font-mono text-xs text-muted transition-colors hover:text-primary"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
