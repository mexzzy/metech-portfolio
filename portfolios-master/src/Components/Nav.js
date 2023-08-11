import "./Nav.css";
// import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <main className="mainNav">
      <Link className="navLinks" to="/">
      <i class="fi fi-br-house-blank"></i>
        <span>home</span>
      </Link>
      <Link className="navLinks" to="/Projects">
      <i class="fi fi-bs-code-simple"></i>
        <span>
          project
        </span>
      </Link>
      <Link className="navLinks" to="/Resume">
      <i class="fi fi-bs-document"></i>
        <span>
          resum&eacute;
        </span>
      </Link>
      <Link className="navLinks" to="/Contact">
      <i class="fi fi-bs-at"></i>
        <span >
          contact
        </span>
      </Link>
    </main>
  );
}

export default Nav;
