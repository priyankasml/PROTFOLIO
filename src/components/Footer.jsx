import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Brand */}
        <div className="footer-brand">
          <div className="brand-header">
            <div className="brand-logo">M</div>
            <h3>Maha Lakshmi Priyanka</h3>
          </div>
          <p className="brand-desc">
            A showcase of my skills, projects, and experience as a developer.
          </p>
          <div className="social-buttons-container">
            <a href="https://github.com/priyankasml" target="_blank" rel="noreferrer" className="btn-social">GitHub</a>
            <a href="https://linkedin.com/in/mahalakshmi-priyanka-salaka-97a249328" target="_blank" rel="noreferrer" className="btn-social">LinkedIn</a>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: 2300032709cseh1@gmail.com</p>
          <p>Location: Guntur, India</p>
          <button className="btn-get-in-touch" onClick={scrollToContact}>
            Get in Touch
          </button>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2026 Maha Lakshmi Priyanka. All rights reserved.</p>
        <p>Designed and developed with <span className="heart">❤️</span></p>
      </div>

      {/* Back to Top Button */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;