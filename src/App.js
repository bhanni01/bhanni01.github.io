import './App.css';
import photo from './assets/profile.jpeg';

const EMAIL = 'bhanni01@luther.edu';
const ESC_COMMIT = 'https://github.com/driceroland/Search/commit/ec00d49';

const sections = [
  { id: 'what-i-do', title: 'what i do' },
  { id: 'projects', title: 'projects' },
  { id: 'contact', title: 'contact' },
];

const projectGroups = [
  {
    label: 'start here',
    items: [
      {
        name: 'antenna',
        note: 'live radio from around the world, for ios. you never know what a frequency is playing until you hear it, and it learns what you care about from how you listen. no ratings, no like buttons. built at almadata, coming to the app store.',
      },
      {
        name: 'untold want',
        url: 'https://untoldwant.com',
        note: "site for a private members' travel collective. i led it alone, from design and product strategy through launch and handoff, with a cms the client runs without me.",
      },
    ],
  },
  {
    label: 'you can use these',
    items: [
      {
        name: 'boston area bestie',
        url: 'https://bostonareabestie.com',
        note: 'friend matching in boston, with an intro every wednesday.',
      },
      {
        name: 'kuonix',
        url: 'https://kuonix.bhanni01.workers.dev/',
        note: 'sorts raw photo sets by what needs correcting, before batch editing. senior capstone, team of three.',
      },
      {
        name: 'merochoice',
        url: 'https://merochoice.com',
        note: 'decision help for nepal in nepali and english: elections, banking, careers, education, stocks.',
      },
      {
        name: 'rewritekit',
        url: 'https://rewritekit.vercel.app/',
        note: 'turns rough text into usable posts, emails, summaries, and tables.',
      },
      {
        name: 'alfred_',
        url: 'https://alfred-hazel.vercel.app/',
        note: 'decides whether an ai agent should execute, confirm, clarify, or refuse, and shows every step of that decision.',
      },
      {
        name: 'activity diagram creator',
        url: 'https://bhanni01.github.io/activity_diagram/',
        note: 'draw uml activity diagrams in the browser, then export a pdf or a prompt for coding agents.',
      },
    ],
  },
  {
    label: 'you can read the code',
    items: [
      {
        name: 'search',
        url: 'https://github.com/driceroland/Search/commits?author=bhanni01',
        note: "three features that landed in office commun's small macos browser, including the esc one above.",
      },
      {
        name: 'eduagent nepal',
        url: 'https://github.com/bhanni01/eduagent',
        note: 'ai tutor for grades 4 to 7 that only answers from the syllabus, with a parent dashboard and prompt injection defenses.',
      },
      {
        name: 'coolant formulation copilot',
        url: 'https://github.com/bhanni01/coolantai',
        note: 'five agents that turn a spec for a pfas-free data center coolant into ranked formulations and a lab plan.',
      },
      {
        name: 'project tracker',
        url: 'https://github.com/bhanni01/project_manager',
        note: 'roads and bridges tracking for a nepal government engineering office, with nepali calendar dates and fiscal-year rollover.',
      },
      {
        name: 'finance tracker',
        url: 'https://github.com/bhanni01/financecs330',
        note: 'a flask app from class, taken to aws eks with terraform, docker, and ci/cd.',
      },
      {
        name: 'fillflow',
        url: 'https://github.com/bhanni01/FillFlow',
        note: 'word add-in that merges excel data into templated documents, including repeating tables.',
      },
      {
        name: 'pair strategy lab',
        url: 'https://github.com/bhanni01/almatrade',
        note: 'etf pair-trading research: signal screener, stress tests, and backtests.',
      },
      {
        name: 'swiftshift',
        url: 'https://github.com/bhanni01/swiftshift',
        note: 'product exploration: moves old websites to next.js without losing their seo signals.',
      },
      {
        name: 'ai engineering fundamentals',
        url: 'https://github.com/bhanni01/ai-engineering-fundamentals',
        note: 'an 8-hour hands-on curriculum i built on prompts, embeddings, rag, and agents.',
      },
    ],
  },
  {
    label: 'no public link',
    items: [
      {
        name: 'mayo medical imaging portal',
        note: 'joined three imaging services into one multi-tenant portal at mayo clinic, with patient data stripped in the browser before upload.',
      },
      {
        name: 'kaamcha nepal',
        note: "co-founded nepal's largest freelancing platform and built its app. 1,000+ registered freelancers.",
      },
      {
        name: 'gassplit',
        note: 'splits gas costs on shared rides, with qr friend codes, real epa mpg data, and live chat. in progress.',
      },
      {
        name: 'kind roots',
        note: 'brand, website, ad video, and social content for a plant-based food brand built on nepali sattu.',
      },
      {
        name: 'passwordlocker',
        note: 'backend for a password manager, with express, prisma, bcrypt, and jwt. in progress.',
      },
      {
        name: 'trading_systems',
        note: 'market making and time-series momentum strategies in python.',
      },
      {
        name: 'stock_tracker',
        note: 'design for a trading simulator driven by reddit sentiment.',
      },
    ],
  },
];

function External({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Section({ number, children }) {
  const { id, title } = sections[number - 1];
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <header className="running-head">
        <h2 id={`${id}-title`}>{title}</h2>
        <span aria-hidden="true">{number}</span>
      </header>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <nav className="outline" aria-label="Outline">
        <h1>nischal bhandari</h1>
        <ol>
          {sections.map((section, index) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                <span>{section.title}</span>
                <span className="outline-number" aria-hidden="true">
                  {index + 1}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <main className="sheet">
        <Section number={1}>
          <figure className="portrait">
            <img
              src={photo}
              width="800"
              height="800"
              alt="Nischal Bhandari in a navy t-shirt with arms crossed, standing in front of green trees"
            />
            <figcaption>fig. 1 me.</figcaption>
          </figure>
          <p>
            i'm nischal bhandari, a software engineer and co-founder of{' '}
            <External href="https://almadata.io">almadata</External>. i'm based
            in cambridge, ma, and open to full-time roles.
          </p>
          <p>
            i like quiet software. i keep cutting until what's left feels
            curated, then i fix the small things, like making{' '}
            <External href={ESC_COMMIT}>
              esc close a new tab you never used
            </External>
            .
          </p>
          <p>
            what i care about is how it feels to use: good, unhurried, with room
            for your own thoughts.
          </p>
          <p>
            before this i was a software engineer intern at mayo clinic, and
            before that i spent a little over two years on financial-services
            data at kingland systems, part-time during school. i studied computer
            science at luther college, class of 2026.
          </p>
        </Section>

        <Section number={2}>
          <div className="projects">
            {projectGroups.map((group) => (
              <div className="project-group" key={group.label}>
                <h3>{group.label}</h3>
                <ol>
                  {group.items.map((project) => (
                    <li key={project.name}>
                      {project.url ? (
                        <External href={project.url}>{project.name}</External>
                      ) : (
                        project.name
                      )}
                      , {project.note}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Section>

        <Section number={3}>
          <p>
            i'm open to full-time roles right now. the easiest way to reach me
            is email.
          </p>
          <ul className="contact-links">
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <External href="https://github.com/bhanni01">
                github.com/bhanni01
              </External>
            </li>
            <li>
              <External href="https://linkedin.com/in/bhanni01/">
                linkedin.com/in/bhanni01
              </External>
            </li>
          </ul>
        </Section>
      </main>
    </div>
  );
}

export default App;
