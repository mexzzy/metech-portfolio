import "../CSS page/Project.css";

function ProjectTwo() {
  return (
    <>
      {/* container */}
      <div className="projectContainer">
        {/* content */}
        <div className="projectContent">
          <span className="projectTitle">name of the project</span>
          <span className="language">
            <span className="emphasis">react</span>
            <span className="emphasis">css</span>
          </span>
          <span className="description">
            description goes here, means just a short write up about the project
            will be written here
          </span>
        </div>
        {/* icon */}
        <div className="projectIcon">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i class="fi fi-br-eye"></i>
              <span className="txt">view</span>
            </span>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i class="fi fi-tr-code-branch"></i>
              <span className="txt">code</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
export default ProjectTwo;
