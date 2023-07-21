import "./Nav.css";
// import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <main className="mainNav">
      <Link className="navLinks" to="/">
        <i className="fi fi-sr-house-window"></i>
        <span>home</span>
      </Link>
      <Link className="navLinks" to="/Projects">
        <i className="fi fi-sr-edit-alt"></i>
        <span>
          project
        </span>
      </Link>
      <Link className="navLinks" to="/Resume">
        <i className="fi fi-sr-document"></i>
        <span>
          resum&eacute;
        </span>
      </Link>
      <Link className="navLinks" to="/Contact">
        <i className="fi fi-sr-square-phone-hangup"></i>
        <span >
          contact
        </span>
      </Link>
    </main>
  );
}

export default Nav;
