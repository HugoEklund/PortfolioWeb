import React, { useRef, useState } from 'react';
import './App.css';
import ProjectPage from './ProjectPage';

const App = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const heroName = 'Hugo Eklund';
    const skillsList = [
        'C#', 'Winforms', 'Java', 'React.js', 'Python', 'SQL', 'Cloud Platforms (AWS)', 'Git', 'Agile Methodologies (Scrum & Kanban)'
    ];
    const contactEmail = 'eklund.hugo@gmail.com';
    const contactLinkedIn = 'linkedin.com/in/hugo-eklund-6003a2257';
    const contactGithub = 'github.com/HugoEklund';

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const openProjectPage = (projectId) => {
        setActiveProject(projectId);
        setShowDropdown(false);
    };

    const closeProjectPage = () => {
        setActiveProject(null);
    };

    return (
        <>
            <div className="app-container">
                {activeProject ? (
                    <ProjectPage projectId={activeProject} onBack={closeProjectPage} />
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
                                                <li><button className="dropdown-item" style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', padding: '0.75em 1.5em', cursor: 'pointer' }} onClick={() => openProjectPage('project1')}>Web Application</button></li>
                                                <li><button className="dropdown-item" style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', padding: '0.75em 1.5em', cursor: 'pointer' }} onClick={() => openProjectPage('project2')}>Mobile App</button></li>
                                                <li><button className="dropdown-item" style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', padding: '0.75em 1.5em', cursor: 'pointer' }} onClick={() => openProjectPage('project3')}>Data Analysis Tool</button></li>
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
                                    <div className="hero-image-container">
                                        <img
                                            src="/assets/selfie.png"
                                            alt="Hugo Eklund"
                                            className="hero-image"
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/9CA3AF/FFFFFF?text=Photo"; } } />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section ref={aboutRef} className="about-section">
                            <div className="section-container text-center">
                                <h2 className="section-heading section-heading-blue">
                                    About Me
                                </h2>
                                <p className="about-text">
                                    I am a passionate software developer and computer science engineer with experience in modern web technologies and programming languages. I enjoy creating efficient, scalable solutions and am always eager to learn new technologies and take on challenging projects.
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
                                    <div className="project-card">
                                        <img
                                            src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Web+App"
                                            alt="Web Application"
                                            className="project-image"
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Project"; } } />
                                        <h3 className="project-title">Web Application</h3>
                                        <p className="project-description">A full-stack web application built with React and Node.js featuring user authentication and real-time data processing.</p>
                                        <button className="project-link" onClick={() => openProjectPage('project1')}>
                                            View Project &rarr;
                                        </button>
                                    </div>
                                    <div className="project-card">
                                        <img
                                            src="https://placehold.co/600x400/10B981/FFFFFF?text=Mobile+App"
                                            alt="Mobile Application"
                                            className="project-image"
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Project"; } } />
                                        <h3 className="project-title">Mobile App</h3>
                                        <p className="project-description">Cross-platform mobile application developed with modern frameworks, focusing on user experience and performance.</p>
                                        <button className="project-link" onClick={() => openProjectPage('project2')}>
                                            View Project &rarr;
                                        </button>
                                    </div>
                                    <div className="project-card">
                                        <img
                                            src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=Data+Tool"
                                            alt="Data Analysis Tool"
                                            className="project-image"
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9CA3AF/FFFFFF?text=Project"; } } />
                                        <h3 className="project-title">Data Analysis Tool</h3>
                                        <p className="project-description">Python-based data analysis tool with machine learning capabilities for processing large datasets.</p>
                                        <button className="project-link" onClick={() => openProjectPage('project3')}>
                                            View Project &rarr;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer className="main-footer">
                            <div className="section-container">
                                <p>&copy; {new Date().getFullYear()} Hugo Eklund. All rights reserved.</p>
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