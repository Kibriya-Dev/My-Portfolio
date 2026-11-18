import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Layers3,
  Smartphone,
  Database,
  Sparkles
} from "lucide-react";

/* ===== Local Brand Icons (lucide se remove ho chuke hain) ===== */
const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const skills = [
  { name: "HTML5", type: "FRONT END" },
  { name: "CSS3", type: "FRONT END" },
  { name: "JavaScript", type: "LANGUAGE" },
  { name: "React.js", type: "FRONT END" },
  { name: "Node.js", type: "BACK END" },
  { name: "Express.js", type: "BACK END" },
  { name: "MongoDB", type: "DATABASE" },
  { name: "Supabase", type: "DATABASE / BaaS" },
  { name: "Git & GitHub", type: "TOOLS" },
  { name: "Responsive UI", type: "DESIGN" },
];

const projects = [
  {
    number: "01",
    name: "Movify",
    category: "CONTENT WEBSITE",
    description: "A multi-page entertainment website for movies, dramas, and music, built with a focus on clear navigation and a responsive layout.",
    stack: ["HTML", "CSS"],
    link: "https://kibriya-dev.github.io/movify/",
    label: "View live site",
    visual: "movify",
  },
  {
    number: "02",
    name: "Grand Cart",
    category: "E-COMMERCE CONCEPT",
    description: "A premium e-commerce experience concept using a dark green and gold visual system, designed around product discovery and a polished storefront.",
    stack: ["React", "CSS"],
    link: "https://github.com/Kibriya-Dev",
    label: "Explore GitHub",
    visual: "cart",
  },
  {
    number: "03",
    name: "FitWise",
    category: "FITNESS DASHBOARD",
    description: "A fitness app concept with dashboard sections for workouts, meals, groceries, progress, profile, and administration.",
    stack: ["React", "Vite"],
    link: "https://github.com/Kibriya-Dev",
    label: "Explore GitHub",
    visual: "fitwise",
  },
  {
    number: "04",
    name: "MediVera",
    category: "HEALTHCARE WEB APP",
    description: "A hospital management project exploring a structured interface and backend integration for healthcare workflows.",
    stack: ["React", "Supabase"],
    link: "https://github.com/Kibriya-Dev",
    label: "Explore GitHub",
    visual: "medivera",
  },
  {
    number: "05",
    name: "Surveillance AI",
    category: "DASHBOARD / TOOLING",
    description: "A web-based operational dashboard concept focused on store activity, customer visits, conversions, and payment-related reporting.",
    stack: ["React", "Node.js", "Express"],
    link: "https://github.com/Kibriya-Dev",
    label: "Explore GitHub",
    visual: "surveillance",
  },
  {
    number: "06",
    name: "HomeAssist",
    category: "TEAM HACKATHON",
    description: "A team project concept connecting users with home-service workflows, using Firebase authentication and Firestore.",
    stack: ["React", "Firebase"],
    link: "https://github.com/Kibriya-Dev",
    label: "Explore GitHub",
    visual: "homeassist",
  },
];

function ProjectArt({ type }) {
  if (type === "cart")
    return (
      <div className="art art-cart">
        <div className="cart-top">
          GRAND<span> / </span>CART
        </div>
        <div className="cart-orb" />
        <div className="cart-lines">
          <i />
          <i />
          <i />
        </div>
        <div className="art-foot">CURATED OBJECTS · EVERYDAY LUXURY</div>
      </div>
    );
  if (type === "fitwise")
    return (
      <div className="art art-fit">
        <div className="mini-sidebar">
          <b>F.</b>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="fit-main">
          <small>YOUR OVERVIEW</small>
          <strong>Make progress.</strong>
          <div className="fit-stats">
            <i />
            <i />
            <i />
          </div>
          <div className="fit-chart">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  if (type === "medivera")
    return (
      <div className="art art-med">
        <div className="med-cross">+</div>
        <div>
          <small>MEDIVERA / CARE</small>
          <strong>
            Better care,
            <br />
            connected.
          </strong>
          <div className="med-pills">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  if (type === "surveillance")
    return (
      <div className="art art-surv">
        <div className="surv-head">
          <span>LIVE OVERVIEW</span>
          <i>● SYSTEM ONLINE</i>
        </div>
        <div className="surv-metrics">
          <b>
            10<small>Walk-ins</small>
          </b>
          <b>
            05<small>Payments</small>
          </b>
          <b>
            01<small>Conversions</small>
          </b>
        </div>
        <div className="surv-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  if (type === "homeassist")
    return (
      <div className="art art-home">
        <div className="home-icon">⌂</div>
        <small>HOMEASSIST</small>
        <strong>
          Help is
          <br />
          closer than
          <br />
          you think.
        </strong>
        <div className="home-tag">SERVICE · TRUST · CARE</div>
      </div>
    );
  return (
    <div className="art art-movify">
      <div className="movify-logo">
        M<span>•</span>
      </div>
      <div className="movify-copy">
        <small>YOUR NEXT WATCH</small>
        <strong>
          Stories worth
          <br />
          staying in for.
        </strong>
        <div className="movify-chips">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="movify-side">MOVIES / DRAMAS / MUSIC</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Kibriya home"
        >
          <span className="brand-mark">
            K<span>.</span>
          </span>
          <span className="brand-name">
            KIBRIYA ASLAM<small>DEVELOPER PORTFOLIO</small>
          </span>
        </a>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>
            Work <span>01</span>
          </a>
          <a href="#about" onClick={closeMenu}>
            About <span>02</span>
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills <span>03</span>
          </a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </div>
            <h1>
              Building digital
              <br />
              experiences with <span>purpose.</span>
            </h1>
            <p className="hero-intro">
              Hey, I’m Kibriya — a front-end developer focused on creating clean,
              responsive interfaces and turning ideas into useful web
              experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>BASED IN PAKISTAN</span>
              <span className="meta-line" />
              <span>OPEN TO REMOTE WORK</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative developer graphic">
            <div className="visual-grid" />
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="visual-core">
              <span className="core-bracket">&lt;</span>
              <span className="core-slash">/</span>
              <span className="core-bracket">&gt;</span>
            </div>
            <div className="floating-card card-code">
              <span className="card-dot" /> <span>const</span> developer ={" "}
              <b>"Kibriya"</b>
            </div>
            <div className="floating-card card-stack">
              <Code2 size={15} />
              <span>React.js</span>
              <span className="stack-divider" /> <span>CSS</span>
            </div>
            <div className="visual-caption">
              <span>01 / THE APPROACH</span>
              <b>
                Thoughtful by design.
                <br />
                Built to work.
              </b>
            </div>
            <div className="visual-index">K—01</div>
          </div>
          <div className="hero-bottom">
            <span>SCROLL TO DISCOVER</span>
            <div className="scroll-line">
              <i />
            </div>
            <span>SELECTED WORK · 2026</span>
          </div>
        </section>

        <section className="section-wrap work-section" id="work">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 — SELECTED PROJECTS</div>
              <h2>
                Ideas made <span>real.</span>
              </h2>
            </div>
            <p>
              A selection of projects where I’ve practiced building interfaces,
              exploring product ideas, and solving real-world problems.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a
                  className="project-art-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                >
                  <ProjectArt type={project.visual} />
                  <span className="art-open">
                    <ArrowUpRight size={17} />
                  </span>
                </a>
                <div className="project-info">
                  <div className="project-meta">
                    <span>
                      {project.number} / {project.category}
                    </span>
                    <span className="project-arrow">↗</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-bottom">
                    <div className="tag-list">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.label} <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a
            className="all-projects"
            href="https://github.com/Kibriya-Dev"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <ArrowRight size={16} />
          </a>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-layout">
            <div className="about-stamp">
              <div className="stamp-ring">
                CURIOSITY · CRAFT · CONSISTENCY ·{" "}
              </div>
              <div className="stamp-center">
                K<span>.</span>
              </div>
              <span className="stamp-caption">
                A WORK IN PROGRESS,
                <br />
                BY DESIGN.
              </span>
            </div>
            <div className="about-copy">
              <div className="eyebrow">02 — A LITTLE ABOUT ME</div>
              <h2>
                Developer by skill.
                <br />
                <span>Problem-solver</span> by nature.
              </h2>
              <p>
                I’m a self-driven developer who enjoys learning by building. From
                multi-page websites to React app concepts, I focus on making
                interfaces that feel intuitive, look considered, and work across
                screen sizes.
              </p>
              <p>
                I’m continuing to grow my skills in modern front-end development
                while exploring backend tools and practical product workflows. I
                value curiosity, clear communication, and shipping work that
                people can actually use.
              </p>
              <a
                className="text-link"
                href="https://github.com/Kibriya-Dev"
                target="_blank"
                rel="noreferrer"
              >
                See my GitHub profile <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <div>
              <div className="eyebrow">03 — MY TOOLKIT</div>
              <h2>
                Tools for the <span>build.</span>
              </h2>
            </div>
            <p>
              My current toolkit spans responsive front-end work, React
              applications, and foundational backend development.
            </p>
          </div>
          <div className="skills-layout">
            <div className="skills-note">
              <Sparkles size={20} />
              <h3>
                Always learning.
                <br />
                Always building.
              </h3>
              <p>
                These are the technologies I’ve worked with in projects and
                practice. I’m keen to keep expanding this toolkit through real
                team experience.
              </p>
            </div>
            <div className="skills-list">
              {skills.map((skill, i) => (
                <div className="skill-row" key={skill.name}>
                  <span className="skill-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong>{skill.name}</strong>
                  <span className="skill-type">{skill.type}</span>
                  <ArrowUpRight className="skill-arrow" size={16} />
                </div>
              ))}
            </div>
          </div>
          <div className="strengths">
            <div>
              <Layers3 />
              <span>Component-driven UI</span>
            </div>
            <div>
              <Smartphone />
              <span>Responsive layouts</span>
            </div>
            <div>
              <Database />
              <span>API & data integration</span>
            </div>
            <div>
              <Code2 />
              <span>Clean, maintainable code</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="eyebrow">
              <span className="status-dot" /> 04 — HAVE A PROJECT IN MIND?
            </div>
            <h2>
              Let’s make something
              <br />
              <span>meaningful.</span>
            </h2>
            <p>
              Looking for a junior developer, an intern, or someone to
              collaborate with? I’d love to hear what you’re building.
            </p>
            <div className="contact-actions">
          <a
            className="button button-primary"
            href="https://mail.google.com/mail/?view=cm&to=kibriykhan006@gmail.com"
    target="_blank"
    rel="noreferrer"
          >
    Email me <Mail size={16} />        
  </a>

  <a
    className="button button-outline"
    href="https://www.linkedin.com/in/kibriya-khan-252b31384/"
    target="_blank"
    rel="noreferrer"
  >
    <Linkedin size={16} /> Connect on LinkedIn{" "}
    <ArrowUpRight size={15} />
  </a>
</div>
            <div className="contact-links">
              <a
                href="https://github.com/Kibriya-Dev"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/kibriya-khan-252b31384/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
              </a>
             <a
               href="https://mail.google.com/mail/?view=cm&to=kibriykhan006@gmail.com"
                 target="_blank"      
                  rel="noreferrer"
>
                <Mail size={16} /> Email <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">
            K<span>.</span>
          </span>
          <span className="brand-name">
            KIBRIYA ASLAM<small>DEVELOPER PORTFOLIO</small>
          </span>
        </a>
        <span>DESIGNED WITH INTENTION · BUILT WITH REACT</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
        <span className="copyright">© 2026 KIBRIYA ASLAM</span>
      </footer>
    </div>
  );
}

export default App;