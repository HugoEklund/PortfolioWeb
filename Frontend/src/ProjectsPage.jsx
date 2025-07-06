import React from 'react';
import { projects } from './ProjectsData';

const ProjectsPage = ({ projectId, onBack }) => {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return <div style={{ color: 'white', padding: '2rem' }}>Project not found.</div>;
    
    return (
        <div className="project-page-container" style={{ color: 'white', padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
            <button onClick={onBack} style={{ marginBottom: '2rem' }}>&larr; Back</button>
            <h1 style={{ color: 'var(--accent-main)' }}>{project.name}</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{project.description}</p>
            <div style={{ color: 'var(--light-grey-text)' }}>{project.details}</div>
        </div>
    );
};

export default ProjectsPage;
