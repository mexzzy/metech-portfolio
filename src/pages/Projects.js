import "../CSS page/Project.css";
import ProjectOne from "../project-pages/ProjectOne";
import ProjectTwo from "../project-pages/ProjectTwo";
// import ProjectThree from "../project-pages/ProjectThree";
import ProjectFour from "../project-pages/ProjectFour";
import ProjectFive from "../project-pages/ProjectFive";
import ProjectSix from "../project-pages/ProjectSix";
import { Slide, Zoom } from "react-awesome-reveal";

export default function Projects() {
  return (
    <div className="projectsMain">
      <Slide>
        <span className="navTitle move">projects</span>
      </Slide>
      <div className="projectsBox">
        <span className="projectCategoryName"> personal projects</span>
        <div className="allProject">
          <Zoom>
            <ProjectOne />
          </Zoom>
          <Zoom>
            <ProjectTwo />
          </Zoom>
          <Zoom>
            <ProjectSix />
          </Zoom>
          {/* <Zoom>
            <ProjectThree />
          </Zoom> */}
        </div>
        <br />
        <br />
        <span className="projectCategoryName"> collaboration projects</span>
        <div className="allProject">
          <Zoom>
            <ProjectFour />
          </Zoom>
          <Zoom>
            <ProjectFive />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
