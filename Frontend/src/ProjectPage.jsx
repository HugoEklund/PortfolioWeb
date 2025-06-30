import React from 'react';

const projectData = {
    project1: {
        title: 'Web Application',
        description: 'A full-stack web application built with React and Node.js featuring user authentication and real-time data processing.',
        details: 'This project demonstrates a modern web stack with authentication, real-time updates, and a scalable architecture. Technologies: React, Node.js, Express, MongoDB.'
    },
    project2: {
        title: 'Mobile App',
        description: 'Cross-platform mobile application developed with modern frameworks, focusing on user experience and performance.',
        details: 'A mobile app built with React Native, supporting both iOS and Android, with a focus on smooth UX and high performance.'
    },
    project3: {
        title: 'Data Analysis Tool',
        description: 'Python-based data analysis tool with machine learning capabilities for processing large datasets.',
        details: 'A desktop tool for data analysis, visualization, and machine learning, built with Python and popular data science libraries.'
    }
};

const ProjectPage = ({ projectId, onBack }) => {
    const project = projectData[projectId];
    if (!project) return <div style={{ color: 'white', padding: '2rem' }}>Project not found.</div>;
    return (
        <div className="project-page-container" style={{ color: 'white', padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
            <button onClick={onBack} style={{ marginBottom: '2rem' }}>&larr; Back</button>
            <h1 style={{ color: 'var(--accent-main)' }}>{project.title}</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{project.description}</p>
            <div style={{ color: 'var(--light-grey-text)' }}>{project.details}</div>
        </div>
    );
};

export default ProjectPage;
