import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import Menu from './Menu';
import './App.css';

function App() {
  return (
    <>
      <Menu />
      <main>
        <section id="home">
          <WelcomeContainer />
        </section>
        
        <div className="content-sections">
          <section id="about">
            <div className="section-content">
              <h2>About Me</h2>
              <div className="about-content">
                <div className="about-text">
                  <p className="intro">
                    Hello! I'm Elio, a passionate Full Stack Developer based in Portugal. With a strong foundation from Code for All_'s intensive bootcamp and hands-on experience in web development, I bring creative solutions to complex problems.
                  </p>
                  <p className="journey">
                    My journey into tech began with a fascination for problem-solving and creating impactful solutions. Through Code for All_, I've transformed this passion into expertise, mastering both front-end and back-end technologies.
                  </p>
                  <p className="approach">
                    I specialize in building robust web applications using modern technologies like Java, Spring Framework, and React. My experience includes developing RESTful APIs, implementing microservices, and creating responsive user interfaces.
                  </p>
                  <p className="interests">
                    Beyond coding, I'm deeply interested in software architecture and best practices. I believe in writing clean, maintainable code and staying current with industry trends and technologies.
                  </p>
                </div>

                <div className="about-details">
                  <div className="detail-section">
                    <h3>Education</h3>
                    <div className="detail-item">
                      <h4>Code for All_</h4>
                      <p>Full Stack Programming Bootcamp</p>
                      <p className="detail-date">2023</p>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Focus Areas</h3>
                    <ul className="focus-list">
                      <li>Full Stack Development</li>
                      <li>Web Application Architecture</li>
                      <li>RESTful API Design</li>
                      <li>Database Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects">
            <div className="section-content">
              <h2>Featured Projects</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-content">
                    <h3>Weather App</h3>
                    <p>A modern weather application that provides real-time weather information. Built with React and integrates with weather APIs to display current conditions and forecasts.</p>
                    <div className="project-tech-list">
                      <span>React</span>
                      <span>JavaScript</span>
                      <span>API Integration</span>
                      <span>CSS</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/e-boot/weather-app" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-content">
                    <h3>TCP Chat Server</h3>
                    <p>A robust TCP-based chat server implementation that enables real-time communication between multiple clients. Features include multi-client support and message broadcasting.</p>
                    <div className="project-tech-list">
                      <span>Java</span>
                      <span>TCP/IP</span>
                      <span>Networking</span>
                      <span>Multi-threading</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/e-boot/tcp-chat-server" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="section-content">
              <h2>Get in Touch</h2>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="contact-options">
                <a href="mailto:eliobotas@gmail.com" className="contact-button">
                  <i className="fas fa-envelope"></i> Email Me
                </a>
                <a href="https://linkedin.com/in/eliobotas" className="contact-button" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/e-boot" className="contact-button" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App;
