import SectionWrapper from "./SectionWrapper";
import "../styles/skills.css";

const skillsData = [
  { name: "HTML", percent: 60 },
  { name: "CSS", percent: 60 },
  { name: "JavaScript", percent: 40 },
  { name: "React", percent: 50 },
  { name: "AWS", percent: 80 },
  { name: "Azure", percent: 80 },
  { name: "DSA", percent: 75 },
  { name: "Software Dev", percent: 80 },
  { name: "C", percent: 90 },
  { name: "SQL", percent: 80 },
  { name: "Java", percent: 87 }
];

const Skills = () => (
  <SectionWrapper id="skills">
    <h2 className="skills-title">Skills</h2>
    <div className="skills-grid">
      {skillsData.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-circle" style={{ "--percent": skill.percent }}>
            <span className="skill-percent">{skill.percent}%</span>
          </div>
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;