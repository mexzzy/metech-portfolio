import { Link } from "react-router-dom";
import "../CSS page/About.css";
import ProjectOne from "../project-pages/ProjectOne";
import ProjectTwo from "../project-pages/ProjectTwo";
import html from "../images/html.png";
import css from "../images/css.png";
import scss from "../images/scss.png";
import js from "../images/js.jpg";
import react from "../images/react.jpg";
import typescript from "../images/typescript.png";
import node from "../images/node.png";
import boostrap from "../images/Bootstrap.png";
import tailwind from "../images/tailwind.jpg";

export default function About() {
  return (
    <div className="aboutMain">
      <span className="navTitle move">home</span>
      <div className="parallax">
        <div className="namingAbout">
          <div className="nameFlex">
            <span>
              samuel meshach<i className="fi fi-ss-badge-check"></i>
            </span>
            <p className="emphasis">Software developer </p>
          </div>
        </div>
      </div>
      <div className="aboutBox">
        <AboutBox />
        <div className="ProjectAboutHolder">
          <ProjectOne />
          <ProjectTwo />
          <Link to="/Projects" className="projectLink">
            more projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutBox() {
  return (
    <>
      <div className="aboutParagraph">
        Welcome to my portfolio! I'm a dedicated and enthusiastic software
        developer with a strong foundation in creating robust and scalable
        applications. My love for problem-solving and fascination with
        technology have led me on an exciting journey in the world of coding.
        <br />
        <br />
        With years of experience in the software development industry, I've had
        the privilege of working on a wide range of projects, such as crafting
        interactive web applications that power cutting-edge platforms.
        <br />
        {/* <br /> */}
        My expertise lies in React and Typescript , and I'm constantly exploring
        emerging technologies to stay at the forefront of innovation. I thrive
        in dynamic environments that challenge me to push the boundaries of
        what's possible.
        <br />
        <br />
        Throughout this portfolio, you'll find a showcase of my latest projects,
        highlighting my coding prowess, design sensibilities, and meticulous
        attention to detail. Each project is a testament to my commitment to
        delivering high-quality software solutions that meet user needs and
        exceed expectations.
        <br />
        <br />
        Collaboration is at the heart of my work, and I relish the opportunity
        to work with diverse teams to bring ideas to life. I believe in creating
        elegant and maintainable code that not only solves immediate challenges
        but also lays the foundation for future growth and scalability. I'm
        excited to connect with fellow developers, forward-thinking companies,
        and anyone who shares a passion for leveraging technology to create
        meaningful and impactful applications. Let's collaborate on the next big
        thing!
        <br />
        <br />
        Feel free to explore my projects and get in touch to discuss potential
        opportunities or simply geek out about all things software development.
        I'm looking forward to connecting with you!
      </div>

      <Link to="/Contact" className="moreBtn">
        <span>get in touch</span>
        <span></span>
      </Link>
      <div className="devLanguage">
        <span className="title">Languages</span>
        <div className="devContainer">
          <div className="lanContainer">
            <span>
              <img className="html" src={html} alt="language-icon" />
            </span>
            <span>html</span>
          </div>
          <div className="lanContainer">
            <span>
              <img className="css" src={css} alt="language-icon" />
            </span>
            <span>css</span>
          </div>
          <div className="lanContainer">
            <span>
              <img className="js" src={js} alt="language-icon" />
            </span>
            <span>javascript</span>
          </div>
          <div className="lanContainer">
            <span>
              <img className="scss" src={scss} alt="language-icon" />
            </span>
            <span>scss</span>
          </div>
          <div className="lanContainer">
            <span>
              <img className="react" src={react} alt="language-icon" />
            </span>
            <span>react.js</span>
          </div>
          <div className="lanContainer">
            <span>
              <img
                className="typescript"
                src={typescript}
                alt="language-icon"
              />
            </span>
            <span>typeScript</span>
          </div>
          <div className="lanContainer">
            <span>
              <img className="node" src={node} alt="language-icon" />
            </span>
            <span>node.js</span>
          </div>
          <div className="lanContainer">
            <span>
              <img className="tailwind" src={tailwind} alt="language-icon" />
            </span>
            <span>tailwind</span>
          </div>
          <div className="lanContainer">
            <span>
              <img className="boostrap" src={boostrap} alt="language-icon" />
            </span>
            <span>boostrap</span>
          </div>
        </div>
      </div>
    </>
  );
}
// export default Box;
