import SectionWrapper from "./SectionWrapper";
import "../styles/certifications.css";

const certificationsData = [
  { name: "Oracle Cloud Infrastructure", platform: "Oracle", date: "Jul 2025 - Jul 2028" },
  { name: "AWS Certified Cloud Practitioner", platform: "Amazon Web Services", date: "Jun 2025 - Jun 2028" },
  { name: "Microsoft Certified: Azure Fundamentals", platform: "Microsoft", date: "Jun 2025" },
  { name: "Azure AI Essentials Professional Certificate", platform: "Microsoft & LinkedIn", date: "Feb 2025" },
  { name: "Microsoft Azure AI Essentials: Workloads & ML on Azure", platform: "LinkedIn", date: "Feb 2025" },
  { name: "Multicloud Network Associate", platform: "Aviatrix", date: "Jan 2025 - Jan 2028" },
  { name: "OPERATING SYSTEMS", platform: "NPTEL", date: "Oct 2024" },
  { name: "PROGRAMMING IN JAVA", platform: "NPTEL", date: "Oct 2024" },
  { name: "Salesforce Certified AI Associate", platform: "Salesforce", date: "Oct 2024" },
  { name: "Linguaskill Test Report", platform: "Cambridge", date: "may 2024" },
];

const Certifications = () => (
  <SectionWrapper id="certifications">
    <h2 className="certifications-title">Licenses & Certifications</h2>
    <div className="cert-list">
      {certificationsData.map((cert, index) => (
        <div key={index} className="cert-card" style={{ animationDelay: `${index * 0.1}s` }}>
          <h3>{cert.name}</h3>
          <p className="cert-platform">{cert.platform}</p>
          <p className="cert-date">{cert.date}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;