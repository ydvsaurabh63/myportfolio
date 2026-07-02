import "./Hero.css";
import profile from "../../assets/photo.jpeg";

function Hero() {
  return (
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

            <a href="/resume.pdf" download className="btn">
              Download CV
            </a>

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
          <h2>1+</h2>
          <p>Years Learning</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Dedication</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;