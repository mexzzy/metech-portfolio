import { useState } from "react";
import "../CSS page/Social.css";
import Bounce, { Zoom } from "react-awesome-reveal";

function Social() {
  const [social, setSocial] = useState(false);
  const socialButton = () => {
    setSocial(!social);
  };

  return (
    <>
      <main className="socialMain">
        <Zoom>
        <div className={`socialMedias ${social ? "showSocial" : "hideSocial"}`}>
          <Bounce>
          <a
            className="socialLink"
            href="https://github.com/mexzzy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-github"></i>
          </a>
          </Bounce>

          <Bounce>
          <a
            className="socialLink"
            href="/v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-linkedin"></i>
          </a>
          </Bounce>
          <Bounce>
          <a
            className="socialLink"
            href="/v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fi fi-brands-twitter"></i>
          </a>
          </Bounce>
          <Bounce>
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
