import SectionWrapper from "./SectionWrapper";
import "../styles/projects.css";

const projectsData = [
  {
    name: "Sentiment Analyzer",
    description:
      "A full-stack web application that analyzes the sentiment of user input text using a deep learning model with attention mechanism. The app predicts positive, negative, or neutral sentiment and highlights important words influencing the prediction.",
    link: "https://github.com/priyankasml/sentiment-analyzer",
  },
  {
    name: "Finance B2B Anomaly Detection & Insight Dashboard",
    description:
      "AI-driven interactive dashboard for monitoring, detecting, and explaining anomalies in B2B financial time-series datasets. Combines time-series modeling, isolation-forest detection, and RAG-style LLM explanations.",
    link: "https://github.com/priyankasml/FINANCE-B2B",   // ✅ added repo link only
  },
  {
    name: "DevOps Automation for Online Art Gallery Platform",
    description:
      "Developed a complete DevOps environment automating source code integration, security scanning, containerization, deployment, and cloud monitoring. Kubernetes ensured elastic scaling for live exhibitions and bidding traffic.",
    link: "https://github.com/VallabhaneniYasaswi/GALLERY-SDP-FULLSTACK",
  },
];

const Projects = () => (
  <SectionWrapper id="projects">
    <h2 className="projects-title">Projects</h2>
    <div className="project-list">
      {projectsData.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </a>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;