import "../CSS page/Project.css";
import ProjectOne from "../project-pages/ProjectOne";
import ProjectTwo from "../project-pages/ProjectTwo";
import ProjectThree from "../project-pages/ProjectThree";
import ProjectFour from "../project-pages/ProjectFour";
import { Slide, Zoom } from "react-awesome-reveal";

export default function Projects() {
  return (
    <div className="projectsMain">
      <Slide>
        <span className="navTitle move">projects</span>
      </Slide>
      <div className="projectsBox">
        {/* all projects */}
        <div className="allProject">
          <Zoom>
            <ProjectOne />
          </Zoom>
          <Zoom>
            <ProjectTwo />
          </Zoom>
          <Zoom>
            <ProjectThree />
          </Zoom>
          <Zoom>
            <ProjectFour />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
