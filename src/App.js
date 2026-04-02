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
  'AI product workflows',
  'Website remodeling and migration',
  'Decision-support experiences',
  'Security and privacy-minded tooling',
];

function App() {
  return (
    <div className="site-shell">
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
            <p className="eyebrow">Product builder and full-stack engineer</p>
            <h1>I build internet products that start messy and become usable.</h1>
            <p className="hero-text">
              I work across product thinking, interface design, backend systems, and AI
              workflows. Most of my recent projects are about taking rough inputs,
              weak flows, or stale websites and turning them into something clearer,
              more useful, and easier to trust.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                See projects
              </a>
              <a className="button secondary" href="https://github.com/bhanni01">
                GitHub
              </a>
              <a
                className="button secondary"
                href={`${process.env.PUBLIC_URL || ''}/nischalbhandari.pdf`}
                download
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
            <img className="portrait" src={myPhoto} alt="Nischal Bhandari" />
            <div className="hero-panel-copy">
              <p className="eyebrow">Current pattern</p>
              <h2>Build, review, rewire, simplify.</h2>
              <p>
                The projects in this workspace are not random experiments. They
                are different versions of the same instinct: find a broken or
                noisy workflow, tighten the system behind it, and make the
                surface understandable.
              </p>
            </div>
          </aside>
        </section>

        <section className="intro-grid">
          <article className="panel quote-panel">
            <p className="eyebrow">What I optimize for</p>
            <p className="quote">
              Products should feel intentional. They should not waste the user's
              time, burn money unnecessarily, or hide weak thinking behind
              fancy visuals.
            </p>
          </article>

          <article className="panel metrics-panel">
            <p className="eyebrow">Workspace snapshot</p>
            <div className="metrics">
              <div>
                <strong>5</strong>
                <span>serious product threads represented here</span>
              </div>
              <div>
                <strong>AI + web</strong>
                <span>is the dominant build pattern across current work</span>
              </div>
              <div>
                <strong>Product-first</strong>
                <span>most repos were reshaped around usability, not novelty</span>
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
            <h2>How I tend to work</h2>
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
            <h2>If you want to see more, start with the GitHub and the resume.</h2>
            <p>
              This site is intentionally simple: it is a portfolio of real build
              threads, not a decorative landing page.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="https://github.com/bhanni01">
              GitHub profile
            </a>
            <a
              className="button secondary"
              href={`${process.env.PUBLIC_URL || ''}/nischalbhandari.pdf`}
              download
            >
              Download resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
