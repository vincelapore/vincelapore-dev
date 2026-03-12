"use client";

import { useEffect } from "react";
import { initCursor } from "../cursor-client";

const projects = [
  {
    slug: "grademate",
    name: "Grademate",
    url: "https://grademate.dev",
    tags: ["Next.js", "Tailwind", "Supabase", "EdTech"],
    description:
      "A grade calculator for university students that spread organically through student Facebook groups. Built and shipped solo.",
    screenshot: "/portfolio/grademate.svg",
  },
  {
    slug: "yorick",
    name: "Yorick",
    url: "https://yorick.live",
    tags: ["SaaS", "Next.js", "Arts Tech"],
    description:
      "A theatre operating system — directory, rehearsal scheduler, and actor portfolio platform for the performing arts industry.",
    screenshot: "/portfolio/yorick.svg",
  },
  {
    slug: "eightysix",
    name: "Eightysix",
    url: "https://eightysix.bar",
    tags: ["Hospitality", "Next.js", "Supabase"],
    description:
      "Hospitality tech for bars and venues. Purpose-built for an industry that knows exactly what it needs — and hates tools that don't get it.",
    screenshot: "/portfolio/eightysix.svg",
  },
] as const;

export default function PortfolioPage() {
  useEffect(() => {
    initCursor();
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" />

      <nav>
        <a href="/" className="nav-logo">
          VL.DEV
        </a>
        <a href="mailto:hi@vincelapore.dev" className="nav-cta">
          Let&apos;s talk →
        </a>
      </nav>

      <section className="work" id="portfolio">
        <div className="section-label">Portfolio</div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`project-card reveal ${idx === 0 ? "featured" : ""}`}
            >
              <div>
                <div className="project-num">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <img
                    src={p.screenshot}
                    alt={`${p.name} screenshot`}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      border: "1px solid var(--border)",
                      background: "var(--black)",
                    }}
                  />
                </div>

                <h2 className="project-title">{p.name}</h2>
                <p className="project-desc">{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="project-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <span>© 2026 Vince Lapore</span>
        <span>Brisbane, AU · Available for remote work</span>
        <span>vincelapore.dev</span>
      </footer>
    </>
  );
}

