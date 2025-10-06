import React from 'react';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa'; // Adding Java Icon
import { FaBootstrap } from 'react-icons/fa'; // Adding Bootstrap Icon
import { FaBrain } from 'react-icons/fa'; // Adding ML Icon (brain)
import { FaKey } from 'react-icons/fa'; // Adding JWT Icon (key)
import { FaPlug } from 'react-icons/fa'; // Using FaPlug as an alternative to FaSocket for WebSockets
import { SiJira, SiNextdotjs, SiSlack } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="skill-icon text-danger" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="skill-icon text-primary" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="skill-icon text-warning" /> },
  { name: 'React', icon: <FaReact className="skill-icon text-info" /> },
  { name: 'Node.js', icon: <FaNodeJs className="skill-icon text-success" /> },
  { name: 'Python', icon: <FaPython className="skill-icon text-secondary" /> },
  { name: 'MongoDB', icon: <FaDatabase className="skill-icon text-success" /> },
  { name: 'Git', icon: <FaGitAlt className="skill-icon text-danger" /> },
  { name: 'Java (Basic)', icon: <FaJava className="skill-icon text-warning" /> }, // Added Java
  { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon text-info" /> }, // Added Bootstrap
  { name: 'Machine Learning', icon: <FaBrain className="skill-icon text-success" /> }, // Added ML
  { name: 'JWT', icon: <FaKey className="skill-icon text-danger" /> }, // Added JWT
  { name: 'WebSockets', icon: <FaPlug className="skill-icon text-primary" /> }, // Replaced FaSocket with FaPlug
  {name: 'NextJs', icon:  <SiNextdotjs  size={'40px'}  color="#000"/>},
  {name: 'Slack', icon:  <SiSlack  size={'40px'}  color="#4A154B" />},
  {name: 'Jira', icon:  <SiJira  size={'40px'}  color="#0052CC" />},
];

const Skills = () => {
  return (
    <section className="skills-section py-5" id="skills">
      <div className="container text-center">
        <h2 className="section-title mb-5">Tech Stack</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="skill-card p-4 shadow-sm">
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
