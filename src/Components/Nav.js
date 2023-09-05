import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [homeLink, setHomeLink] = useState(false);
  const [projectLink, setProjectLink] = useState(false);
  const [resumeLink, setResumeLink] = useState(false);
  const [contactLink, seContactLink] = useState(false);

  const home = () => {
    setHomeLink(true);
    setProjectLink(false);
    setResumeLink(false);
    seContactLink(false);
  };

  const project = () => {
    setHomeLink(false);
    setProjectLink(true);
    setResumeLink(false);
    seContactLink(false);
  };

  const resume = () => {
    setHomeLink(false);
    setProjectLink(false);
    setResumeLink(true);
    seContactLink(false);
  };

  const contact = () => {
    setHomeLink(false);
    setProjectLink(false);
    setResumeLink(false);
    seContactLink(true);
  };

  return (
    <main className="mainNav">
      <Link
        className={`navLinks ${homeLink && "active"}`}
        to="/"
        onClick={home}
      >
        <i className="fi fi-br-house-blank"></i>
        <span>home</span>
      </Link>
      <Link
        className={`navLinks ${projectLink && "active"}`}
        to="/Projects"
        onClick={project}
      >
        <i className="fi fi-bs-code-simple"></i>
        <span>project</span>
      </Link>
      <Link
        className={`navLinks ${resumeLink && "active"}`}
        to="/Resume"
        onClick={resume}
      >
        <i className="fi fi-bs-document"></i>
        <span>resum&eacute;</span>
      </Link>
      <Link
        className={`navLinks ${contactLink && "active"}`}
        to="/Contact"
        onClick={contact}
      >
        <i className="fi fi-bs-at"></i>
        <span>contact</span>
      </Link>
    </main>
  );
}

export default Nav;
