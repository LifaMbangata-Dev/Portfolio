import './App.css'
import attendanceImage from './img/attendance.png'
import llBurgerImage from './img/ll-burger.jpg'
import resumePdf from './img/Lifa_Mbangata_Resume().pdf'
import hackathonCertificate from './img/afrihack.png'
import { useState } from 'react'
import { ValidationError, useForm } from '@formspree/react'

const skills = {
    Languages: ['Java', 'Python', 'SQL', 'TypeScript'],
    Frontend: ['React', 'Tailwind CSS', 'Vite'],
    Backend: ['Spring Boot', 'Node.js', 'Express'],
    'Tools & Platforms': ['AWS S3', 'Supabase', 'Git', 'Postman', 'Power BI'],
    Concepts: ['RESTful APIs', 'System Security', 'System Design', 'Cloud Storage', 'TDD (JUnit)'],
}

type Project = {
    number: string
    title: string
    description: string
    tags: string[]
    status: string
    liveUrl: string
    frontendUrl: string
    backendUrl: string
    highlights: string[]
    image?: string
    imageAlt?: string
    reports?: string[]
    rules?: string[]
    detailNote?: string
}

const projects: Project[] = [
    {
        number: '01',
        title: 'Employee Attendance Management System',
        description: 'A full-stack HR analytics platform for turning multi-section attendance CSVs into payroll-ready reports.',
        tags: ['React', 'TypeScript', 'Vite', 'Java 21', 'Spring Boot', 'OpenCSV', 'Docker'],
        status: 'LIVE // 2025',
        liveUrl: 'https://attendance-analyzer-web.vercel.app/',
        frontendUrl: 'https://github.com/LifaMbangata-Dev/attendance-analyzer-web',
        backendUrl: 'https://github.com/LifaMbangata-Dev/Attendance-Analyzer',
        highlights: ['Parses multi-section attendance CSV files', 'Tracks late arrivals, early departures and missing punches', 'Calculates short time, extra time and employee totals', 'Exports payroll-ready CSV reports', 'Backend tested with JUnit, Mockito and AssertJ'],
        image: attendanceImage,
        imageAlt: 'Employee Attendance Management System dashboard',
        reports: ['Late arrivals', 'Early departures', 'Missing punch records', 'Missing punches by employee', 'Incident summary by employee', 'Employee summary and dashboard statistics'],
        rules: ['Monday to Thursday: 8 hours 45 minutes with a 45-minute lunch deduction', 'Friday: 7 hours with a 30-minute lunch deduction', 'Late arrival after 08:00 and early departure before the expected time', 'Leave comments are excluded from short-time calculations', 'Weekends are ignored completely'],
        detailNote: 'Backend testing: JUnit 5, Mockito and AssertJ.',
    },
    {
        number: '02',
        title: 'LL Burger',
        description: 'A production-style full-stack burger ordering platform with real-time operations.',
        tags: ['React', 'TypeScript', 'Vite', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'RabbitMQ', 'WebSocket/STOMP', 'JWT', 'Docker'],
        status: 'LIVE',
        liveUrl: 'https://llburgers-prompt-art-rho.vercel.app/',
        frontendUrl: 'https://github.com/LifaMbangata-Dev/FoodMarket',
        backendUrl: 'https://github.com/LifaMbangata-Dev/FoodMarket',
        image: llBurgerImage,
        imageAlt: 'LL Burgers ordering site homepage',
        highlights: [
            'Implemented role-based security for CUSTOMER, ADMIN and SUPER users',
            'Built JWT access and refresh-token authentication with secure refresh handling',
            'Enabled real-time order and business updates with WebSocket/STOMP',
            'Integrated RabbitMQ for asynchronous processing and Redis for caching',
            'Designed admin workflows for catalog, users, orders and audit logs',
        ],
    },
]

function ContactForm() {
    const [state, handleSubmit] = useForm('xzezddyn')

    if (state.succeeded) {
        return <p className="form-success">Thanks for reaching out. I’ll get back to you soon.</p>
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="contact-form-row">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="contact-form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button className="contact-submit" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send message ↗'}
            </button>
        </form>
    )
}

function App() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [certificateOpen, setCertificateOpen] = useState(false)

    const openProject = (project: Project) => setSelectedProject(project)

    return (
        <main>
            <header className="site-header">
                <a className="wordmark" href="#top">LM<span>.</span></a>
                <nav>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#education">Education</a>
                    <a href="#recognition">Recognition</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a className="header-contact" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
                <button className="menu-toggle" aria-label="Toggle menu">☰</button>
            </header>

            <section className="hero" id="top">
                <div className="hero-kicker">✦ &nbsp; 1st Place AfriHack Connect Hackathon</div>
                <div className="hero-copy">
                    <h1>Lifa Mbangata</h1>
                    <p className="hero-role">
                        FULL-STACK SOFTWARE DEVELOPER <i>·</i> BACKEND DEVELOPER <i>·</i> DEVOPS ENTHUSIAST
                    </p>
                    <p className="hero-intro">
                        I design and build secure, reliable applications and the systems behind them, from database design to deployment. Based in Cape Town, open to junior developer roles.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-dark" href="#projects">↓ &nbsp; View projects</a>
                        <a className="button" href="#contact">✉ &nbsp; Contact me</a>
                        <a className="button" href={resumePdf} download="Lifa-Mbangata-CV.pdf">↓ &nbsp; Download CV</a>
                    </div>
                </div>
                <div className="hero-art" aria-hidden="true" />
                <div className="hero-bottom">
                    <span>Scroll to explore &nbsp;↓</span>
                    <span>Based in South Africa<br />Working everywhere</span>
                    <span>Available for opportunities</span>
                </div>
            </section>

            <section className="section" id="skills">
                <div className="section-heading"><span>Capabilities</span></div>
                <div className="skills-title"><h2>Skills &amp; Technologies</h2></div>
                <div className="skills-columns">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <b>{category}</b>
                            {items.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className="section projects" id="projects">
                <div className="section-heading"><span>(02) Featured Work</span><span>Live project</span></div>
                <h2 className="projects-title">Projects</h2>
                <div className="project-grid">
                    {projects.map((project) => (
                        <article
                            className="project-card"
                            key={project.number}
                            onClick={() => openProject(project)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') openProject(project)
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="project-card-meta">
                                <span>PROJECT // {project.number}</span>
                                <small>{project.status}</small>
                            </div>
                            {project.image && (
                                <img className="project-image" src={project.image} alt={project.imageAlt ?? `${project.title} preview`} />
                            )}
                            <div className="project-card-copy">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <ul className="project-highlights">
                                {project.highlights?.map((highlight) => <li key={highlight}>{highlight}</li>)}
                            </ul>
                            <div className="project-tags">
                                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                            </div>
                            <div className="project-links">
                                <span className="project-open-label">View full project ↗</span>
                                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>↗ Live Demo</a>}
                                {project.frontendUrl && <a href={project.frontendUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>⌘ Frontend GitHub</a>}
                                {project.backendUrl && <a href={project.backendUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>⌘ Backend GitHub</a>}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {selectedProject && (
                <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-detail-title">
                    <div className="project-modal-panel">
                        <button className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
                        <div className="project-modal-meta">PROJECT // {selectedProject.number} <span>{selectedProject.status}</span></div>
                        <h2 id="project-detail-title">{selectedProject.title}</h2>
                        <p className="project-modal-intro">{selectedProject.description}</p>
                        {selectedProject.image && (
                            <img className="project-modal-image" src={selectedProject.image} alt={selectedProject.imageAlt ?? `${selectedProject.title} preview`} />
                        )}
                        <div className="project-detail-grid">
                            <div>
                                <h3>What it does</h3>
                                <ul>{selectedProject.highlights?.map((item) => <li key={item}>{item}</li>)}</ul>
                            </div>
                            {selectedProject.reports && (
                                <div>
                                    <h3>Reports</h3>
                                    <ul>{selectedProject.reports.map((item) => <li key={item}>{item}</li>)}</ul>
                                </div>
                            )}
                            {selectedProject.rules && (
                                <div>
                                    <h3>Business rules</h3>
                                    <ul>{selectedProject.rules.map((item) => <li key={item}>{item}</li>)}</ul>
                                </div>
                            )}
                            <div>
                                <h3>Technology</h3>
                                <div className="project-tags">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                                {selectedProject.detailNote && <p className="project-testing">{selectedProject.detailNote}</p>}
                            </div>
                        </div>
                        <div className="project-modal-links">
                            <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer">↗ Live Demo</a>
                            <a href={selectedProject.frontendUrl} target="_blank" rel="noreferrer">⌘ Frontend GitHub</a>
                            <a href={selectedProject.backendUrl} target="_blank" rel="noreferrer">⌘ Backend GitHub</a>
                        </div>
                    </div>
                </div>
            )}

            <section className="about" id="experience">
                <div className="section-heading"><span>(03) Experience</span><span>Building, shipping, improving</span></div>
                <div className="about-grid">
                    <h2>Reliable systems, from first commit to production.</h2>
                    <div>
                        <p>I’m Lifa, a full-stack developer and DevOps enthusiast who enjoys working where backend engineering, automation and product thinking meet.</p>
                        <p>I care about CI/CD, observability, maintainable systems and technology that makes a real difference for the people using it.</p>
                    </div>
                </div>
                <article className="experience-entry">
                    <div className="experience-heading">
                        <div>
                            <h3>Software Engineer</h3>
                            <p className="experience-company">CAPACITI</p>
                        </div>
                        <div className="experience-meta">
                            <span>Jun 2025 - Jun 2026 · 1 yr 1 mo</span>
                            <span>South Africa · Hybrid</span>
                        </div>
                    </div>
                    <div className="experience-copy">
                        <p>At CAPACITI, I contribute to the design and development of full-stack web applications in a collaborative, agile environment. I work across the stack to build secure, scalable, and maintainable solutions aligned with real-world business requirements.</p>
                        <p>My responsibilities include developing RESTful APIs, implementing authentication and authorization mechanisms, designing relational and non-relational databases, and building responsive user interfaces. I collaborate closely with cross-functional teams to translate requirements into technical solutions, participate in system design discussions, and improve application performance and reliability.</p>
                        <p>I also focus on clean code, best practices, and continuous learning, while gaining hands-on experience with modern frameworks, cloud-based services, and production-ready systems.</p>
                    </div>
                </article>
            </section>

            <section className="section education" id="education">
                <div className="section-heading"><span>(04) Education</span><span>Continuous learning</span></div>
                <div className="education-grid">
                    <div>
                        <h2>DIP IN INFORMATION &amp; COMMUNICATION TECHNOLOGY IN APPLICATIONS DEVELOPMENT</h2>
                        <p className="education-period">2023 — 2025</p>
                    </div>
                    <div className="education-details">
                        <h3>Cape Peninsula University of Technology (CPUT)</h3>
                        <p className="education-location">Cape Town</p>
                        <p>Diploma graduate with a solid foundation in software development, information systems, and application design. Progressed from programming fundamentals to advanced systems design, building applications through a project-based curriculum that culminated in a final-year capstone project and presentation.</p>
                        <p className="education-study"><strong>Key areas of study:</strong> Software and applications development, information systems, networking fundamentals, professional practice, and project management</p>
                    </div>
                </div>
            </section>

            <section className="section recognition" id="recognition">
                <div className="section-heading"><span>(05) Recognition</span><span>Achievements &amp; Certifications</span></div>
                <div className="recognition-grid">
                    <div>
                        <h2>Achievements &amp; Certifications</h2>
                        <p className="recognition-year">2025</p>
                    </div>
                    <div className="recognition-details">
                        <h3>AfriHack Connect Hackathon</h3>
                        <p>Placed 1st at the 2nd Annual AfriHack Connect Hackathon, presented by Empiras Global Academy.</p>
                        <img
                            className="certificate-image"
                            src={hackathonCertificate}
                            alt="AfriHack Connect Hackathon first-place certificate awarded to Lifa Mbangata"
                            onClick={() => setCertificateOpen(true)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') setCertificateOpen(true)
                            }}
                            role="button"
                            tabIndex={0}
                        />
                    </div>
                </div>
            </section>

            {certificateOpen && (
                <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-detail-title">
                    <div className="certificate-modal-panel">
                        <button className="project-modal-close" onClick={() => setCertificateOpen(false)} aria-label="Close certificate">×</button>
                        <div className="project-modal-meta">RECOGNITION <span>AFRIHACK CONNECT HACKATHON</span></div>
                        <h2 id="certificate-detail-title">Achievements &amp; Certifications</h2>
                        <img className="certificate-modal-image" src={hackathonCertificate} alt="Full AfriHack Connect Hackathon first-place certificate awarded to Lifa Mbangata" />
                    </div>
                </div>
            )}

            <section className="contact" id="contact">
                <div className="section-heading"><span>(06) Have a project in mind?</span><span>Available for collaborations<br />and real-world projects with business value</span></div>
                <h2>Let’s build<br /><em>something useful.</em></h2>
                <ContactForm />
            </section>

            <footer>
                <span>© 2025 Lifa Mbangata</span>
                <span>Building with curiosity and care</span>
                <span>
                    <a href="https://github.com/LifaMbangata-Dev" target="_blank" rel="noreferrer">GitHub</a>
                    &nbsp; <a href="https://www.linkedin.com/in/lifa-mbangata-7b1853290/" target="_blank" rel="noreferrer">LinkedIn</a>
                </span>
            </footer>
        </main>
    )
}

export default App
