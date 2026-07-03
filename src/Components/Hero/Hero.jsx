import { useState } from "react";
import "./Hero.css";
import profile from "../../assets/photo.jpeg";

function Hero() {
  const [showCv, setShowCv] = useState(false);

  return (
    <>
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-left">

          <span className="hero-badge">Available for opportunities</span>
          <h3>Hello, I'm</h3>

          <h1>Saurabh Singh  Yadav</h1>

          <h2>MERN Stack Developer</h2>

          <p>
            Passionate Full Stack Developer with experience in building
            responsive and scalable web applications using React.js,
            Node.js, Express.js, and MongoDB.
          </p>

          <div className="hero-buttons">

            <button src="/Saurabh%20Singh%20Yadav%20Resume.pdf" type="button" className="btn" onClick={() => setShowCv(true)}>
              View CV
            </button>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="image-box">
            <img src={profile} alt="Profile" />
          </div>

        </div>

      </div>

      <div className="hero-stats">

        <div className="stat-card">
          <h2>10+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>3+</h2>
          <p>Years Learning</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Dedication</p>
        </div>

      </div>

    </section>

      {showCv && (
        <div className="cv-modal" onClick={() => setShowCv(false)}>
          <div className="cv-modal-content" onClick={(event) => event.stopPropagation()}>
            <div className="cv-modal-header">
              <h3>My CV</h3>
              <button type="button" className="cv-close-btn" onClick={() => setShowCv(false)}>
                ×
              </button>
            </div>
            <iframe
              src="/Saurabh%20Singh%20Yadav%20Resume.pdf"
              title="Saurabh Singh Yadav CV"
              className="cv-iframe"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;