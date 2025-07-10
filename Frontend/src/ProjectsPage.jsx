import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Dark as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 
import { projects } from './ProjectsData';

const ProjectsPage = ({ projectId, onBack }) => {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return <div style={{ color: 'white', padding: '2rem' }}>Project not found.</div>;
    
    return (
        <div className="project-page-container" style={{ color: 'white', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <button onClick={onBack} style={{ marginBottom: '2rem' }}>&larr; Back</button>
            <h1 style={{ color: 'var(--accent-main)' }}>{project.name}</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{project.description}</p>
            <div className="markdown-content">
                <ReactMarkdown
                    children={project.details}
                    components={{
                        code(props) {
                            const {children, className, node, ...rest} = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    {...rest}
                                    children={String(children).replace(/\n$/, '')}
                                    style={atomOneDark}
                                    language={match[1]}
                                    PreTag="div"
                                />
                            ) : (
                                <code {...rest} className={className}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ProjectsPage;