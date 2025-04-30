import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'CodeCove – Real-time Code Editor',
    description: 'Collaborative code editor with Socket.IO, React, and Node.js, featuring live code sharing with hash-auth.',
    tech: ['React', 'Node.js', 'Socket.IO'],
    demoLink: 'https://www.linkedin.com/posts/aniket-v-singh_codecollaboration-realtimeeditor-webdevelopment-activity-7307062457271775232-NS3L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJqb08BD4OmhY_FvYYY8zUS7nSy3HFwNFY',
    githubLink: 'https://github.com/aniii-coder/RealTimeCodeEditor'
  },
  {
    title: 'CabGuru - Cab Price Comparator App',
    description: 'Quiz-based learning platform with analytics, chatbot and gamified UI using React + Express + MongoDB.',
    tech: ['React', 'Express', 'MongoDB'],
    demoLink: 'https://github.com/aniii-coder/CabFareComparator',
    githubLink: 'https://github.com/aniii-coder/CabFareComparator'
  },
  {
    title: 'Blog Management System',
    description: 'Full-stack blogging system with authentication and admin controls built during internship.',
    tech: ['React','Express', 'MongoDB', 'Node.js','JWT'],
    demoLink: 'https://www.linkedin.com/posts/aniket-v-singh_codtech-activity-7244770082734624768-b3vL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJqb08BD4OmhY_FvYYY8zUS7nSy3HFwNFY',
    githubLink: 'https://github.com/aniii-coder/Recipe-Management-Web-App'
  }
];

const Projects = () => {
  const handleRedirect = (url) => {
    // Validate URL before opening
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert("Link not available yet!");
    }
  };

  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="section-title text-center mb-5">My Projects</h2>
        <div className="row">
          {projects.map((proj, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="project-card h-100 shadow-sm p-3">
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                  <p className="tech-stack">
                    {proj.tech.map((tech, i) => (
                      <span className="badge bg-secondary me-2 mb-2" key={i}>
                        {tech}
                      </span>
                    ))}
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <a
                      href={proj.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="live-demo-btn"
                    >
                      Live Demo
                    </a>
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="github-btn"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
