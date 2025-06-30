import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
    const [language, setLanguage] = useState('en');

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    const content = {
        en: {
            navAbout: 'About Me',
            navSkills: 'Skills',
            navProjects: 'Projects',
            heroGreeting: 'Hi, I am',
            heroName: 'Hugo Eklund',
            heroTitle: 'Software Developer & Computer Science Engineer',
            aboutHeading: 'About Me',
            aboutText: 'I am a passionate software developer and computer science engineer with experience in modern web technologies and programming languages. I enjoy creating efficient, scalable solutions and am always eager to learn new technologies and take on challenging projects.',
            skillsHeading: 'My Skills',
            skillsList: [
                'C#', 'Java', 'React.js', 'Node.js', 'Python',
                'Git', 'SQL', 'Cloud Platforms (AWS)', 'Agile Methodologies (Scrum/Kanban)'
            ],
            projectsHeading: 'My Projects',
            project1Title: 'Web Application',
            project1Desc: 'A full-stack web application built with React and Node.js featuring user authentication and real-time data processing.',
            project2Title: 'Mobile App',
            project2Desc: 'Cross-platform mobile application developed with modern frameworks, focusing on user experience and performance.',
            project3Title: 'Data Analysis Tool',
            project3Desc: 'Python-based data analysis tool with machine learning capabilities for processing large datasets.',
            contactEmail: 'eklund.hugo@gmail.com',
            contactLinkedIn: 'linkedin.com/in/hugo-eklund-6003a2257',
            contactGithub: 'github.com/HugoEklund',
            buttonReadMore: 'Read More',
            buttonExplore: 'Explore'
        },
        sv: {
            navAbout: 'Om Mig',
            navSkills: 'Färdigheter',
            navProjects: 'Projekt',
            heroGreeting: 'Hej, jag är',
            heroName: 'Hugo Eklund',
            heroTitle: 'Mjukvaruutvecklare | Ingenjör inom Datateknik',
            aboutHeading: 'Om Mig',
            aboutText: 'Jag är en passionerad mjukvaruutvecklare och dataingenjör med erfarenhet av moderna webbteknologier och programmeringsspråk. Jag tycker om att skapa effektiva, skalbara lösningar och är alltid sugen på att lära mig nya teknologier och ta på mig utmanande projekt.',
            skillsHeading: 'Mina Färdigheter',
            skillsList: [
                'C#', 'Java', 'React.js', 'Node.js', 'Python',
                'Git', 'SQL', 'Molnplatformar (AWS)', 'Agila arbetsmetoder (Scrum/Kanban)'
            ],
            projectsHeading: 'Mina Projekt',
            project1Title: 'Webbapplikation',
            project1Desc: 'En fullstack-webbapplikation byggd med React och Node.js med användarautentisering och realtidsdatabehandling.',
            project2Title: 'Mobilapp',
            project2Desc: 'Plattformsoberoende mobilapplikation utvecklad med moderna ramverk, fokus på användarupplevelse och prestanda.',
            project3Title: 'Dataanalysverktyg',
            project3Desc: 'Python-baserat dataanalysverktyg med maskininlärningskapacitet för bearbetning av stora datamängder.',
            contactEmail: 'eklund.hugo@gmail.com',
            contactLinkedIn: 'linkedin.com/in/hugo-eklund-6003a2257',
            contactGithub: 'github.com/HugoEklund',
            buttonReadMore: 'Läs Mer',
            buttonExplore: 'Utforska'
        }
    };

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'en' ? 'sv' : 'en'));
    };

    const currentLang = content[language];

    return (
        <div className="app-container">
            <header className="main-header">
                <nav className="navbar">
                    <ul className="nav-links">
                        <li>
                            <button
                                onClick={() => scrollToSection(aboutRef)}
                                className="nav-button"
                            >
                                {currentLang.navAbout}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection(skillsRef)}
                                className="nav-button"
                            >
                                {currentLang.navSkills}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection(projectsRef)}
                                className="nav-button"
                            >
                                {currentLang.navProjects}
                            </button>
                        </li>
                        <li>
                            <button onClick={toggleLanguage} className="language-toggle-button">
                                <img
                                    src={language === 'en' ? '/assets/flagSE.png' : '/assets/flagEN.png'}
                                    alt={language === 'en' ? 'Swedish Flag' : 'English Flag'}
                                    className="social-icon-img"
                                />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="hero-section">
                <div className="hero-content-wrapper">
                    <div className="hero-text-content">
                        <h1 className="hero-name">
                            {currentLang.heroName}
                        </h1>
                        <p className="hero-title">
                            {currentLang.heroTitle}
                        </p>
                        <div className="social-icons">
                            <a href={`https://${currentLang.contactGithub}`} className="social-icon" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/github.png" alt="GitHub" className="social-icon-img" />
                            </a>
                            <a href={`https://${currentLang.contactLinkedIn}`} className="social-icon" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/linkedin.png" alt="LinkedIn" className="social-icon-img" />
                            </a>
                            <a href={`mailto:${currentLang.contactEmail}`} className="social-icon">
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
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/9CA3AF/FFFFFF?text=Photo"; }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section ref={aboutRef} className="about-section">
                <div className="section-container text-center">
                    <h2 className="section-heading section-heading-blue">
                        {currentLang.aboutHeading}
                    </h2>
                    <p className="about-text">
                        {currentLang.aboutText}
                    </p>
                </div>
            </section>

            <section ref={skillsRef} className="skills-section">
                <div className="section-container text-center">
                    <h2 className="section-heading section-heading-blue">
                        {currentLang.skillsHeading}
                    </h2>
                    <div className="skills-grid">
                        {currentLang.skillsList.map((skill, index) => (
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
                        {currentLang.projectsHeading}
                    </h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <img
                                src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Web+App"
                                alt="Web Application"
                                className="project-image"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/9CA3AF/FFFFFF?text=Project"; }}
                            />
                            <h3 className="project-title">{currentLang.project1Title}</h3>
                            <p className="project-description">{currentLang.project1Desc}</p>
                            <a href="#" className="project-link">
                                View Project &rarr;
                            </a>
                        </div>
                        <div className="project-card">
                            <img
                                src="https://placehold.co/600x400/10B981/FFFFFF?text=Mobile+App"
                                alt="Mobile Application"
                                className="project-image"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/9CA3AF/FFFFFF?text=Project"; }}
                            />
                            <h3 className="project-title">{currentLang.project2Title}</h3>
                            <p className="project-description">{currentLang.project2Desc}</p>
                            <a href="#" className="project-link">
                                View Project &rarr;
                            </a>
                        </div>
                        <div className="project-card">
                            <img
                                src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=Data+Tool"
                                alt="Data Analysis Tool"
                                className="project-image"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/9CA3AF/FFFFFF?text=Project"; }}
                            />
                            <h3 className="project-title">{currentLang.project3Title}</h3>
                            <p className="project-description">{currentLang.project3Desc}</p>
                            <a href="#" className="project-link">
                                View Project &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="main-footer">
                <div className="section-container">
                    <p>&copy; {new Date().getFullYear()} Hugo Eklund. All rights reserved.</p>
                    <p className="footer-text-secondary">Built with React and CSS.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;