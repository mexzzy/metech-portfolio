import "../CSS page/Resume.css";
import profilePic from "../images/logo.jpg";

export default function Resume() {
  return (
    <div className="resumeMain">
      <span className="navTitle move">resume</span>
      <div className="resumeBox">
        <div className="resumeContainer">
          <div className="resumeR">
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
            <div className="resumeTitle">
              <i class="fi fi-ss-user"></i>
              <span>profile</span>
            </div>
            <div className="resumeWriteUp">
              <div className="words">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                adipisci at necessitatibus harum. Vitae ea quidem esse beatae
                voluptate dolor praesentium. Fuga molestias quis pariatur
                delectus? Voluptates molestias provident fugiat?
              </div>
            </div>
            <br />
            <div className="resumeTitle">
              <i class="fi fi-ss-shopping-bag"></i>
              <span>experience/employment history</span>
            </div>
            <div className="resumeWriteUp">
              {/* <i class="fi fi-sr-caret-down"></i> */}
              <div>
                <div className="workTitle">
                  frontend developer at Google, united kingdom
                </div>
                <div className="workDate">january 2023 - march 2023</div>
              </div>
              <div>
                <div className="words">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi officia quaerat, accusantium dignissimos repellendus
                  exercitationem molestias dolores. Qui, alias quod.
                  <ul>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* work  */}
            <div className="resumeWriteUp">
              {/* <i class="fi fi-sr-caret-down"></i> */}
              <div>
                <div className="workTitle">
                  frontend developer at Google, united kingdom
                </div>
                <div className="workDate">january 2023 - march 2023</div>
              </div>
              <div>
                <div className="words">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi officia quaerat, accusantium dignissimos repellendus
                  exercitationem molestias dolores. Qui, alias quod.
                  <ul>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* work */}
            <div className="resumeWriteUp">
              {/* <i class="fi fi-sr-caret-down"></i> */}
              <div>
                <div className="workTitle">
                  frontend developer at Google, united kingdom
                </div>
                <div className="workDate">january 2023 - march 2023</div>
              </div>
              <div>
                <div className="words">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi officia quaerat, accusantium dignissimos repellendus
                  exercitationem molestias dolores. Qui, alias quod.
                  <ul>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusantium deserunt amet quas quia reprehenderit
                      voluptatibus?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resumeL">
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
                  Osun state
                </div>
              </div>
              <div className="box2">
                <div className="detailTitle">nationality</div>
                <div className="addressAndNumber">NIGERIAN</div>
              </div>
              <div className="box3">
                <div className="detailTitle">specialize field</div>
                <div className="addressAndNumber">Frontend development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
