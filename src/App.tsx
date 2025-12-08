import {
  FiMapPin,
  FiDownload,
  FiLink,
  FiMail,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi'
import './App.css'

const skills = [
  'Python',
  'Power BI',
  'SQL',
  'Excel',
  'ETL',
  'AWS',
  'Azure',
  'Jenkins',
  'JIRA',
  'Docker',
  'GitHub',
  'Git',
  'GitLab',
  'ML Algorithms',
  'Tableau',
  'Statistics',
  'Hypothesis Testing',
  'Data Testing',
]

const certifications = [
  'Tableau, SQL, Agile & Job-Hunting Skills',
  'Complete Data Analyst Bootcamp From Basics To Advanced',
  'DevOps Jenkins Master',
  'Machine Learning with Python',
  'Power BI Data Analyst Associate Certification',
  'Google Advanced Data Analytics: Professional Certificate',
  'Excel Power Query, Power Pivot, DAX, Power BI & Power 3D Map',
  'Advanced Programming Professional & Master Data Science',
  'Deep Learning, AI, and Machine Learning by Stanford University',
]

const projects = [
  {
    title: 'Computer Vision Technique to Detect Accidents',
    meta: 'Springer · Computer Vision / Deep Learning',
    text: 'Proposed a computer vision framework using deep learning models to detect accidents from visual data, focusing on safety and real-time monitoring.',
  },
  {
    title: 'Intelligent Framework for Traffic Congestion Analysis System using DCN',
    meta: 'Book Chapter · Intelligent Transportation',
    text: 'Designed an intelligent traffic congestion analysis system using deep convolutional networks (DCN) to model road conditions and support better traffic management.',
  },
]

const experiences = [
  {
    company: 'PAPPA FLOCK',
    role: 'Data Analyst',
    location: 'Parramatta, NSW',
    dates: 'Jul 2025 – Present',
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
    dates: 'Aug 2022 – Jan 2025',
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
    title: 'Master of Information Technology',
    meta: 'Vellore Institute of Technology, Chennai · 2022',
  },
  {
    title: 'B.Tech in Computer Science',
    meta: 'Anna University, Chennai · 2019',
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
  avatar:
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80',
}

function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold text-gray-900">
            JT
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
            <a href="#research" className="hover:text-gray-900">
              Research
            </a>
            <a href="#experience" className="hover:text-gray-900">
              Experience
            </a>
            <a href="#education" className="hover:text-gray-900">
              Education
            </a>
            <a href="#skills" className="hover:text-gray-900">
              Skills
            </a>
            <a href="#certifications" className="hover:text-gray-900">
              Certs
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4 sm:items-center">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-20 w-20 rounded-2xl object-cover shadow-sm"
              />
              <div className="space-y-2">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {profile.name}
                  </h1>
                  <p className="text-lg text-gray-600">{profile.title}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin className="text-gray-500" />
                    {profile.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                <FiLink />
                Get Template
              </button>
              <a
                href="/resume-trinishia.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
                download
              >
                <FiDownload />
                Download CV
              </a>
            </div>
          </div>

          <div className="my-6 border-t border-gray-200" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FiMail className="text-gray-500" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-gray-900 hover:underline"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <a
                className="inline-flex items-center gap-2 hover:text-gray-900"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiTwitter />
                Twitter
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-gray-900"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">About me</h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-gray-700">
            <p>{profile.about}</p>
            <p>{profile.aboutDetail}</p>
          </div>
        </section>

        <section
          id="research"
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Research &amp; Publications
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-gray-200 p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{project.meta}</p>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {project.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
          <div className="mt-5 space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm"
              >
                <div className="border-l border-gray-200 pl-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FiMapPin className="text-gray-500" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="text-sm text-gray-600">{exp.dates}</span>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-700">{exp.role}</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-800">
                    {exp.bullets.map((item) => (
                      <li key={item} className="list-disc pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">Education</h2>
          <div className="mt-4 space-y-4">
            {education.map((edu) => (
              <div key={edu.title}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {edu.title}
                </h3>
                <p className="text-sm text-gray-700">{edu.meta}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Certifications
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-2 text-sm text-gray-700">
            I&apos;m open to data analyst, BI, and analytics roles across
            Australia. Feel free to reach out for opportunities, collaborations,
            or just to connect.
          </p>
          <div className="mt-4 grid gap-3 text-sm text-gray-800 sm:grid-cols-2">
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:jafflettrini@gmail.com"
                className="text-gray-900 underline"
              >
                jafflettrini@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+61435858313" className="text-gray-900 underline">
                +61 435 858 313
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 underline"
              >
                linkedin.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 underline"
              >
                github.com
              </a>
            </p>
          </div>
        </section>

        <footer className="mt-10 border-t border-gray-200 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Jafflet Trinishia. All rights reserved.
        </footer>
      </div>
    </main>
  )
}

export default App
