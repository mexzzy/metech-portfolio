import { useState } from "react";
import "../styles/Resume.css";
import profilePic from "../images/logo.jpg";
import { Slide, Bounce, Zoom } from "react-awesome-reveal";
import WorkExperience from "../Components/WorkExperience";

export default function Resume() {
  const [detail, setDetail] = useState(false);
  const detailBtn = () => {
    setDetail(!detail);
  };

  const workExperiences = [
    {
      title: "The Aretey Company - React Native Frontend Engineer",
      date: "NOV 2023 - FEB 2025",
      description:
        "Worked as a React Native Frontend Engineer, collaborating with the development team to deliver frontend solutions:",
      bulletPoints: [
        "Collaborated with the development team to design and implement frontend solutions",
        "Participated in code reviews and providing input on best practices",
        "Troubleshot and debugged development issues",
      ],
    },
    {
      title: "Chat Board - Flutter Frontend Engineer",
      date: "JUN 2024 - APR 2025",
      description:
        "Developed dynamic, responsive screens for mobile applications:",
      bulletPoints: [
        "Developed dynamic, responsive screens that adapt to user inputs and data variations",
        "Enhanced engagement and ensured seamless experience across devices",
        "Optimized layouts and maintained consistent branding",
      ],
    },
    {
      title: "Western Skyline Property - Frontend Engineer",
      date: "JUN 2024 - JUN 2024",
      description:
        "Built responsive web interfaces for Canadian real estate platform:",
      bulletPoints: [
        "Built responsive, user-friendly web interfaces using Next.js and Tailwind CSS",
        "Enhanced performance and scalability across multiple devices and browsers",
        "Collaborated with designers to implement wireframes into polished user interfaces",
        "Debugged and resolved interface issues to maintain optimal user experience",
        "Developed comprehensive Canadian real estate platform connecting buyers with properties across Western Canada",
        "Implemented advanced search filters and property management tools",
      ],
    },
    {
      title: "Nakol ProjectPro Limited - Frontend Web Developer",
      date: "APR 2024 - MAY 2024",
      description:
        "Developed professional consulting platform and maintained company websites:",
      bulletPoints: [
        "Developed and integrated highly responsive websites using Firebase, Next.js, and Tailwind CSS",
        "Monitored and maintained company website",
        "Built professional consulting platform offering project management solutions and business development services",
        "Implemented strategic advisory features for organizations across various sectors",
      ],
    },
    {
      title: "Emergfunds - Blockchain Fundraising Platform",
      date: "2025",
      description:
        "Developed decentralized fundraising platform on Solana blockchain:",
      bulletPoints: [
        "Built decentralized fundraising platform on Solana blockchain enabling secure crypto donations",
        "Implemented transparent fund distribution for emergency relief initiatives",
        "Integrated Solana wallets for secure cryptocurrency transactions",
        "Developed with Next.js, TypeScript, and ShadCN UI",
      ],
    },
    {
      title: "The Carplug - Automotive Marketplace",
      date: "2025",
      description: "Developed Nigeria's premier automotive marketplace:",
      bulletPoints: [
        "Built Nigeria's premier automotive marketplace connecting car buyers with verified sellers",
        "Implemented vehicle listings, financing options, and dealership services",
        "Developed with Next.js, TypeScript, ShadCN UI, and Magic UI",
        "Created responsive design for optimal user experience across devices",
      ],
    },
    {
      title: "Ghirl Network - Women Professional Platform",
      date: "2024",
      description:
        "Developed empowering networking platform for women professionals:",
      bulletPoints: [
        "Built empowering networking platform for women professionals",
        "Implemented mentorship opportunities, career resources, and community building features",
        "Developed with Next.js, TypeScript, and Tailwind CSS",
        "Created responsive design for seamless user experience",
      ],
    },
    {
      title: "ZURI HNGx Internship - Certified Participant",
      date: "SEP 2023 - OCT 2023",
      description: "Participated in intensive web development internship:",
      bulletPoints: [
        "Participated in many significant web development projects",
        "Greatly enhanced skills and expertise in web development field",
      ],
    },
    {
      title: "Weather Update [Project]",
      date: "AUGUST 2023",
      description:
        "Weather application project designed to display current weather updates:",
      bulletPoints: [
        "Created using create-react-app, styled with styled-components",
        "Openweather API was used to fetch all country current weather data",
        "ipinfo API was used to fetch user current location to display current weather broadcast",
        "Libraries such as react-icons, react-spinner, react-toastify, react-feather, styled-components, axios",
      ],
    },
  ];

  return (
    <div className="resumeMain">
      <Slide triggerOnce>
        <span className="navTitle move">resum&eacute;</span>
      </Slide>
      <Bounce triggerOnce>
        <div className="detailIcon" onClick={detailBtn}>
          <span>More</span>
          <i className="fi fi-rr-angle-small-down" onClick={detailBtn}></i>
        </div>
      </Bounce>
      <div className="resumeBox">
        <div className="resumeContainer">
          <div className="resumeR">
            <Bounce triggerOnce>
              <div className="resumePicBox">
                <div className="resumePic">
                  <img src={profilePic} alt="profilePic" />
                </div>
                <div className="resumeNameBox">
                  <span>samuel meshach</span>
                  <span>samuelmeshach055@gmail.com</span>
                  <span>Frontend engineer</span>
                </div>
              </div>
            </Bounce>
            <div className="resumeTitle">
              <i className="fi fi-ss-user"></i>
              <span>profile</span>
            </div>
            <Slide triggerOnce>
              <div className="resumeWriteUp">
                <div className="words">
                  Highly motivated and detail-oriented software developer with a
                  strong background in web development seeking a frontend
                  position at a functioning tech Company. Skilled in JavaScript,
                  React and typescript, with a passion for creating innovative
                  and user-friendly web applications.
                </div>
              </div>
            </Slide>
            <br />
            <div className="resumeTitle">
              <i className="fi fi-ss-shopping-bag"></i>
              <span>experience/employment history</span>
            </div>

            {workExperiences.map((work, index) => (
              <WorkExperience
                key={index}
                title={work.title}
                date={work.date}
                description={work.description}
                bulletPoints={work.bulletPoints}
              />
            ))}
          </div>
          <div className={`resumeL ${detail ? "showDetail" : "hideDetail"}`}>
            <Bounce triggerOnce>
              <div className="detailIconCancel" onClick={detailBtn}>
                Close
              </div>
            </Bounce>
            <Bounce triggerOnce>
              <div className="leftContainer">
                <div className="resumeTitle">details</div>
                <div className="addressAndNumber">
                  Ikeja Lagos, Nigeria.
                  <br />
                  09038201903
                </div>
                <div className="detailFlex">
                  <div className="box1">
                    <div className="detailTitle">date/place of birth</div>
                    <div className="addressAndNumber">
                      08-10-2005
                      <br />
                      Osun State
                    </div>
                  </div>
                  <div className="box2">
                    <div className="detailTitle">nationality</div>
                    <div className="addressAndNumber">Nigerian</div>
                  </div>
                  <div className="box3">
                    <div className="detailTitle">specialize field</div>
                    <div className="addressAndNumber">Frontend Development</div>
                  </div>
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
