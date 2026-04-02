import { useState } from 'react';
import './App.css';
import myPhoto from './assets/me.jpg';

const projects = [
  {
    name: 'Kuonix',
    status: 'Live',
    url: 'https://kuonix.bhanni01.workers.dev/',
    summary:
      'A local-first workflow tool for high-volume photography that sorts RAW image sets by correction need before batch editing begins.',
    detail:
      'Positioned around issue-aware triage for exposure, white balance, contrast, and color problems so photographers can move faster into Photoshop and other finishing workflows.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Workflow design', 'Photography tooling'],
  },
  {
    name: 'RewriteKit',
    status: 'Live',
    url: 'https://rewritekit.vercel.app/',
    summary:
      'Structured AI rewrite workflows for turning rough text into LinkedIn posts, prompts, emails, summaries, tables, and presentation bullets.',
    detail:
      'Built as a Next.js product with transform APIs, low-cost OpenAI usage, freemium gating, refinement actions, and a table-aware workspace.',
    stack: ['Next.js', 'React', 'TypeScript', 'OpenAI', 'Stripe'],
  },
  {
    name: 'MeroChoice',
    status: 'Live',
    url: 'https://merochoice.com/',
    summary:
      'Bilingual decision-support for Nepal: election, banking, career, education, stocks, and more—structured briefs instead of gimmick quizzes.',
    detail:
      'Built for Nepali and English audiences with clear recommendations, confidence, watchouts, and next steps, plus optional low-cost AI insight where it helps.',
    stack: ['Next.js', 'React', 'OpenAI', 'Product design'],
  },
  {
    name: 'SwiftShift',
    status: 'Product exploration',
    summary:
      'An SEO-safe migration workflow for turning legacy websites into runnable Next.js exports with redirect manifests and verification reports.',
    detail:
      'The strongest part is the positioning: preserve SEO-critical signals, produce auditable migration artifacts, and reduce the risk of traffic loss during redesigns.',
    stack: ['Next.js', 'Migration tooling', 'SEO systems', 'Research'],
  },
  {
    name: 'PasswordLocker',
    status: 'In progress',
    summary:
      'A security-focused password management backend with authentication, hashing, and a Prisma-backed data layer.',
    detail:
      'Current foundation includes Express, Prisma, bcrypt, and JWT, aimed at building a practical secure utility instead of a toy CRUD app.',
    stack: ['Node.js', 'Express', 'Prisma', 'JWT', 'bcrypt'],
  },
];

const principles = [
  'I like rebuilding weak flows into products people can actually use, not just demo.',
  'I prefer systems that stay cheap, observable, and simple before they become clever.',
  'Most of my recent work sits at the intersection of AI UX, product positioning, and full-stack delivery.',
];

const focusAreas = [
  'Frontend engineering',
  'AI product workflows',
  'Design systems and motion',
  'Creative web interfaces',
];

function App() {
  const [pixelMode, setPixelMode] = useState(false);

  return (
    <div className={`site-shell${pixelMode ? ' pixel-mode' : ''}`}>
      {pixelMode ? (
        <div className="pixel-world" aria-hidden="true">
          <div className="pixel-world__sky" />
          <div className="pixel-world__sun" />
          <div className="pixel-world__cloud pixel-world__cloud--a" />
          <div className="pixel-world__cloud pixel-world__cloud--b" />
          <div className="pixel-world__ridge pixel-world__ridge--back" />
          <div className="pixel-world__ridge pixel-world__ridge--front" />
          <div className="pixel-world__trees">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="pixel-world__ground" />
          <div className="pixel-world__hud">
            <span>Biome: Decorah Plains</span>
            <span>Quest: Internship Hunt</span>
            <span>Build: Frontend + AI</span>
          </div>
          <div className="pixel-world__hotbar">
            <span />
            <span />
            <span className="is-active" />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      ) : null}
      <div className="site-noise" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark" href="#top">
          Nischal Bhandari
        </a>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Student builder seeking internships</p>
            <h1>Mayo Clinic intern, Luther College CS student, and frontend builder looking for the next serious team.</h1>
            <p className="hero-lead">
              I am currently a Software Engineer Intern at Mayo Clinic, where I help build secure
              full-stack tooling for collaborative image workflows and clinician-led AI annotation.
            </p>
            <p className="hero-text">
              I study at{' '}
              <a
                className="inline-link"
                href="https://www.luther.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Luther College
              </a>{' '}
              in Decorah, Iowa, and I am looking for internship opportunities where I
              can work on frontend engineering, product design, and AI-assisted web
              experiences. I like interfaces with personality, clean systems behind
              them, and just enough Minecraft energy
              <button
                type="button"
                className="pixel-toggle"
                onClick={() => setPixelMode((current) => !current)}
                aria-pressed={pixelMode}
              >
                <span className="pixel-toggle__label">
                  {pixelMode ? 'Pixel world on' : 'Press me'}
                </span>
              </button>{' '}
              to make things memorable.
            </p>

            <div className="hero-signal" aria-label="Current status">
              <span>Mayo Clinic intern</span>
              <span>Open to internships</span>
              <span>Luther College</span>
              <span>AWS certified</span>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                See projects
              </a>
              <a className="button secondary" href="https://github.com/bhanni01">
                GitHub
              </a>
              <a
                className="button secondary"
                href={`${process.env.PUBLIC_URL || ''}/resume.html`}
              >
                Resume
              </a>
            </div>

            <ul className="focus-list">
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel">
            <div className="pixel-scene" aria-hidden="true">
              <div className="pixel-scene__hud">
                <span>LUTHER COLLEGE</span>
                <span>DECORAH, IOWA</span>
              </div>
              <div className="pixel-scene__sun" />
              <div className="pixel-scene__cloud pixel-scene__cloud--one" />
              <div className="pixel-scene__cloud pixel-scene__cloud--two" />
              <div className="pixel-scene__bluffs">
                <span />
                <span />
                <span />
              </div>
              <div className="pixel-scene__ground" />
              <div className="pixel-scene__river" />
              <div className="pixel-scene__campus">
                <span className="campus-block campus-block--building" />
                <span className="campus-block campus-block--window-grid" />
                <span className="campus-block campus-block--chapel" />
                <span className="campus-block campus-block--tree-a" />
                <span className="campus-block campus-block--tree-b" />
              </div>
              <div className="pixel-scene__logo">
                <span className="pixel-shield">
                  <span className="pixel-shield__l" />
                </span>
              </div>
              <div className="pixel-scene__cubes">
                <span />
                <span />
                <span />
              </div>
            </div>
            <img className="portrait" src={myPhoto} alt="Nischal Bhandari" />
            <div className="hero-panel-copy">
              <p className="eyebrow">Current pattern</p>
              <h2>Frontend systems, product instinct, and real-world delivery.</h2>
              <p>
                The most useful version of my work sits between implementation and taste:
                secure tooling at Mayo Clinic, product and automation experience from prior
                roles, and a bias toward interfaces that feel distinctive instead of generic.
              </p>
            </div>
          </aside>
        </section>

        <section className="intro-grid">
          <article className="panel quote-panel">
            <p className="eyebrow">What I optimize for</p>
            <p className="quote">
              Interfaces should feel fast, expressive, and alive. The design can
              have personality, but the product still has to be clear, usable,
              and technically defensible.
            </p>
          </article>

          <article className="panel metrics-panel">
            <p className="eyebrow">Workspace snapshot</p>
            <div className="metrics">
              <div>
                <strong>5</strong>
                <span>projects that show how I think through product and frontend work</span>
              </div>
              <div>
                <strong>Mayo Clinic</strong>
                <span>current work includes secure portals and clinician-facing AI workflows</span>
              </div>
              <div>
                <strong>Startup + research</strong>
                <span>past work spans co-founding, automation, data quality, and teaching</span>
              </div>
            </div>
          </article>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects from my current workspace</h2>
            <p>
              These are the main projects I am actively building or have recently
              reworked. The descriptions below are based on the actual repos in
              this workspace, excluding the Claude codebase.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-head">
                  <div>
                    <p className="project-status">{project.status}</p>
                    <h3>{project.name}</h3>
                  </div>
                </div>
                <p className="project-summary">{project.summary}</p>
                <p className="project-detail">{project.detail}</p>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {project.url ? (
                  <a
                    className="project-live-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit live site
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="section-heading">
            <p className="eyebrow">Approach</p>
            <h2>How I tend to build</h2>
          </div>

          <div className="approach-grid">
            {principles.map((item) => (
              <article className="panel principle-panel" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section panel" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>If you are hiring interns, this is the part where we should talk.</h2>
            <p>
              I am a Luther College student building toward frontend and product
              engineering roles. The work here is real, and I want to keep adding
              stronger systems, stronger interfaces, and stronger shipped products.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="https://github.com/bhanni01">
              GitHub profile
            </a>
            <a className="button secondary" href={`${process.env.PUBLIC_URL || ''}/resume.html`}>
              View resume
            </a>
            <a
              className="button secondary"
              href={`${process.env.PUBLIC_URL || ''}/nischalbhandari.pdf`}
              download
            >
              Download PDF
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
