import { Link } from "react-router-dom";
import "../CSS page/About.css";
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
// import PersonalProjects from "../Components/PersonalProjects";

export default function About() {
  const projectInfoArrayObject = [
    {
      projectTitle: "weather update",
      language: ["react", "styled-components"],
      description:
        "Weather Update is a weather broadcast search engine for countries, states and cities.",
      viewURL: "https://universal-weather.vercel.app/",
      codeURL: "https://github.com/mexzzy/weather-app",
    },
    {
      projectTitle: "metech portfolio",
      language: ["react", "css"],
      description:
        "This website is to showcase Metech frontend skills and projects.",
      viewURL: "/",
      codeURL: "https://github.com/mexzzy/metech-portfolio",
    },
  ];
  const twoSlicedDataProps = projectInfoArrayObject.slice(0, 2);

  return (
    <div className="aboutMain">
      <Slide triggerOnce>
        <span className="navTitle move">home</span>
      </Slide>
      <div className="parallax">
        <div className="namingAbout">
          <div className="nameFlex">
            <Slide triggerOnce direction="up">
              <span>
                samuel meshach<i className="fi fi-ss-badge-check"></i>
              </span>
              <p className="emphasis" style={{ color: "#fff" }}>
                SOFTWARE DEVELOPER{" "}
              </p>
            </Slide>
          </div>
        </div>
      </div>
      <div className="aboutBox">
        <AboutBox />
        <div className="ProjectAboutHolder">
          <Zoom triggerOnce>
            {twoSlicedDataProps.map((index) => (
              <>
                <div className="projectContainer" key={index}>
                  {/* content */}
                  <div className="projectContent">
                    <span className="projectTitle">{index.projectTitle}</span>
                    <span className="language">
                      <span className="emphasis">{index.language[0]}</span>
                      <span className="emphasis">{index.language[1]}</span>
                    </span>
                    <span className="description">{index.description}</span>
                  </div>
                  {/* icon */}
                  <div className="projectIcon">
                    <a
                      href={index.viewURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <i className="fi fi-br-eye"></i>
                        <span className="txt">view</span>
                      </span>
                    </a>
                    <a
                      href={index.codeURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <i className="fi fi-tr-code-branch"></i>
                        <span className="txt">code</span>
                      </span>
                    </a>
                  </div>
                </div>
              </>
            ))}
          </Zoom>
          <Link to="/Projects" className="projectLink">
            more projects
          </Link>
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

  const languages = [
    {
      langImage: ` ${html}`,
      langName: "html",
    },
    {
      langImage: ` ${css}`,
      langName: "css",
    },
    {
      langImage: ` ${js}`,
      langName: "javascript",
    },
    {
      langImage: ` ${scss}`,
      langName: "scss",
    },
    {
      langImage: ` ${tailwind}`,
      langName: "tailwind",
    },
    {
      langImage: ` ${boostrap}`,
      langName: "boostrap",
    },
    {
      langImage: ` ${react}`,
      langName: "react.js",
    },
    {
      langImage: ` ${typescript}`,
      langName: "typescript",
    },
    {
      langImage: ` ${next}`,
      langName: "next.js",
    },
  ];
  return (
    <>
      <Fade triggerOnce>
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
        <span className="title">Languages/Frameworks</span>
        <div className="devContainer">
          {languages.map((index) => (
            <Bounce triggerOnce>
              <div className="lanContainer">
                <span>
                  <img src={index.langImage} alt="language-icon" />
                </span>
                <span>{index.langName}</span>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
    </>
  );
}
