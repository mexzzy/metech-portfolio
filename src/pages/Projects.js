import "../CSS page/Project.css";
import { Slide } from "react-awesome-reveal";
import PersonalProjects from "../Components/PersonalProjects";
import CollaborationProjects from "../Components/CollaborationProjects";

export default function Projects() {
  return (
    <div className="projectsMain">
      <Slide triggerOnce>
        <span className="navTitle move">projects</span>
      </Slide>
      <div className="projectsBox">
        <span className="projectCategoryName"> personal projects</span>
        <div className="allProject">
            <PersonalProjects />
        </div>
        <br />
        <br />
        <span className="projectCategoryName"> collaboration projects</span>
        <div className="allProject">
            <CollaborationProjects />
        </div>
      </div>
    </div>
  );
}
