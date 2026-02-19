import React from "react";
import "../styles/hero.css";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <span className="hero-badge">Cloud & AI Enthusiast</span>

          <h1>
          MAHA LAKSHMI  <span>PRIYANKA</span>
          </h1>

          <h2 className="typewriter">
          Developing Intelligent Applications Using Cloud, AI & Modern Web Technologies
          </h2>

          <p>
            I design and build scalable digital solutions by combining cloud
            computing, artificial intelligence, and modern web technologies.
            Focused on creating reliable, efficient, and user-centric
            applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary">View Projects</a>
            <a href="#contact" className="hero-btn outline">Contact Me</a>
            <a href="https://github.com/priyankasml" target="_blank" rel="noreferrer" className="hero-btn outline">GitHub</a>
            <a href="https://linkedin.com/in/mahalakshmi-priyanka-salaka-97a249328" target="_blank" rel="noreferrer" className="hero-btn outline">LinkedIn</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Maha Lakshmi Priyanka" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
