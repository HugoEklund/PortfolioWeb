import React from 'react';

const projectData = {
    project1: {
        title: 'Thesis work',
        description: 'temp description',
        details: 'temp details'
    },
    project2: {
        title: 'Website',
        description: 'temp description',
        details: 'temp details'
    },
    project3: {
        title: 'temp',
        description: 'temp description',
        details: 'temp details'
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
