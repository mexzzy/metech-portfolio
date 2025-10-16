export default function PrivateProjects() {
  const collaborationProjectArrayObject = [
    {
      projectTitle: "Westernskyline Property",
      language: ["Next.js, Tailwind", "typescript", "ShadCN UI"],
      description:
        "A comprehensive Canadian real estate platform connecting buyers with properties across Western Canada, featuring advanced search filters and property management tools.",
      viewURL: "https://www.westernskylineproperty.ca/",
    },
    {
      projectTitle: "emergfunds",
      language: [
        "Next.js, Tailwind",
        "typescript",
        "Solana wallets",
        "ShadCN UI",
      ],
      description:
        "A decentralized fundraising platform on Solana blockchain enabling secure crypto donations and transparent fund distribution for emergency relief initiatives.",
      viewURL: "https://www.emergfunds.org/",
    },
    {
      projectTitle: "the carplug",
      language: ["Next.js, Tailwind", "typescript", "ShadCN UI", "magic ui"],
      description:
        "Nigeria's premier automotive marketplace connecting car buyers with verified sellers, featuring vehicle listings, financing options, and dealership services.",
      viewURL: "https://www.thecarplug.ng/",
    },
    {
      projectTitle: "nakolprojectpro consulting ltd",
      language: ["Next.js, Tailwind", "typescript", "ShadCN UI", "firebase"],
      description:
        "A professional consulting platform offering project management solutions, business development services, and strategic advisory for organizations across various sectors.",
      viewURL: "https://www.nakolprojectpro.org/",
    },
    {
      projectTitle: "ghirlnetwork",
      language: ["Next.js, Tailwind", "typescript"],
      description:
        "An empowering networking platform for women professionals, providing mentorship opportunities, career resources, and community building features.",
      viewURL: "https://www.ghirlnetwork.com",
    },
  ];

  return (
    <>
      {collaborationProjectArrayObject.map((project, index) => (
        <div className="projectContainer" key={index}>
          <div className="projectContent">
            <span className="projectTitle">{project.projectTitle}</span>
            <span className="language">
              {project.language.map((lang, langIndex) => (
                <span key={langIndex} className="emphasis">
                  {lang}
                </span>
              ))}
            </span>
            <span className="description">{project.description}</span>
          </div>
          {/* icon */}
          <div className="projectIcon">
            <a href={project.viewURL} target="_blank" rel="noopener noreferrer">
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
