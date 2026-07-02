import React, { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">

        {/* Heading */}

        <div className="contact-heading">
          <span>CONTACT</span>
          <h2>Get In Touch</h2>
          <p>
            Have a project idea or looking for a MERN Stack Developer?
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <h3>Let's Talk</h3>

            <p>
              I'm available for internships, freelance projects and
              full-time opportunities.
            </p>

            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div className="contact-text">
                <h4>Email</h4>
                <span>ydvsaurabh63@gmail.com</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div className="contact-text">
                <h4>Phone</h4>
                <span>+91 7523937283</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-text">
                <h4>Location</h4>
                <span>Lucknow, Uttar Pradesh</span>
              </div>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="contact-form">

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="send-btn">
                <FaPaperPlane />
                <span>Send Message</span>
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;