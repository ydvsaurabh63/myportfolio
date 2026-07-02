import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Saurabh Singh Yadav</h2>
          <p>
            MERN Stack Developer passionate about building modern,
            responsive and user-friendly web applications.
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

        

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>

          <p>Email</p>
          <span>ydvsaurabh63@gmail.com</span>

          <p>Phone</p>
          <span>+91 7523937283</span>

          <p>Location</p>
          <span>Lucknow, India</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Saurabh Singh Yadav. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;