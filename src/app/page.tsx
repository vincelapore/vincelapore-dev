import { useEffect } from "react";
import { initCursor } from "./cursor-client";

export default function Home() {
  useEffect(() => {
    initCursor();
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />

      <nav>
        <a href="#" className="nav-logo">
          VL.DEV
        </a>
        <a href="mailto:hi@vincelapore.dev" className="nav-cta">
          Let&apos;s talk →
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-text">BUILD</div>
        <div className="hero-tag">
          Available for projects · Brisbane / Remote
        </div>
        <h1 className="hero-headline">
          I build things
          <br />
          people <em>actually</em>
          <br />
          use.
        </h1>
        <p className="hero-sub">
          Developer specialising in web apps and digital products — for
          creatives, businesses, and anyone with a problem worth solving.
        </p>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span className="marquee-item">
            Next.js <span>✦</span>
          </span>
          <span className="marquee-item">
            React <span>✦</span>
          </span>
          <span className="marquee-item">
            Supabase <span>✦</span>
          </span>
          <span className="marquee-item">
            Tailwind <span>✦</span>
          </span>
          <span className="marquee-item">
            Vercel <span>✦</span>
          </span>
          <span className="marquee-item">
            Stripe <span>✦</span>
          </span>
          <span className="marquee-item">
            TypeScript <span>✦</span>
          </span>
          <span className="marquee-item">
            Full-Stack <span>✦</span>
          </span>
          <span className="marquee-item">
            Next.js <span>✦</span>
          </span>
          <span className="marquee-item">
            React <span>✦</span>
          </span>
          <span className="marquee-item">
            Supabase <span>✦</span>
          </span>
          <span className="marquee-item">
            Tailwind <span>✦</span>
          </span>
          <span className="marquee-item">
            Vercel <span>✦</span>
          </span>
          <span className="marquee-item">
            Stripe <span>✦</span>
          </span>
          <span className="marquee-item">
            TypeScript <span>✦</span>
          </span>
          <span className="marquee-item">
            Full-Stack <span>✦</span>
          </span>
        </div>
      </div>

      {/* Work */}
      <section className="work" id="work">
        <div className="section-label">Selected Work</div>

        <div className="projects-grid">
          {/* Featured: Grademate */}
          <a
            href="https://grademate.dev"
            target="_blank"
            rel="noreferrer"
            className="project-card featured reveal"
          >
            <div>
              <div className="project-num">01 — Featured</div>
              <h2 className="project-title">Grademate</h2>
              <p className="project-desc">
                A grade calculator for university students that spread
                organically through student Facebook groups. Real users, real
                traction — built and shipped solo.
              </p>
              <div className="project-tags">
                <span className="project-tag">Next.js</span>
                <span className="project-tag">Tailwind</span>
                <span className="project-tag">Supabase</span>
                <span className="project-tag">EdTech</span>
              </div>
            </div>
            <div className="project-meta">
              <div className="project-stat">100+</div>
              <div className="project-stat-label">Organic users</div>
            </div>
            <span className="project-arrow">↗</span>
          </a>

          {/* Yorick */}
          <a
            href="https://yorick.live"
            target="_blank"
            rel="noreferrer"
            className="project-card reveal"
          >
            <div className="project-num">02</div>
            <h2 className="project-title">Yorick</h2>
            <p className="project-desc">
              A theatre operating system — directory, rehearsal scheduler, and
              actor portfolio platform built for the performing arts industry.
            </p>
            <div className="project-tags">
              <span className="project-tag">SaaS</span>
              <span className="project-tag">Next.js</span>
              <span className="project-tag">Arts Tech</span>
            </div>
            <span className="project-arrow">↗</span>
          </a>

          {/* Eightysix */}
          <a
            href="https://eightysix.bar"
            target="_blank"
            rel="noreferrer"
            className="project-card reveal"
          >
            <div className="project-num">03</div>
            <h2 className="project-title">Eightysix</h2>
            <p className="project-desc">
              Hospitality tech for bars and venues. Purpose-built for an
              industry that knows exactly what it needs — and hates tools that
              don&apos;t get it.
            </p>
            <div className="project-tags">
              <span className="project-tag">Hospitality</span>
              <span className="project-tag">Next.js</span>
              <span className="project-tag">Supabase</span>
            </div>
            <span className="project-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="reveal">
          <div className="section-label">About</div>
          <h2 className="about-headline">
            Builder.
            <br />
            <em>Not</em>
            <br />
            just a dev.
          </h2>
        </div>
        <div className="reveal">
          <p className="about-body">
            I&apos;m Vince — a Brisbane-based developer who builds{" "}
            <strong>real products for real people</strong>, not just pretty
            websites that sit there. I&apos;ve shipped multiple apps from
            scratch, grown users organically, and understand what it takes to go
            from idea to live product.
            <br />
            <br />
            I work with <strong>creatives, hospitality businesses, and startups</strong>{" "}
            who need someone that actually gets their world — not a generic
            agency that&apos;ll hand you a WordPress template.
          </p>
          <div className="skills-row">
            <span className="skill-chip">Next.js</span>
            <span className="skill-chip">React</span>
            <span className="skill-chip">Supabase</span>
            <span className="skill-chip">Tailwind</span>
            <span className="skill-chip">Stripe</span>
            <span className="skill-chip">Vercel</span>
            <span className="skill-chip">TypeScript</span>
            <span className="skill-chip">PostgreSQL</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="cta-bg" />
        <div className="cta-label reveal">Let&apos;s work together</div>
        <h2 className="cta-headline reveal">
          Got a
          <br />
          project?
        </h2>
        <a href="mailto:hi@vincelapore.dev" className="cta-link reveal">
          Let&apos;s talk <span className="cta-arrow">↗</span>
        </a>
        <p className="cta-email reveal">hi@vincelapore.dev</p>
      </section>

      <footer>
        <span>© 2026 Vince Lapore</span>
        <span>Brisbane, AU · Available for remote work</span>
        <span>vincelapore.dev</span>
      </footer>
    </>
  );
}
