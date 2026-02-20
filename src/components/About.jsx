import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import "../styles/about.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <SectionWrapper id="about">
      <div className="about">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Greetings! I am <strong>Mahalakshmi Priyanka Salaka</strong>, a passionate Full-Stack Developer and Cloud/AI enthusiast, pursuing B.Tech CSE at KL University.
          {!showMore && "..."}
        </p>
        {showMore && (
          <p className="about-text">
            I design and build scalable digital solutions by combining full-stack development, cloud computing, DevOps, and artificial intelligence. Currently serving as President of Megha Cloud Computing Club at KL University, focusing on AI for visual intelligence including object detection and image classification. I am continuously learning and applying modern technologies to create reliable, efficient, and user-centric applications. I am eager to collaborate, contribute, and grow through meaningful technical projects and experiences.
          </p>
        )}
        <button className="read-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </SectionWrapper>
  );
};

export default About;