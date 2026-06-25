import { useEffect, useState } from 'react';
import './App.css';
import myPhoto from './assets/me.jpg';

const pub = process.env.PUBLIC_URL || '';

/* ── scroll-reveal hook ── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = Number(e.target.dataset.delay || 0);
            setTimeout(() => e.target.classList.add('revealed'), delay);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const featuredProjects = [
  {
    id: 'eduagent',
    tagline: 'AI tutoring platform',
    name: 'EduAgent Nepal',
    summary:
      'RAG-powered student chatbot locked to curriculum content via ChromaDB, with a real-time parent dashboard built on OpenAI tool-call APIs. Includes prompt injection defenses and full security audit logging.',
    stack: ['Python', 'FastAPI', 'OpenAI', 'ChromaDB', 'RAG', 'React', 'SQLite'],
    screenshot: `${pub}/screenshots/eduagent-chat.png`,
    screenshotAlt: 'EduAgent Nepal student chat showing RAG curriculum restriction',
  },
  {
    id: 'finance',
    tagline: 'Flask app shipped to AWS EKS end-to-end',
    name: 'Finance Tracker + DevOps Pipeline',
    summary:
      'A personal finance web app taken through a full production DevOps lifecycle: Dockerized with gunicorn, CI/CD via GitHub Actions pushing to Amazon ECR, deployed to a Terraform-provisioned EKS cluster with rolling deploys.',
    stack: ['Flask', 'Docker', 'Kubernetes', 'AWS EKS', 'Terraform', 'GitHub Actions'],
    screenshot: `${pub}/screenshots/finance-aws.png`,
    screenshotAlt: 'Finance Tracker running on AWS EKS via LoadBalancer',
  },
  {
    id: 'ai-rag',
    tagline: 'LLMs, RAG, and tool-use agents — built from scratch',
    name: 'AI Engineering Curriculum',
    summary:
      'An 8-hour hands-on curriculum: LLM API basics, zero-shot / few-shot / chain-of-thought prompting, embedding-based semantic search, a complete RAG pipeline, and a production-style support agent with tool use and multi-turn conversation memory.',
    stack: ['Python', 'Anthropic Claude', 'RAG', 'ChromaDB', 'Tool Use', 'Embeddings'],
    screenshot: null,
  },
];

const moreProjects = [
  {
    name: 'alfred_',
    status: 'Live',
    url: 'https://alfred-hazel.vercel.app/',
    summary:
      'Agentic decision pipeline: deterministic signal extraction decides EXECUTE, CONFIRM, CLARIFY, or REFUSE before the LLM is called — with prompt injection resistance and a full observability UI.',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'Zod'],
  },
  {
    name: 'Alma',
    status: 'Live',
    url: 'https://almadata.io',
    summary:
      'Dental market intelligence platform: maps every competing practice in a client\'s area, identifies patient demand gaps by procedure and zip code, then executes precision paid ads, SEO, and Google Maps campaigns — with a guaranteed monthly lead target in writing.',
    stack: ['Market Intelligence', 'Paid Ads', 'Local SEO', 'Lead Attribution'],
  },
  {
    name: 'Kuonix',
    status: 'Live',
    url: 'https://kuonix.bhanni01.workers.dev/',
    summary:
      'Local-first RAW image triage for photographers. Issue-aware sorting by exposure, white balance, contrast, and color before batch editing. Senior CS capstone, team of three.',
    stack: ['Next.js', 'TypeScript', 'Cloudflare Workers'],
  },
  {
    name: 'RewriteKit',
    status: 'Live',
    url: 'https://rewritekit.vercel.app/',
    summary:
      'REST endpoints behind structured AI rewrite workflows — LinkedIn posts, emails, summaries, tables — with freemium gating and iterative refinement actions.',
    stack: ['Next.js', 'OpenAI', 'TypeScript', 'Stripe'],
  },
  {
    name: 'Project Tracker',
    status: 'Complete',
    url: null,
    summary:
      'Full-stack app for a Nepal Government engineering office tracking Roads and Bridges across fiscal years — role-aware auth, atomic fiscal-year rollover, Nepali calendar dates, and five Excel export templates.',
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth.js', 'Vitest'],
  },
  {
    name: 'GasSplit',
    status: 'In progress',
    url: null,
    summary:
      'React Native gas-cost splitting app: QR friend codes, real EPA MPG data, Supabase real-time chat, and push notifications via Edge Functions.',
    stack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
  },
];

const RAG_CODE = `client = anthropic.Anthropic()
collection = chroma.get_collection("syllabus")

# semantic retrieval
results = collection.query(
  query_texts=[user_question],
  n_results=5
)
context = "\\n".join(results["documents"][0])

# augment and generate
response = client.messages.create(
  model="claude-opus-4-8",
  system="Only answer from provided context.",
  messages=[{
    "role": "user",
    "content": f"{context}\\n\\n{user_question}"
  }]
)`;

function App() {
  const [pixelMode, setPixelMode] = useState(false);
  useScrollReveal();

  return (
    <div className={`site${pixelMode ? ' pixel' : ''}`}>
      {pixelMode && (
        <div className="pixel-bg" aria-hidden="true">
          <div className="pixel-bg__sky" />
          <div className="pixel-bg__sun" />
          <div className="pixel-bg__cloud pixel-bg__cloud--a" />
          <div className="pixel-bg__cloud pixel-bg__cloud--b" />
          <div className="pixel-bg__ridge pixel-bg__ridge--back" />
          <div className="pixel-bg__ridge pixel-bg__ridge--front" />
          <div className="pixel-bg__ground" />
          <div className="pixel-bg__hud">
            <span>Biome: Decorah Plains</span>
            <span>Quest: Job Hunt</span>
            <span>Build: AI + Full-stack</span>
          </div>
        </div>
      )}

      <header className="header">
        <a className="wordmark" href="#top">Nischal Bhandari</a>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href={`${pub}/resume.html`}>Resume</a>
          <button
            className="pixel-toggle"
            type="button"
            onClick={() => setPixelMode((m) => !m)}
            aria-pressed={pixelMode}
            title="Toggle pixel mode"
          >
            {pixelMode ? '◼' : '◻'}
          </button>
        </nav>
      </header>

      <main id="top">
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <p className="eyebrow hero-anim-1">
            AI engineer · Full-stack · Open to full-time
          </p>
          <h1 className="hero-anim-2">
            Fine-tuning models.<br />Shipping full-stack products.
          </h1>
          <p className="hero-lead hero-anim-3">
            I build and fine-tune language models, engineer RAG pipelines, and ship
            secure full-stack systems into production. Currently at Mayo Clinic — looking
            for a team where AI engineering meets real product impact.
          </p>
          <div className="hero-actions hero-anim-4">
            <a className="btn btn--primary" href="#work">See work</a>
            <a
              className="btn btn--outline"
              href="https://github.com/bhanni01"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="btn btn--outline" href={`${pub}/resume.html`}>
              Resume
            </a>
          </div>
          <div className="status-chips hero-anim-5">
            <span>Mayo Clinic intern</span>
            <span>AI engineer</span>
            <span>Fine-tuning</span>
            <span>Open to full-time</span>
          </div>
        </section>

        {/* ── FEATURED WORK ── */}
        <section className="section" id="work">
          <p className="eyebrow" data-reveal>Selected work</p>
          <h2 data-reveal data-delay="80">Featured projects</h2>

          <div className="featured-grid">
            {featuredProjects.map((p, i) => (
              <article
                className="featured-card"
                key={p.id}
                data-reveal
                data-delay={i * 90}
              >
                <div className="featured-card__visual">
                  {p.screenshot ? (
                    <img
                      src={p.screenshot}
                      alt={p.screenshotAlt}
                      className="featured-card__img"
                    />
                  ) : (
                    <div className="code-preview" aria-hidden="true">
                      <div className="code-preview__bar">
                        <span /><span /><span />
                      </div>
                      <pre className="code-preview__body">{RAG_CODE}</pre>
                    </div>
                  )}
                </div>
                <div className="featured-card__body">
                  <p className="featured-card__tag">{p.tagline}</p>
                  <h3 className="featured-card__name">{p.name}</h3>
                  <p className="featured-card__summary">{p.summary}</p>
                  <div className="tag-row">
                    {p.stack.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <hr className="section-divider" />

          <h2 data-reveal>More work</h2>
          <div className="more-grid">
            {moreProjects.map((p, i) => (
              <article
                className="project-card"
                key={p.name}
                data-reveal
                data-delay={i * 60}
              >
                <div>
                  <p className="project-status">{p.status}</p>
                  <h3 className="project-name">{p.name}</h3>
                </div>
                <p className="project-summary">{p.summary}</p>
                <div className="tag-row">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                {p.url && (
                  <a
                    className="project-link"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="section about-section" id="about">
          <p className="eyebrow" data-reveal>About</p>
          <div className="about-grid">
            <div className="about-copy" data-reveal data-delay="80">
              <h2>How I build</h2>
              <p>
                I prefer systems that stay cheap, observable, and simple before they
                become clever. Most of my recent work sits at the intersection of AI
                engineering — fine-tuning, RAG, and agentic pipelines — and secure
                full-stack delivery.
              </p>
              <p>
                I am a Luther College CS student finishing up May 2026, looking for
                full-time roles where I can build meaningful AI products with a team
                that cares about craft.
              </p>
              <ul className="focus-list">
                {['AI fine-tuning & RAG', 'Full-stack engineering', 'Cloud infrastructure', 'Security-aware design'].map((item, i) => (
                  <li key={item} data-reveal data-delay={200 + i * 60}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-photo-col" data-reveal data-delay="160">
              <img src={myPhoto} alt="Nischal Bhandari" className="portrait" />
              <p className="about-caption">
                Luther College · Decorah, Iowa
                <br />
                Mayo Clinic · Rochester, MN
              </p>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="contact-section" id="contact">
          <p className="eyebrow" data-reveal>Contact</p>
          <h2 data-reveal data-delay="80">Let's talk.</h2>
          <p className="contact-lead" data-reveal data-delay="160">
            If you are hiring for full-time engineering roles, I would like to hear from you.
            Book a 30-minute call below or reach out directly.
          </p>
          <div className="contact-actions" data-reveal data-delay="220">
            <a className="btn btn--primary" href="mailto:bhanni01@luther.edu">
              Send email
            </a>
            <a
              className="btn btn--outline"
              href="https://linkedin.com/in/bhanni01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn--outline"
              href="https://github.com/bhanni01"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="btn btn--outline" href={`${pub}/resume.html`}>
              Resume
            </a>
          </div>
          <div className="calendly-wrap" data-reveal data-delay="300">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/iamnischalbhandari/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Nischal Bhandari · {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
