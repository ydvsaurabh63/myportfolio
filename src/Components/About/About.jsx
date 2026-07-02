import "./About.css";
import profile from "../../assets/saurabh.jpeg";
import { FaCode, FaServer, FaDatabase, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-shell">
        <div className="about-container">
          <div className="about-image">
            <div className="image-ring">
              <img src={profile} alt="Saurabh Singh Yadav" />
            </div>
          </div>

          <div className="about-content">
            <span className="about-badge">About Me</span>
            <h2>MERN Stack Developer</h2>
            <p>
              I’m Saurabh  Singh Yadav, a passionate web developer focused on building
              clean, responsive, and scalable digital experiences. I enjoy
              turning ideas into full-stack applications with modern tools like
              React, Node.js, Express, and MongoDB.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <FaCode />
                <span>Frontend development with React and modern UI</span>
              </div>
              <div className="highlight-item">
                <FaServer />
                <span>Backend APIs and server-side logic</span>
              </div>
              <div className="highlight-item">
                <FaDatabase />
                <span>Database design and data-driven applications</span>
              </div>
              <div className="highlight-item">
                <FaRocket />
                <span>Fast learning and continuous improvement</span>
              </div>
            </div>

            <div className="about-info">
              <div className="info-box">
                <h3>Name</h3>
                <span>Saurabh Singh Yadav</span>
              </div>
              <div className="info-box">
                <h3>Email</h3>
                <span>ydvsaurabh63@gmail.com</span>
              </div>
              <div className="info-box">
                <h3>Location</h3>
                <span>Lucknow, India</span>
              </div>
              <div className="info-box">
                <h3>Education</h3>
                <span>B.Tech (CSE)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;