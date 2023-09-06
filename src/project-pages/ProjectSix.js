import "../CSS page/Project.css";
function ProjectSix() {
  return (
    <>
      {/* container */}
      <div className="projectContainer">
        {/* content */}
        <div className="projectContent">
          <span className="projectTitle">afriCash dashboard</span>
          <span className="language">
            <span className="emphasis">html</span>
            <span className="emphasis">css</span>
            <span className="emphasis">js</span>
          </span>
          <span className="description">
            It’s goal is to bring the dream of financial inclusion to all people across the continent. 
          </span>
        </div>
        {/* icon */}
        <div className="projectIcon">
          <a href="https://grtm-sa-2-africash.vercel.app/africash-dashboard.html" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fi fi-br-eye"></i>
              <span className="txt">view</span>
            </span>
          </a>
          <a href="https://github.com/mexzzy/grtm-sa-2-africash" target="_blank" rel="noopener noreferrer">
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
export default ProjectSix;
