export default function CollaborationProjects() {
    const collaborationProjectArrayObject = [
      {
        projectTitle: "schooly",
        language: ["html, css", "js"],
        description:
          "Offers the best educational services for you and for the advancement of your career",
        viewURL: "http://Schoolyweb.netlify.app",
      },
      {
        projectTitle: "afriCash",
        language: ["html, css", "js"],
        description:
          "Africash is a digital ecosystem designed to make Africa one.",
        viewURL: "https://grtm-sa-2-africash.vercel.app/",
      },
    ];
    return (
      <>
        {collaborationProjectArrayObject.map((index) => (
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
            </div>
          </div>
        ))}
      </>
    );
  }
  