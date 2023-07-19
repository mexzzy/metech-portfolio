import "../CSS page/Project.css";
import ProjectOne from "../project-pages/ProjectOne";
import ProjectTwo from "../project-pages/ProjectTwo";
import ProjectThree from "../project-pages/ProjectThree";
import ProjectFour from "../project-pages/ProjectFour";


export default function Projects() {
  return (
    <div className="projectsMain">
      <span className="navTitle move">projects</span>
      <div className="projectsBox">
        {/* all projects */}
        <div className="allProject">
          <ProjectOne/>
          <ProjectTwo/>
          <ProjectThree/>
          <ProjectFour/>
        </div>
      </div>
    </div>
  );
}