import React, { useState } from 'react';

function SkillsProjects({ skills, projectList }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null); // State for selected skill
  const [skillDescriptions] = useState({
    HTML: 'A markup language for creating web pages.',
    CSS: 'A style sheet language used to style web pages.',
    PHP: 'A server-side scripting language for web development.',
    C: 'A general-purpose programming language.',
    JavaScript: 'A programming language for creating dynamic web content.',
    React: 'A JavaScript library for building user interfaces.',
    'Node.js': 'A runtime environment for executing JavaScript on the server.',
    Flutter: 'A UI toolkit for building natively compiled applications.',
    Dart: 'A programming language optimized for building UI.',
    Firebase: 'A platform for building web and mobile applications.',
    Git: 'A version control system for tracking code changes.',
    SQL: 'A language for managing and querying relational databases.',
    VSCode: 'A source code editor developed by Microsoft.',
    Sublime: 'A text editor for code, markup, and prose.',
    'Android Studio': 'An IDE for Android development.',
    FlutterFlow: 'A low-code platform for building Flutter apps.',
    Canva: 'A graphic design platform.',
    'MS Suite': 'A suite of productivity software from Microsoft.',
  });

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
  };

  const handleBAYANiClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="skills-projects-container">
      {/* Divider */}
      <div className="section-divider"></div>
      <section className="skills-section">
        <h2>Skills and Technologies</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="skill-item"
              onClick={() => handleSkillClick(skill)} // Handle skill click
            >
              {skill}
            </li>
          ))}
        </ul>

        {selectedSkill && (
          <div className="modal-overlay" onClick={closeSkillModal}>
            <div className="modal-contentskll" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedSkill}</h3>
              <p>{skillDescriptions[selectedSkill]}</p>
              <button className="close-modal-btn" onClick={closeSkillModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.subProjects ? (
                <button className="view-subprojects-btn" onClick={() => handleBAYANiClick(project)}>
                  View Sub-Projects
                </button>
              ) : (
                project.link && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedProject.name} Sub-Projects</h3>
              <p>{selectedProject.description}</p>

              <div className="projects-list">
                {selectedProject.subProjects.map((subProject, index) => (
                  <div key={index} className="project-card">
                    <h3>{subProject.name}</h3>
                    <p>{subProject.description}</p>
                    <a
                      href={subProject.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </a>
                  </div>
                ))}
              </div>

              <button className="close-modal-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default SkillsProjects;
