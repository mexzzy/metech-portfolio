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
import boostrap from "../images/Bootstrap.png";
import tailwind from "../images/tailwind.jpg";
import next from "../images/nextjs.jpg";
import { useState } from "react";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="aboutMain">
      <Slide>
        <span className="navTitle move">home</span>
      </Slide>
      <div className="parallax">
        <div className="namingAbout">
          <div className="nameFlex">
            <Slide direction="up">
              <span>
                samuel meshach<i className="fi fi-ss-badge-check"></i>
              </span>
              <p className="emphasis">SOFTWARE DEVELOPER </p>
            </Slide>
          </div>
        </div>
      </div>
      <div className="aboutBox">
        <AboutBox />
        <div className="ProjectAboutHolder">
          <Zoom>
            <ProjectOne />
            <ProjectTwo />
          </Zoom>
          <Bounce>
            <Link to="/Projects" className="projectLink">
              more projects
            </Link>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

function AboutBox() {
  const [paragraph, setParagraph] = useState(false);
  const paragraphBtn = () => {
    setParagraph(!paragraph);
  };
  return (
    <>
      <Fade>
        <div className="aboutParagraph">
          <p>
            Welcome to my portfolio! I'm a dedicated and enthusiastic software
            developer with a strong foundation in creating robust and scalable
            applications. My love for problem-solving and fascination with
            technology have led me on an exciting journey in the world of
            coding.
          </p>
          <p>
            With years of experience in the software development industry, I've
            had the privilege of working on a wide range of projects, such as
            crafting interactive web applications that power cutting-edge
            platforms.
            <br />
            My expertise lies in React and Typescript , and I'm constantly
            exploring emerging technologies to stay at the forefront of
            innovation. I thrive in dynamic environments that challenge me to
            push the boundaries of what's possible.
          </p>
          <div className={`moreP ${paragraph ? "showPara" : "hidePara"}`}>
            <p>
              Throughout this portfolio, you'll find a showcase of my latest
              projects, highlighting my coding prowess, design sensibilities,
              and meticulous attention to detail. Each project is a testament to
              my commitment to delivering high-quality software solutions that
              meet user needs and exceed expectations.
            </p>

            <p>
              Collaboration is at the heart of my work, and I relish the
              opportunity to work with diverse teams to bring ideas to life. I
              believe in creating elegant and maintainable code that not only
              solves immediate challenges but also lays the foundation for
              future growth and scalability. I'm excited to connect with fellow
              developers, forward-thinking companies, and anyone who shares a
              passion for leveraging technology to create meaningful and
              impactful applications. Let's collaborate on the next big thing!
            </p>

            <p>
              Feel free to explore my projects and get in touch to discuss
              potential opportunities or simply geek out about all things
              software development. I'm looking forward to connecting with you!
            </p>
          </div>
          <div className="btnParagraph" onClick={paragraphBtn}>
            {paragraph ? "show less" : "show more"}
          </div>
        </div>
      </Fade>

      <Link to="/Contact" className="moreBtn">
        <span>get in touch</span>
      </Link>
      <div className="devLanguage">
        {/* <Zoom> */}
        <span className="title">Languages/Frameworks</span>
        <div className="devContainer">
          <Bounce>
            <div className="lanContainer">
              <span>
                <img src={html} alt="language-icon" />
              </span>
              <span>html</span>
            </div>
          </Bounce>
          <Bounce>
          <div className="lanContainer">
            <span>
              <img src={css} alt="language-icon" />
            </span>
            <span>css</span>
          </div>
          </Bounce>
<Bounce>
          <div className="lanContainer">
            <span>
              <img src={js} alt="language-icon" />
            </span>
            <span>javascript</span>
          </div>
          </Bounce>
<Bounce>
          <div className="lanContainer">
            <span>
              <img src={scss} alt="language-icon" />
            </span>
            <span>scss</span>
          </div>
          </Bounce>
<Bounce>
          <div className="lanContainer">
            <span>
              <img src={tailwind} alt="language-icon" />
            </span>
            <span>tailwind</span>
          </div>
          </Bounce>
<Bounce>
          <div className="lanContainer">
            <span>
              <img src={boostrap} alt="language-icon" />
            </span>
            <span>boostrap</span>
          </div>
          </Bounce>
          <Bounce>
          <div className="lanContainer">
            <span>
              <img src={react} alt="language-icon" />
            </span>
            <span>react.js</span>
          </div>
          </Bounce>
<Bounce>
          <div className="lanContainer">
            <span>
              <img src={typescript} alt="language-icon" />
            </span>
            <span>typeScript</span>
          </div>
          </Bounce>
          <Bounce>
          <div className="lanContainer">
            <span>
              <img src={next} alt="language-icon" />
            </span>
            <span>next.js</span>
          </div>
          </Bounce>
        </div>
        {/* </Zoom> */}
      </div>
    </>
  );
}
