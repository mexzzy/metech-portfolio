import "./Nav.css";
// import {useState} from "react"
import { Link } from "react-router-dom";
function Nav() {
  return (
    <main className="mainNav">
      <Link className="navLinks" to="/">
        home
      </Link>
      <Link className="navLinks" to="/Projects">
        projects
      </Link>
      <Link className="navLinks" to="/Resume">
        resume
      </Link>
      <Link className="navLinks" to="/Contact">
        contact
      </Link>
    </main>
  );
}

export default Nav;
