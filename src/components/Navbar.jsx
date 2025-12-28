import { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const links = ["home", "about", "skills", "projects", "certifications", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80;
      for (let id of links) {
        const section = document.getElementById(id);
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">Priyanka</h1>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
