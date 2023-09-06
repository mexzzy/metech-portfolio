import "../CSS page/Project.css";

function ProjectFive() {
  return (
    <>
      {/* container */}
      <div className="projectContainer">
        {/* content */}
        <div className="projectContent">
          <span className="projectTitle">afriCash</span>
          <span className="language">
          
            <span className="emphasis">html</span>
            <span className="emphasis">css</span>
            <span className="emphasis">js</span>
          </span>
          <span className="description">
          Africash is a digital ecosystem designed to make Africa one.
          </span>
        </div>
        {/* icon */}
        <div className="projectIcon">
          <a href="https://grtm-sa-2-africash.vercel.app/" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fi fi-br-eye"></i>
              <span className="txt">view</span>
            </span>
          </a>
         
        </div>
      </div>
    </>
  );
}
export default ProjectFive;
