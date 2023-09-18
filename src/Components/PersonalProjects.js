
export default function PersonalProjects() {
    const projectInfoArrayObject = [
      {
        projectTitle: "weather update",
        language: ["react", "styled-components"],
        description:
          "Weather Update is a weather broadcast search engine for countries, states and cities.",
        viewURL: "https://universal-weather.vercel.app/",
        codeURL: "https://github.com/mexzzy/weather-app",
      },
      {
        projectTitle: "metech portfolio",
        language: ["react", "css"],
        description:
          "This website is to showcase Metech frontend skills and projects.",
        viewURL: "/",
        codeURL: "https://github.com/mexzzy/metech-portfolio",
      },
      {
        projectTitle: "afriCash dashboard",
        language: ["html, css", "js"],
        description:
          "It’s goal is to bring the dream of financial inclusion to all people across the continent.",
        viewURL: "https://grtm-sa-2-africash.vercel.app/africash-dashboard.html",
        codeURL: "https://github.com/mexzzy/grtm-sa-2-africash",
      },
    ];
    // const twoSlicedDataProps = projectInfoArrayObject.slice(0, 2)
    return (
      <>
        {projectInfoArrayObject.map((index) => (
          <>
            <div className="projectContainer"  key={index}>
              {/* content */}
              <div className="projectContent">
                <span className="projectTitle">{index.projectTitle}</span>
                <span className="language">
                  <span className="emphasis">{index.language[0]}</span>
                  <span className="emphasis">{index.language[1]}</span>
                </span>
                <span className="description">{index.description}</span>
              </div>
              {/* icon */}
              <div className="projectIcon">
                <a href={index.viewURL} target="_blank" rel="noopener noreferrer">
                  <span className="icon">
                    <i className="fi fi-br-eye"></i>
                    <span className="txt">view</span>
                  </span>
                </a>
                <a href={index.codeURL} target="_blank" rel="noopener noreferrer">
                  <span className="icon">
                    <i className="fi fi-tr-code-branch"></i>
                    <span className="txt">code</span>
                  </span>
                </a>
              </div>
            </div>
          </>
        ))}
      </>
    );
  }
  