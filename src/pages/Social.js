import { useState } from "react";
import "../styles/Social.css";
import Bounce, { Zoom } from "react-awesome-reveal";

function Social() {
  const [social, setSocial] = useState(false);
  const socialButton = () => {
    setSocial(!social);
  };

  return (
    <>
      <main className="socialMain">
        <Zoom triggerOnce>
        <div className={`socialMedias ${social ? "showSocial" : "hideSocial"}`}>
          <Bounce triggerOnce>
          <a
            className="socialLink"
            href="https://github.com/mexzzy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-github"></i>
          </a>
          </Bounce>

          <Bounce triggerOnce>
          <a
            className="socialLink"
            href="https://www.linkedin.com/in/samuel-meshach-134466283/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-linkedin"></i>
          </a>
          </Bounce>
          <Bounce triggerOnce>
          <a
            className="socialLink"
            href="https://www.twitter.com/metech_code/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-twitter"></i>
          </a>
          </Bounce>
          <Bounce triggerOnce>
          <a
            className="socialLink"
            href="https://www.instagram.com/metech_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-instagram"></i>
          </a>
          </Bounce>
        </div>
        </Zoom>
        <div className="socialBtnContainer" onClick={socialButton}>
          <i className={`fi fi-rr-angle-small-up  ${social ? "activeRotate" : "deactivateRotate"}`}></i>
          <i className={`fi fi-sr-globe ${social ? "activeRotateGlobe" : "deactivateRotateGlobe"}`}></i>
        </div>
      </main>
    </>
  );
}
export default Social;
