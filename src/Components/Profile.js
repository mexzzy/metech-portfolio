import "./Profile.css";
import logo from "../images/logo.jpg";
import React, { useState, useEffect } from "react";
import { Fade, Bounce, Zoom, Slide } from "react-awesome-reveal";

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
    },
    {
      job: "next.js",
    },
    {
      job: "react.js",
    },
    {
      job: "typeScript",
    },
    {
      job: "...",
    },
  ];
  const jobs = projectJob.map((index) => (
    <span className="emphasis"  key={index}>
      {index.job}
    </span>
  ));
  return (
    <div>
      {openPic && (
        <div className="profilePicViewContainer">
          <div className="profilePicView">
            <Fade triggerOnce>
              <img src={logo} alt="logo" className="profilePicViewer" />
            </Fade>
            <Bounce>
              <div className="closeProfilePicV" onClick={picBtn}>
                Close
              </div>
            </Bounce>
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
              <Zoom triggerOnce>
                <img src={logo} alt="logo" className="profilePic" />
              </Zoom>
            </div>
            <div className="profileValues">
              <Fade triggerOnce>
                <span className="profileName">samuel meshach</span>
              </Fade>
              <Bounce triggerOnce>
                <span className="profileJob">{jobs}</span>
              </Bounce>
            </div>
          </div>
          <div className="dropDownBtn">
            <Bounce triggerOnce>
              <i
                onClick={handler}
                className={`fi fi-br-list ${open ? "color" : "colorChange"}`}
              ></i>
            </Bounce>
          </div>
        </div>

        <div className={`profileHolder ${open ? "activate" : "deactivate"}`}>
          <div className="profileInfo">
            <Slide triggerOnce>
              <div className="profileInfoContainer">
                <div className="profileInfoIcon">
                  <i className="fi fi-br-envelope"></i>
                </div>
                <span className="profileInfoContent">
                  <div className="header">email</div>
                  <div className="content">samuelmeshach055@gmail.com</div>
                </span>
              </div>
            </Slide>
            <Slide triggerOnce direction="right">
              <div className="profileInfoContainer">
                <div className="profileInfoIcon">
                  <i className="fi fi-br-phone-flip"></i>
                </div>
                <span className="profileInfoContent">
                  <div className="header">phone</div>
                  <div className="content">(+234) 903-8201-903</div>
                </span>
              </div>
            </Slide>
            <Slide triggerOnce>
              <div className="profileInfoContainer">
                <div className="profileInfoIcon">
                  <i className="fi fi-br-calendar-lines"></i>
                </div>
                <span className="profileInfoContent">
                  <div className="header">D.O.B</div>
                  <div className="content">08 October, 2005.</div>
                </span>
              </div>
            </Slide>
            <Slide triggerOnce direction="right">
              <div className="profileInfoContainer">
                <div className="profileInfoIcon">
                  <i className="fi fi-br-marker"></i>
                </div>
                <span className="profileInfoContent">
                  <div className="header">location</div>
                  <div className="content">Lagos State, Nigeria.</div>
                </span>
              </div>
            </Slide>
          </div>
          <div className="footer">MeTech | Portfolio &copy; 2023 copyright</div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
