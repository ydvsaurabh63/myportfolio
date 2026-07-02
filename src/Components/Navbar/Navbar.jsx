import "./Navbar.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          Saurabh<span>.</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="social-links">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;