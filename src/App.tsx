import { useEffect, useMemo, useState } from 'react'
import {
  FiDownload,
  FiGithub,
  FiLinkedin as FiLinkedinIcon,
  FiMail,
  FiMapPin,
  FiArrowUpRight,
  FiMoon,
  FiSun,
  FiAward,
  FiStar,
} from 'react-icons/fi'
import profileImage from './assets/image.png'
import resumePdf from './assets/Resume - Trinishia.pdf'
import './App.css'

const mlLogo =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="mlY" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="%23facc15"/><stop offset="1" stop-color="%23e9b50c"/></linearGradient><linearGradient id="mlB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="%230f5c8a"/><stop offset="1" stop-color="%230c3f61"/></linearGradient></defs><rect width="200" height="200" rx="24" fill="transparent"/><path d="M100 26c-30 0-54 24-54 54v40c0 30 24 54 54 54V26z" fill="url(%23mlY)" stroke="%23facc15" stroke-width="2"/><path d="M100 26c30 0 54 24 54 54v40c0 30-24 54-54 54V26z" fill="url(%23mlB)" stroke="%230d3d5a" stroke-width="2"/><path d="M100 42v116" stroke="%23ffffff" stroke-opacity="0.18" stroke-width="3"/><g stroke="%23d9e8f5" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M132 58l16 14-12 18 18 12-20 14 12 20-22 12"/><circle cx="132" cy="58" r="4" fill="%23d9e8f5"/><circle cx="148" cy="72" r="4" fill="%23d9e8f5"/><circle cx="136" cy="90" r="4" fill="%23d9e8f5"/><circle cx="156" cy="102" r="4" fill="%23d9e8f5"/><circle cx="136" cy="116" r="4" fill="%23d9e8f5"/><circle cx="148" cy="136" r="4" fill="%23d9e8f5"/><circle cx="124" cy="148" r="4" fill="%23d9e8f5"/></g><path d="M84 60c-12 7-20 18-20 32 0 10 5 18 12 26-12 7-18 20-18 32 0 9 2 18 9 24" stroke="%23c48a00" stroke-width="6" fill="none" stroke-linecap="round"/></svg>'

const sqlLogo =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect width="320" height="200" rx="24" fill="%23fff"/><g fill="none" stroke="%23d16e2f" stroke-width="12"><ellipse cx="96" cy="54" rx="64" ry="26"/><path d="M32 54v70c0 14 29 26 64 26s64-12 64-26V54"/><path d="M32 92c0 14 29 26 64 26s64-12 64-26"/><path d="M32 130c0 14 29 26 64 26s64-12 64-26"/></g><g fill="%23d16e2f" font-family="Arial,Helvetica,sans-serif" font-size="78" font-weight="700" letter-spacing="3"><text x="190" y="110">SQL</text></g></svg>'

const excelLogo = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="%2328b567"/><stop offset="1" stop-color="%231f8c52"/></linearGradient><linearGradient id="sheet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="%2321a366"/><stop offset="1" stop-color="%23127440"/></linearGradient></defs><rect width="240" height="180" rx="22" fill="%23f6f8fb"/><rect x="84" y="20" width="120" height="140" rx="18" fill="url(%23sheet)"/><rect x="40" y="36" width="84" height="108" rx="12" fill="url(%23bg)"/><path fill="%23fff" d="M62 70h18l13 22 13-22h18l-22 36 22 36h-18l-13-22-13 22H62l22-36z"/></svg>`

const skillGrid = [
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Power BI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  },
  {
    name: 'SQL',
    logo: sqlLogo,
  },
  {
    name: 'Excel',
    logo: excelLogo,
  },
  {
    name: 'ETL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg',
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Azure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Jenkins',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  },
  {
    name: 'JIRA',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'GitLab',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
  },
  {
    name: 'ML',
    logo: mlLogo,
  },
  {
    name: 'Tableau',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png',
  },
  {
    name: 'Statistics',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  },
]

const certifications = [
  {
    title: 'Tableau, SQL, Agile & Job-Hunting Skills',
    tag: 'Analytics',
  },
  {
    title: 'Complete Data Analyst Bootcamp From Basics To Advanced',
    tag: 'Bootcamp',
  },
  { title: 'DevOps Jenkins Master', tag: 'DevOps' },
  { title: 'Machine Learning with Python', tag: 'ML' },
  {
    title: 'Power BI Data Analyst Associate Certification',
    tag: 'Power BI',
  },
  {
    title: 'Google Advanced Data Analytics: Professional Certificate',
    tag: 'Google',
  },
  {
    title: 'Excel Power Query, Power Pivot, DAX, Power BI & Power 3D Map',
    tag: 'Excel',
  },
  {
    title: 'Advanced Programming Professional & Master Data Science',
    tag: 'Programming',
  },
  {
    title: 'Deep Learning, AI, and Machine Learning by Stanford University',
    tag: 'AI',
  },
]

const projects = [
  {
    title: 'Computer Vision Technique to Detect Accidents',
    meta: 'Springer · Computer Vision / Deep Learning',
    text: 'Proposed a computer vision framework using deep learning models to detect accidents from visual data, focusing on safety and real-time monitoring.',
    url: 'https://books.google.co.in/books?id=7NabEAAAQBAJ&pg=PA406&lpg=PA406&dq=jafflet+trinishia&source=bl&ots=-M-h-G9h7i&sig=ACfU3U3J8JuFpVZCqyqfclOBrxPMbr1RzA&hl=en&sa=X&ved=2ahUKEwjjqPmljLKBAxUPyDgGHX27Av0Q6AF6BAghEAM#v=onepage&q=jafflet%20trinishia&f=false',
    image:
      'https://images.unsplash.com/photo-1471479917193-f00955256257?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Intelligent Framework for Traffic Congestion Analysis System using DCN',
    meta: 'Book Chapter · Intelligent Transportation',
    text: 'Designed an intelligent traffic congestion analysis system using deep convolutional networks (DCN) to model road conditions and support better traffic management.',
    url: 'https://bookstore.emerald.com/innovations-in-computational-intelligence-big-data-analytics-and-internet-of-things-hb-9798887305608.html',
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
  },
]

const experiences = [
  {
    company: 'PAPPA FLOCK',
    role: 'Data Analyst',
    location: 'Parramatta, NSW',
    dates: 'Jul 2025 - Present',
    bullets: [
      'Led a team of 10 juniors and automated manual KPI and sales reporting by building ETL workflows, integrating Redcat data, and using Python, Excel, and Power BI for analysis and visualisation.',
      'Built an AWS-powered receipt automation tool (S3, Lambda, Textract) that improved data extraction accuracy, reduced manual entry by 80%, and streamlined internal processes.',
      'Developed Python scripts and advanced Excel models (pivot tables, formulas, validation rules) to clean, transform, and analyse large datasets, reducing reporting time by 40% and improving accuracy by 30%.',
      'Created automated Power BI dashboards and data pipelines that enhanced sales and operational visibility by 45%, supporting fast, data-driven decisions across the business.',
      'Designed scalable reporting systems and data workflows that saved 3-4 hours weekly, eliminated bottlenecks, and improved overall operational efficiency.',
    ],
  },
  {
    company: 'KONE Elevators Pty Limited',
    role: 'Data Analytical Engineer',
    location: 'Chennai, TN',
    dates: 'Aug 2022 - Jan 2025',
    bullets: [
      'Built Power BI and Tableau dashboards that improved executive visibility into financial and operational KPIs.',
      'Automated data transformation and validation with Python, increasing reporting accuracy by 30%.',
      'Developed robust SQL-based ETL pipelines that streamlined data integration across multiple systems.',
      'Partnered with cross-functional teams to deliver reliable, audit-ready financial and operational reporting.',
      'Strengthened data governance through validation rules, audit logs, and access controls.',
      'Applied exploratory data analysis (EDA) and ML techniques to detect anomalies and optimise business processes.',
      'Improved project delivery efficiency by contributing to Agile sprints using JIRA.',
      'Supported automation and reporting workflows using AWS, Azure, and Jenkins.',
      'Advanced from Intern to Analytical Engineer in three years through high-impact analytical work.',
    ],
  },
]

const education = [
  {
    title: 'Master of Technology, Computer Science',
    meta: 'VIT University',
    finish: 'Finished 2022',
    bullets: [
      'Research & Analytics Lead, Data Analytics Club: guided teams on ML workflows, evaluation, and data prep.',
      'Reviewed projects to improve model performance and research rigor; boosted collaboration and participation.',
      'Completed ML, deep learning, and computer vision projects; published work on traffic congestion and accident detection.',
      'Recognised as University Rank Holder.',
    ],
  },
  {
    title: 'Bachelor of Engineering',
    meta: "St Joseph's College of Engineering",
    finish: 'Finished 2019',
    bullets: [
      'Active in Google Student Club: organised workshops and events to onboard peers to Google tools.',
      'Coordinated with Google mentors and GDG members to run competitions and skill-building sessions.',
      'Helped increase tech engagement on campus and supported students in developing ideas with confidence.',
    ],
  },
]

const profile = {
  name: 'Jafflet Trinishia',
  title: 'Data Analyst @ PAPPA FLOCK',
  location: 'Sydney, Australia',
  email: 'jafflettrini@gmail.com',
  phone: '+61 435 858 313',
  about:
    "I'm a data analyst with experience across hospitality and engineering domains, specialising in building ETL workflows, automating reporting, and designing dashboards that support data-driven decisions.",
  aboutDetail:
    "I've led teams, delivered scalable reporting systems, and implemented automation that cuts hours of manual work each week. I enjoy turning messy, high-volume data into reliable, actionable insights using Python, SQL, Power BI, and modern cloud tools.",
  avatar: profileImage,
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
]

const testimonials = [
  {
    quote:
      'The dashboards and automation drastically improved our reporting cadence. Clear, concise, and reliable.',
    name: 'Priya N.',
    role: 'Ops Lead',
    rating: 4,
  },
  {
    quote:
      'Loved the clean visuals and the way insights were surfaced. We could spot trends in minutes.',
    name: 'Dev K.',
    role: 'Product Manager',
    rating: 4,
  },
  {
    quote:
      'ETL workflows were rock solid and documentation was on point. Reduced manual checks by a mile.',
    name: 'Sam R.',
    role: 'Data Engineer',
    rating: 3,
  },
  {
    quote:
      'Great collaboration and thoughtful analysis. Stakeholders finally trust the numbers every sprint.',
    name: 'Lina T.',
    role: 'Scrum Master',
    rating: 5,
  },
  {
    quote:
      'Clear storytelling with data—executives leaned in. Automation saved hours every week.',
    name: 'Marcus L.',
    role: 'Director',
    rating: 5,
  },
]

const loopingTestimonials = [...testimonials, ...testimonials]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [certsVisible, setCertsVisible] = useState(false)
  const palette = useMemo(
    () => (theme === 'dark' ? 'theme-dark' : 'theme-light'),
    [theme],
  )
  const resumeUrl = resumePdf

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal'),
    )

    const certSentinel = document.getElementById('skills-sentinel')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    revealElements.forEach((el) => observer.observe(el))
    let certObserver: IntersectionObserver | undefined
    if (certSentinel) {
      certObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCertsVisible(true)
            }
          })
        },
        { threshold: 0.1 },
      )
      certObserver.observe(certSentinel)
    }

    return () => {
      observer.disconnect()
      certObserver?.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light')
    document.body.classList.toggle('theme-dark', theme === 'dark')
  }, [theme])

  return (
    <main id="top" className={`page ${palette}`}>
      <div className="page-wrapper">
        <aside className="sidebar">
          <div className="sidebar-header">
            <a
              className="avatar-link"
              href="https://github.com/Jafflet-Trinishia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={profile.avatar} alt={profile.name} className="avatar" />
            </a>
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="sidebar-name">{profile.name}</h2>
            </div>
          </div>
          <div className="menu-label">Menu</div>
          <nav className="menu">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="menu-item">
                <span className="menu-dot" />
                <span>{item.label}</span>
                <span className="menu-more">•••</span>
              </a>
            ))}
          </nav>
          <div className="menu-footer">Scroll to explore</div>
        </aside>

        <section className="content">
          <div className="card hero-card reveal">
            <div className="hero-top">
              <div className="hero-id">
                <a
                  className="avatar-link"
                  href="https://github.com/Jafflet-Trinishia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="avatar"
                  />
                </a>
                <div>
                  <h1 className="hero-name">{profile.name}</h1>
                  <p className="hero-role">{profile.title}</p>
                  <div className="hero-meta">
                    <span className="meta-item">
                      <FiMapPin />
                      {profile.location}
                    </span>
                    <span className="badge">
                      <span className="dot" />
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
              <div className="hero-actions">
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? <FiSun /> : <FiMoon />}
                  {theme === 'dark' ? 'Light theme' : 'Dark theme'}
                </button>
                <a
                  href={resumeUrl}
                  download
                  className="btn primary"
                >
                  <FiDownload />
                  Download CV
                </a>
              </div>
            </div>
            <div className="hero-links">
              <div className="hero-contact">
                <FiMail />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="hero-social">
                <a
                  href="https://github.com/Jafflet-Trinishia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jafflet-trinishia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedinIcon />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="stack">
            <section id="about" className="card reveal">
              <h2 className="section-title">About me</h2>
              <p className="section-text">{profile.about}</p>
              <p className="section-text">{profile.aboutDetail}</p>
            </section>

            <section id="research" className="card reveal">
              <div className="pub-header">
                <h2 className="section-title">Publications</h2>
                <a className="pub-link" href="#publications">
                  View all <FiArrowUpRight />
                </a>
              </div>
              <div className="pub-grid">
                {projects.map((project) => (
                  <article key={project.title} className="pub-card reveal">
                    <div
                      className="pub-thumb"
                      aria-hidden
                      style={
                        project.image
                          ? { backgroundImage: `url(${project.image})` }
                          : undefined
                      }
                    />
                    <div className="pub-body">
                      <h3 className="pub-title">{project.title}</h3>
                      <p className="pub-meta">{project.meta}</p>
                      <p className="pub-text">{project.text}</p>
                    </div>
                    <a
                      className="pub-cta"
                      href={project.url || '#'}
                      target={project.url ? '_blank' : '_self'}
                      rel={project.url ? 'noreferrer' : undefined}
                    >
                      <span>Read more</span>
                      <FiArrowUpRight />
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section id="experience" className="card reveal">
              <h2 className="section-title">Experience</h2>
              <div className="experience-list">
                {experiences.map((exp) => (
                  <div key={exp.company} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-top">
                        <span className="meta-item">
                          <FiMapPin />
                          {exp.location}
                        </span>
                        <span className="dates">{exp.dates}</span>
                      </div>
                      <h3 className="experience-role">{exp.company}</h3>
                      <p className="company">{exp.role}</p>
                    </div>
                    <ul>
                      {exp.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="testimonials" className="card reveal testimonials-panel">
              <div className="testimonials-header">
                <span className="eyebrow">Voices</span>
                <h2 className="section-title">What people say</h2>
              </div>
              <div className="testimonial-mask">
                <div className="testimonial-track auto-loop">
                  {loopingTestimonials.map((item, idx) => (
                    <article key={`${item.quote}-${idx}`} className="testimonial-card">
                      <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <FiStar
                            key={starIdx}
                            className={starIdx < item.rating ? 'star active' : 'star'}
                            aria-hidden
                          />
                        ))}
                      </div>
                      <p className="testimonial-quote">“{item.quote}”</p>
                      <div className="testimonial-meta">
                        <span className="testimonial-name">{item.name}</span>
                        <span className="testimonial-role">{item.role}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="education" className="card reveal">
              <h2 className="section-title">Education</h2>
              <div className="education-list">
                {education.map((edu) => (
                  <div key={edu.title} className="education-item">
                    <h3 className="education-title">{edu.title}</h3>
                    <div className="education-header-top">
                      <p className="education-meta">{edu.meta}</p>
                      {edu.finish && <span className="dates">{edu.finish}</span>}
                    </div>
                    {edu.bullets && (
                      <ul className="education-bullets">
                        {edu.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section id="skills" className="card reveal">
              <div className="skill-banner">
                <div className="skill-side-tab">
                  <span className="skill-side-text">Skills</span>
                </div>
                <div className="skill-main">
                  <div className="skill-head">
                    <h2 className="skill-title">What I do</h2>
                  </div>
                  <div className="skill-grid">
                    {skillGrid.map((skill) => (
                      <div key={skill.name} className="skill-card">
                        <div className="skill-card-icon">
                          <img src={skill.logo} alt={skill.name} />
                        </div>
                        <div className="skill-card-name">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div id="skills-sentinel" />

            <section
              id="certifications"
              className={`card reveal ${certsVisible ? 'cert-visible' : 'cert-locked'}`}
            >
              <h2 className="section-title">Certifications</h2>
              <div className="cert-grid">
                {certifications.map((cert) => (
                  <div key={cert.title} className="cert-card">
                    <div className="cert-icon">
                      <FiAward />
                    </div>
                    <div className="cert-body">
                      <p className="cert-title">{cert.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <footer className="footer">© {new Date().getFullYear()} Jafflet Trinishia</footer>
        </section>
      </div>
    </main>
  )
}

export default App
