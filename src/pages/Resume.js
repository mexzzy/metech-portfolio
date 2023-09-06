import { useState } from "react";
import "../CSS page/Resume.css";
import profilePic from "../images/logo.jpg";
import { Fade, Slide, Bounce, Zoom } from "react-awesome-reveal";

export default function Resume() {
  const [detail, setDetail] = useState(false);
  const detailBtn = () => {
    setDetail(!detail);
  };
  return (
    <div className="resumeMain">
      <Slide>
        <span className="navTitle move">resum&eacute;</span>
      </Slide>
      <Bounce>
        <div className="detailIcon" onClick={detailBtn}>
          <span>More</span>
          <i className="fi fi-rr-angle-small-down" onClick={detailBtn}></i>
        </div>
      </Bounce>
      <div className="resumeBox">
        <div className="resumeContainer">
          <div className="resumeR">
            <Bounce>
              <div className="resumePicBox">
                <div className="resumePic">
                  <img src={profilePic} alt="profilePic" />
                </div>
                <div className="resumeNameBox">
                  <span>samuel meshach</span>
                  <span>samuelmeshach055@gmail.com</span>
                  <span>web developer</span>
                </div>
              </div>
            </Bounce>
            <div className="resumeTitle">
              <i className="fi fi-ss-user"></i>
              <span>profile</span>
            </div>
            <Fade>
              <div className="resumeWriteUp">
                <div className="words">
                  Highly motivated and detail-oriented software developer with a
                  strong background in web development seeking a frontend
                  position at a functioning tech Company. Skilled in JavaScript,
                  React and typescript, with a passion for creating innovative
                  and user-friendly web applications.
                </div>
              </div>
            </Fade>
            <br />
            <div className="resumeTitle">
              <i className="fi fi-ss-shopping-bag"></i>
              <span>experience/employment history</span>
            </div>
            <div className="resumeWriteUp">
              <Zoom>
                <div>
                  <div className="workTitle">
                    frontend developer at Google, united kingdom
                  </div>
                  <div className="workDate">january 2023 - march 2023</div>
                </div>
              </Zoom>
              <Fade>
                <div>
                  <div className="words">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi officia quaerat, accusantium dignissimos repellendus
                    exercitationem molestias dolores. Qui, alias quod.
                    <ul>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>
            {/* work  */}
            <div className="resumeWriteUp">
              <Zoom>
                <div>
                  <div className="workTitle">
                    frontend developer at Google, united kingdom
                  </div>
                  <div className="workDate">january 2023 - march 2023</div>
                </div>
              </Zoom>
              <Fade>
                <div>
                  <div className="words">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi officia quaerat, accusantium dignissimos repellendus
                    exercitationem molestias dolores. Qui, alias quod.
                    <ul>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>
            {/* work */}
            <div className="resumeWriteUp">
              <Zoom>
                <div>
                  <div className="workTitle">
                    frontend developer at Google, united kingdom
                  </div>
                  <div className="workDate">january 2023 - march 2023</div>
                </div>
              </Zoom>
              <div>
                <Fade>
                  <div className="words">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi officia quaerat, accusantium dignissimos repellendus
                    exercitationem molestias dolores. Qui, alias quod.
                    <ul>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusantium deserunt amet quas quia reprehenderit
                        voluptatibus?
                      </li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className={`resumeL ${detail ? "showDetail" : "hideDetail"}`}>
            <Bounce>
              <div className="detailIconCancel" onClick={detailBtn}>
                Close
              </div>
            </Bounce>
            <Bounce>
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
