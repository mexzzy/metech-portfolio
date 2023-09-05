import "./Profile.css";
import logo from "../images/logo.jpg";
import React, { useState, useEffect } from "react";

function Profile() {
  const [open, setOpen] = useState(false);
  const [openPic, setOpenPic] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  const picBtn = () => {
    setOpenPic(!openPic);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (event.target) {
        setOpen(false);
      }
    });
  });
  const projectJob = [
    {
      job: "frontend",
      id: 1,
    },
    {
      job: "next.js",
      id: 2,
    },
    {
      job: "react.js",
      id: 3,
    },
    {
      job: "typeScript",
      id: 4,
    },
    {
      job: "...",
      id: 5,
    },
  ];
  const jobs = projectJob.map((title) => (
    <span className="emphasis" key={projectJob.id}>
      {title.job}
    </span>
  ));
  return (
    <div>
      {openPic && (
        <div className="profilePicViewContainer">
          <div className="profilePicView">
            <img src={logo} alt="logo" className="profilePicViewer" />
            <div className="closeProfilePicV" onClick={picBtn}>
              Close
            </div>
          </div>
        </div>
      )}
      <main className="profileMain">
        <div className="flex">
          <div className="flexHolder">
            <div
              className="profilePicture"
              title="view profile picture"
              onClick={() => setOpenPic(true)}
            >
              <img src={logo} alt="logo" className="profilePic" />
            </div>
            <div className="profileValues">
              <span className="profileName">samuel meshach</span>
              <span className="profileJob">{jobs}</span>
            </div>
          </div>
          <div className="dropDownBtn">
            <i
              onClick={handler}
              className={`fi fi-br-list ${open ? "color" : "colorChange"}`}
            ></i>
          </div>
        </div>

        <div className={`profileHolder ${open ? "activate" : "deactivate"}`}>
          <div className="profileInfo">
            <div className="profileInfoContainer">
              <div className="profileInfoIcon">
                <i className="fi fi-br-envelope"></i>
              </div>
              <span className="profileInfoContent">
                <div className="header">email</div>
                <div className="content">samuelmeshach055@gmail.com</div>
              </span>
            </div>

            <div className="profileInfoContainer">
              <div className="profileInfoIcon">
                <i className="fi fi-br-phone-flip"></i>
              </div>
              <span className="profileInfoContent">
                <div className="header">phone</div>
                <div className="content">(+234) 903-8201-903</div>
              </span>
            </div>

            <div className="profileInfoContainer">
              <div className="profileInfoIcon">
                <i className="fi fi-br-calendar-lines"></i>
              </div>
              <span className="profileInfoContent">
                <div className="header">D.O.B</div>
                <div className="content">08 October, 2005.</div>
              </span>
            </div>

            <div className="profileInfoContainer">
              <div className="profileInfoIcon">
                <i className="fi fi-br-marker"></i>
              </div>
              <span className="profileInfoContent">
                <div className="header">location</div>
                <div className="content">Lagos State, Nigeria.</div>
              </span>
            </div>
          </div>
          <div className="footer">MeTech | Portfolio &copy; 2023 copyright</div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
