import { useEffect, useState } from 'react';
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
  'Full-stack engineering',
  'AI product workflows',
  'Design systems and motion',
  'Creative web interfaces',
];

function App() {
  const [pixelMode, setPixelMode] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [flyAlive, setFlyAlive] = useState(true);
  const [flyPos, setFlyPos] = useState({ x: 180, y: 160, rotation: 0 });
  const [flyDialogOpen, setFlyDialogOpen] = useState(false);
  const [flyDreamOpen, setFlyDreamOpen] = useState(false);
  const [flyDialogPos, setFlyDialogPos] = useState({ x: 180, y: 160 });

  useEffect(() => {
    if (pixelMode) {
      setFlyDialogOpen(false);
      return undefined;
    }

    if (!flyAlive) {
      return undefined;
    }

    const moveFly = () => {
      const nextX = 72 + Math.floor(Math.random() * Math.max(window.innerWidth - 220, 120));
      const nextY = 120 + Math.floor(Math.random() * Math.max(window.innerHeight - 300, 120));
      const nextRotation = -24 + Math.floor(Math.random() * 48);
      setFlyPos({ x: nextX, y: nextY, rotation: nextRotation });
    };

    moveFly();
    const intervalId = window.setInterval(moveFly, 1200);
    return () => {
      window.clearInterval(intervalId);
    };
  }, [pixelMode, flyAlive]);

  useEffect(() => {
    if (!flyDialogOpen) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setFlyDialogOpen(false);
      setFlyDreamOpen(false);
    }, flyDreamOpen ? 9000 : 12000);

    return () => window.clearTimeout(timeoutId);
  }, [flyDialogOpen, flyDreamOpen]);

  const handleFlyHit = () => {
    setFlyAlive(false);
    setFlyDialogPos({ x: flyPos.x, y: flyPos.y });
    setFlyDialogOpen(true);
    setFlyDreamOpen(false);
  };

  return (
    <div
      className={`site-shell${pixelMode ? ' pixel-mode' : ''}${!pixelMode && flyAlive ? ' fly-hunt-active' : ''}`}
      onMouseMove={(event) =>
        setCursorPos({
          x: event.clientX,
          y: event.clientY,
        })
      }
    >
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
            <span>Quest: Job Hunt</span>
            <span>Build: Full-stack + AI</span>
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
      {!pixelMode && flyAlive ? (
        <>
          <button
            type="button"
            className="fly-sprite"
            style={{
              left: `${flyPos.x}px`,
              top: `${flyPos.y}px`,
              transform: `translate(-50%, -50%) rotate(${flyPos.rotation}deg)`,
            }}
            onClick={handleFlyHit}
            aria-label="Catch the fly"
          >
            <span className="fly-sprite__wing fly-sprite__wing--left" aria-hidden="true" />
            <span className="fly-sprite__wing fly-sprite__wing--right" aria-hidden="true" />
            <span className="fly-sprite__body" aria-hidden="true" />
          </button>
          <div
            className="fly-hint"
            style={{
              left: `${flyPos.x}px`,
              top: `${flyPos.y - 54}px`,
            }}
          >
            kill me for a surprise
          </div>
          <div
            className="swatter-cursor"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
            aria-hidden="true"
          />
        </>
      ) : null}
      {!pixelMode && flyDialogOpen ? (
        <div
          className="fly-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Fly dream"
          style={{
            left: `${flyDialogPos.x}px`,
            top: `${flyDialogPos.y}px`,
          }}
        >
          <p className="fly-dialog__eyebrow">Oops</p>
          <h3>You killed it. Wanna hear my last dream?</h3>
          {flyDreamOpen ? (
            <>
              <p className="fly-dialog__dream">
                I wanted Nischal to be working with you.
              </p>
              <div className="fly-dialog__actions">
                <a className="button primary" href={`${process.env.PUBLIC_URL || ''}/resume.html`}>
                  Resume
                </a>
                <button
                  type="button"
                  className="button secondary"
                  onClick={() => {
                    setFlyDialogOpen(false);
                    setFlyDreamOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </>
          ) : (
            <div className="fly-dialog__actions">
              <button type="button" className="button primary" onClick={() => setFlyDreamOpen(true)}>
                Yes
              </button>
              <button
                type="button"
                className="button secondary"
                onClick={() => {
                  setFlyDialogOpen(false);
                  setFlyDreamOpen(false);
                }}
              >
                No
              </button>
            </div>
          )}
        </div>
      ) : null}

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
            {!pixelMode ? (
              <>
                <div className="hero-aurora" aria-hidden="true">
                  <span className="hero-aurora__band hero-aurora__band--one" />
                  <span className="hero-aurora__band hero-aurora__band--two" />
                </div>
                <div className="hero-stars" aria-hidden="true">
                  <span className="hero-star hero-star--one" />
                  <span className="hero-star hero-star--two" />
                  <span className="hero-star hero-star--three" />
                  <span className="hero-star hero-star--four" />
                </div>
              </>
            ) : null}
            <p className="eyebrow">Student builder looking for full-time roles</p>
            <h1>Mayo Clinic intern, Luther College CS student, and full-stack builder looking for the next serious team.</h1>
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
              in Decorah, Iowa, and I am looking for full-time opportunities where I
              can work on full-stack engineering, product design, and AI-powered web
              experiences. I am proficient in AI engineering, and I like interfaces with
              personality, clean systems behind them, and just enough Minecraft energy
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
              <span>Open to full-time roles</span>
              <span>Luther College</span>
              <span>AWS certified</span>
            </div>

            {!pixelMode ? (
              <div className="hero-marquee" aria-label="Selling points">
                <span>Secure AI tooling</span>
                <span>Product instinct</span>
                <span>Full-stack delivery</span>
                <span>Startup grit</span>
              </div>
            ) : null}

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

            {!pixelMode ? (
              <p className="hero-proof">
                Not looking for a decorative portfolio. Looking for a team that wants
                someone who can design, implement, and keep making the product sharper.
              </p>
            ) : null}

            <ul className="focus-list">
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel">
            {!pixelMode ? (
              <div className="hero-orbit" aria-hidden="true">
                <span className="hero-orbit__ring hero-orbit__ring--one" />
                <span className="hero-orbit__ring hero-orbit__ring--two" />
                <span className="hero-orbit__chip hero-orbit__chip--one">Mayo Clinic</span>
                <span className="hero-orbit__chip hero-orbit__chip--two">Full-stack</span>
                <span className="hero-orbit__chip hero-orbit__chip--three">AI + Product</span>
              </div>
            ) : null}
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
              <h2>Full-stack systems, product instinct, and real-world delivery.</h2>
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
                <span>projects that show how I think through product and engineering work</span>
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
            <h2>If you are hiring for full-time roles, this is the part where we should talk.</h2>
            <p>
              I am a Luther College student building toward full-stack and product
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
