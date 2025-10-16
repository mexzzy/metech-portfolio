import "../styles/Project.css";
import { Slide } from "react-awesome-reveal";
import PersonalProjects from "../Components/PersonalProjects";
import CollaborationProjects from "../Components/CollaborationProjects";
import PrivateProjects from "../Components/PrivateProjects";

export default function Projects() {
  return (
    <div className="projectsMain">
      <Slide triggerOnce>
        <span className="navTitle move">projects</span>
      </Slide>
      <div className="projectsBox">
        <span className="projectCategoryName"> Private projects</span>
        <div className="allProject">
          <PrivateProjects />
        </div>
        <br />
        <br />
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
