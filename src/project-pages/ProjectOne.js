import "../CSS page/Project.css";
function ProjectOne() {
  return (
    <>
      {/* container */}
      <div className="projectContainer">
        {/* content */}
        <div className="projectContent">
          <span className="projectTitle">weather update</span>
          <span className="language">
            <span className="emphasis">react</span>
            <span className="emphasis">styled-components</span>
          </span>
          <span className="description">
            Weather Update is a weather broadcast search engine for countries, states and cities.
          </span>
        </div>
        {/* icon */}
        <div className="projectIcon">
          <a href="https://universal-weather.vercel.app/" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fi fi-br-eye"></i>
              <span className="txt">view</span>
            </span>
          </a>
          <a href="https://github.com/mexzzy/weather-app" target="_blank" rel="noopener noreferrer">
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
export default ProjectOne;
