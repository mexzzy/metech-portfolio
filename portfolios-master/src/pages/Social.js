import { useState } from "react";
import "../CSS page/Social.css";

function Social() {
  const [social, setSocial] = useState(false);
  const socialButton = () => {
    setSocial(!social);
  };

  return (
    <>
      <main className="socialMain">
        <div className={`socialMedias ${social ? "showSocial" : "hideSocial"}`}>
          <a
            className="socialLink"
            href="https://github.com/mexzzy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fi fi-brands-github"></i>
          </a>
          <a
            className="socialLink"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fi fi-brands-linkedin"></i>
          </a>
          <a
            className="socialLink"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fi fi-brands-twitter"></i>
          </a>
          <a
            className="socialLink"
            href="https://www.instagram.com/metech_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fi fi-brands-instagram"></i>
          </a>
        </div>
        <div className="socialBtnContainer" onClick={socialButton}>
          <i className="fi fi-rr-angle-small-up"></i>
          <i className="fi fi-sr-globe"></i>
        </div>
      </main>
    </>
  );
}
export default Social;
