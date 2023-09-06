import "../CSS page/Project.css";

function ProjectFour() {
  return (
    <>
      {/* container */}
      <div className="projectContainer">
        {/* content */}
        <div className="projectContent">
          <span className="projectTitle">schooly</span>
          <span className="language">
            <span className="emphasis">html</span>
            <span className="emphasis">css</span>
            <span className="emphasis">js</span>
          </span>
          <span className="description">
            Offers the best educational services for you and for the advancement
            of your career.
          </span>
        </div>
        {/* icon */}
        <div className="projectIcon">
          <a
            href="http://Schoolyweb.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
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
export default ProjectFour;
