import "../CSS page/Project.css";

function ProjectTwo() {
  return (
    <>
      {/* container */}
      <div className="projectContainer">
        {/* content */}
        <div className="projectContent">
          <span className="projectTitle">metech portfolio</span>
          <span className="language">
            <span className="emphasis">react</span>
            <span className="emphasis">css</span>
          </span>
          <span className="description">
            This website is to showcase Metech frontend skills and projects.
          </span>
        </div>
        {/* icon */}
        <div className="projectIcon">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fi fi-br-eye"></i>
              <span className="txt">view</span>
            </span>
          </a>
          <a href="https://github.com/mexzzy/metech-portfolio/" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fi fi-tr-code-branch"></i>
              <span className="txt">code</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
export default ProjectTwo;
