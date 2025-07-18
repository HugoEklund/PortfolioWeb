import React, { useRef, useState } from 'react';
import './App.css';
import ProjectsPage from './ProjectsPage';
import { projects } from './ProjectsData';


const App = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const heroName = 'Hugo Eklund';
    const skillsList = [
        'C# & .NET', 'REST APIs', , 'Winforms', 'Java', 'React.js', 'Python', 'SQL', 'Git', 'Agile Methodologies (Scrum & Kanban)'
    ];
    const contactEmail = 'eklund.hugo@gmail.com';
    const contactLinkedIn = 'linkedin.com/in/hugo-eklund-6003a2257';
    const contactGithub = 'github.com/HugoEklund';

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const [lastScroll, setLastScroll] = useState(null);

    const openProjectsPage = (projectId) => {
        setLastScroll(window.scrollY);
        setActiveProject(projectId);
        setShowDropdown(false);
    };

    const closeProjectsPage = () => {
        setActiveProject(null);
        setTimeout(() => {
            if (lastScroll !== null) {
                const html = document.documentElement;
                const prevScrollBehavior = html.style.scrollBehavior;
                html.style.scrollBehavior = 'auto';
                window.scrollTo({ top: lastScroll });
                html.style.scrollBehavior = prevScrollBehavior || '';
            }
        }, 0);
    };

    return (
        <>
            <div className="app-container">
                {activeProject ? (
                    <ProjectsPage projectId={activeProject} onBack={closeProjectsPage} />
                ) : (
                    <>
                        <header className="main-header">
                            <nav className="navbar">
                                <ul className="nav-links">
                                    <li>
                                        <button
                                            onClick={() => scrollToSection(aboutRef)}
                                            className="nav-button"
                                        >
                                            About Me
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => scrollToSection(skillsRef)}
                                            className="nav-button"
                                        >
                                            Skills
                                        </button>
                                    </li>
                                    <li
                                        className="projects-dropdown"
                                        onMouseEnter={() => setShowDropdown(true)}
                                        onMouseLeave={() => setShowDropdown(false)}
                                        style={{ position: 'relative' }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(projectsRef)}
                                            className="nav-button"
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.3em' }}
                                        >
                                            Projects
                                            <span className="arrow-down" style={{ fontSize: '0.8em', marginLeft: '0.2em' }}>▶</span>
                                        </button>
                                        {showDropdown && (
                                            <ul className="dropdown-menu" style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: 0,
                                                zIndex: 1001
                                            }}>
                                                {projects.map(project => (
                                                    <li key={project.id}>
                                                        <button
                                                            className="dropdown-item"
                                                            style={{
                                                                width: '100%',
                                                                background: 'none',
                                                                border: 'none',
                                                                textAlign: 'left',
                                                                padding: '0.75em 1.5em',
                                                                cursor: 'pointer'
                                                            }}
                                                            onClick={() => openProjectsPage(project.id)}
                                                        >
                                                            {project.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </header>
                        <section className="hero-section" style={{ position: 'relative' }}>
                            <div className="vignette-block" aria-hidden="true" />
                            <div className="hero-content-wrapper">
                                <div className="hero-text-content">
                                    <h1 className="hero-name">
                                        {heroName}
                                    </h1>
                                    <p className="hero-title">
                                        Software Developer & Computer Science Engineer
                                    </p>
                                    <div className="social-icons">
                                        <a href={`https://${contactGithub}`} className="social-icon" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/github.png" alt="GitHub" className="social-icon-img" />
                                        </a>
                                        <a href={`https://${contactLinkedIn}`} className="social-icon" target="_blank" rel="noopener noreferrer">
                                            <img src="/assets/linkedin.png" alt="LinkedIn" className="social-icon-img" />
                                        </a>
                                        <a href={`mailto:${contactEmail}`} className="social-icon">
                                            <img src="/assets/email.png" alt="Email" className="social-icon-img" />
                                        </a>
                                    </div>
                                </div>
                                <div className="hero-image-wrapper">
                                    <img
                                        src="/assets/selfie.png"
                                        alt="Hugo Eklund"
                                        className="hero-image"
                                    />
                                </div>
                            </div>
                        </section>
                        <section ref={aboutRef} className="about-section">
                            <div className="section-container text-center">
                                <h2 className="section-heading section-heading-blue">
                                    About Me
                                </h2>
                                <p className="about-text">
                                    I use Vim btw
                                </p>
                            </div>
                        </section>
                        <section ref={skillsRef} className="skills-section" style={{ position: 'relative' }}>
                            <div className="vignette-block" aria-hidden="true" />
                            <div className="section-container text-center">
                                <h2 className="section-heading section-heading-blue" style={{ color: '#111827' }}>
                                    My Skills
                                </h2>
                                <div className="skills-grid">
                                    {skillsList.map((skill, index) => (
                                        <div key={index} className="skill-item">
                                            <span className="skill-text">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <section ref={projectsRef} className="projects-section">
                            <div className="section-container text-center">
                                <h2 className="section-heading section-heading-blue">
                                    My Projects
                                </h2>
                                <div className="projects-grid">
                                    {projects.map(project => (
                                        <div className="project-card" key={project.id}>
                                            <div className="project-image project-image-bg"
                                                style={{
                                                    background: project.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    height: '200px'
                                                }}>
                                                <span className="project-image-title"
                                                    style={{
                                                        color: '#fff',
                                                        fontWeight: 700,
                                                        fontSize: '2rem',
                                                        letterSpacing: '0.02em'
                                                    }}>
                                                    {project.name}
                                                </span>
                                            </div>
                                            <p className="project-description">{project.description}</p>
                                            <button className="project-link" onClick={() => openProjectsPage(project.id)}>
                                                View Project &rarr;
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <footer className="main-footer">
                            <div className="section-container">
                                <button
                                    aria-label="Scroll to top"
                                    className="to-top-arrow"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <img src="/assets/arrow.svg" alt="arrow" style={{ transform: 'rotate(180deg)', width: '50px', height: '50px', display: 'block', margin: '0 auto' }} />
                                </button>
                                <span style={{ display: 'block', fontSize: '1.1rem', color: '#fff', marginTop: '0.1em', letterSpacing: '0.02em' }}>To the top</span>
                                <p style={{ marginTop: '2rem' }}>&copy; {new Date().getFullYear()} Hugo Eklund. All rights reserved.</p>
                                <p className="footer-text-secondary">Built with React and CSS. Hosted on my NAS</p>
                            </div>
                        </footer>
                    </>
                )}
            </div>
        </>
    );
};

export default App;