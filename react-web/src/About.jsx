import React from 'react';
import './About.css';
import cvFile from './cv.pdf';

const About = ({ t }) => {
  const trans = t || {
    downloadCV: "Download CV",
    mySkills: "My Skills"
  };

  const skills = [
    { name: "React / Redux", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Git / GitHub", level: 85 }
  ];

  return (
    <div className="about-section">
      <div className="about-container">
        <h1>About Me</h1>
        
        <div className="about-content">
          {/* Basic Info */}
          <div className="about-card profile-card">
            <h2>Kadir Nuhovic</h2>
            <p className="job-title">Frontend Developer</p>
            <p className="profile-desc">
              Developer focused on frontend technologies. I have knowledge of HTML, CSS, JavaScript, and React, as well as
              experience building personal projects and working effectively in team-oriented and organized environments.
            </p>
            <a href="https://github.com/KadirNuhovic" target="_blank" rel="noopener noreferrer" className="github-link-btn">
              Visit my GitHub
            </a>
            <a href={cvFile} download="Kadir_Nuhovic_CV.pdf" className="cv-download-btn">
              {trans.downloadCV}
            </a>
          </div>
          
          {/* Experience */}
          <div className="cv-section">
            <h3>Work Experience</h3>
            <div className="cv-item">
              <h4>Physiotherapy Assistant / Technician</h4>
              <p className="cv-place">Novo Pazarska Banja • Novi Pazar, Serbia</p>
              <p className="cv-date">Sep 2023 – Jun 2025</p>
            </div>
          </div>

          {/* Education */}
          <div className="cv-section">
            <h3>Education</h3>
            <div className="cv-item">
              <h4>Bachelor’s degree in Electrical Engineering and Computer Engineering</h4>
              <p className="cv-place">Faculty of Technical Sciences • Kosovska Mitrovica</p>
              <p className="cv-date">Oct 2025 – Present</p>
            </div>
            <div className="cv-item">
              <h4>Physiotherapy Assistant / Technician</h4>
              <p className="cv-place">Medical School ''Two Heroes'' • Novi Pazar, Serbia</p>
              <p className="cv-date">Sep 2021 – Jun 2025</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="cv-section">
            <h3>Certifications</h3>
            <div className="cv-item">
              <h4>Certificate of Appreciation</h4>
              <p className="cv-place">Center for Application of New and Innovative Technologies Novi Pazar</p>
              <p>First cycle of IT Camp - Serbia 2023 - With knowledge of HTML and CSS.</p>
            </div>
            <div className="cv-item">
              <h4>Certificate of Appreciation</h4>
              <p className="cv-place">Center for Application of New and Innovative Technologies Novi Pazar</p>
              <p>Second cycle of IT Camp - Serbia 2023 - With knowledge JavaScript.</p>
            </div>
            <div className="cv-item">
              <h4>Certificate of Appreciation</h4>
              <p className="cv-place">Center for Application of New and Innovative Technologies Novi Pazar</p>
              <p>Third cycle of IT Camp - Serbia 2023 - With knowledge JavaScript and React.js.</p>
            </div>
          </div>

          {/* Courses */}
          <div className="cv-section">
            <h3>Courses</h3>
            <div className="cv-item">
              <h4>Frontend JavaScript with AI</h4>
              <p className="cv-place">IT Akademija Beograd</p>
            </div>
          </div>

          {/* Projects */}
          <div className="cv-section">
            <h3>Projects</h3>
            <div className="cv-item">
              <h4>Građani se pitaju</h4>
              <p className="cv-place">City of Novi Pazar • Novi Pazar, Serbia</p>
            </div>
          </div>

          {/* Skills */}
          <div className="cv-section">
            <h3>{trans.mySkills || "Skills"}</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`, 
                        transition: `width 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="cv-section">
            <h3>Languages</h3>
            <div className="cv-item">
              <p>English language (Advanced)</p>
              <p>Serbian language (Native)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;