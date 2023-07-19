import {Link} from "react-router-dom"
import "../CSS page/About.css";
import ProjectOne from "../project-pages/ProjectOne";
import ProjectTwo from "../project-pages/ProjectTwo";
import html from "../images/html.png"
import css from "../images/css.png"
import scss from "../images/scss.png"
import js from "../images/js.jpg"
import react from "../images/react.jpg"
import typescript from "../images/typescript.png"
import node from "../images/node.png"
import boostrap from "../images/Bootstrap.png"
import tailwind from "../images/tailwind.jpg"

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
            <p className="emphasis">software developer </p>
          </div>
        </div>
      </div>
      <div className="aboutBox">
        <AboutBox />
        <div className="ProjectAboutHolder">
        <ProjectOne/>
        <ProjectTwo/>
        <Link to="/Projects" className="projectLink">more projects</Link>
        </div>
      </div>
    </div>
  );
}

function AboutBox() {
  return (
    <>
      <div className="aboutParagraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum.
        Nemo repellendus porro quos exercitationem, voluptas praesentium quidem
        sunt ab, a molestias debitis aliquid. Ad expedita cupiditate voluptate
        reprehenderit nostrum?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro
        labore! Earum consequatur a aliquam obcaecati et eveniet porro, libero
        iusto doloribus ab. Tempora vero esse illo dicta voluptates veniam.
      </div>

      <div className="moreBtn">
        <span>more details</span>
        <span></span>
      </div>
      <div className="devLanguage">
        <span className="title">Languages</span>
        <div className="devContainer">
          <div className="lanContainer">
            <span><img className="html" src={html} alt="language-icon"/></span>
            <span>html</span>
          </div>
          <div className="lanContainer">
            <span><img className="css" src={css} alt="language-icon"/></span>
            <span>css</span>
          </div>
          <div className="lanContainer">
            <span><img className="js" src={js} alt="language-icon"/></span>
            <span>javascript</span>
          </div>
          <div className="lanContainer">
            <span><img className="scss" src={scss} alt="language-icon"/></span>
            <span>scss</span>
          </div>
          <div className="lanContainer">
            <span><img className="react" src={react} alt="language-icon"/></span>
            <span>react.js</span>
          </div>
          <div className="lanContainer">
            <span><img className="typescript" src={typescript} alt="language-icon"/></span>
            <span>typeScript</span>
          </div>
          <div className="lanContainer">
            <span><img className="node" src={node} alt="language-icon"/></span>
            <span>node.js</span>
          </div>
          <div className="lanContainer">
            <span><img className="tailwind" src={tailwind} alt="language-icon"/></span>
            <span>tailwind</span>
          </div>
          <div className="lanContainer">
            <span><img className="boostrap" src={boostrap} alt="language-icon"/></span>
            <span>boostrap</span>
          </div>
        </div>
      </div>
    </>
  );
}
// export default Box;
