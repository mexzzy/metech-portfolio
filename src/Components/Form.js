import { Slide, Zoom, Bounce } from "react-awesome-reveal";
import "../CSS page/Contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";

const Form = () => {

  const [showSuccess, setShowSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 7000);
        },
        (error) => {
          console.error("Email could not be sent:", error.text);
        }
      );
  }
  return (
    <>
      <form onSubmit={sendEmail}>
      {showSuccess && (
        <div className="success-message">
          Email message sent successfully!
        </div>
      )}
        <Slide triggerOnce>
          <div className="container">
            <span> full name</span>
            <input
              id="name"
              name="user_name"
              type="text"
              placeholder="-"
              required
            />
          </div>
        </Slide>
        <Slide triggerOnce direction="right">
          <div className="formFlex">
            <div className="container">
              <span> email</span>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="-"
                required
              />
            </div>
          </div>
        </Slide>
        <br />

        <Zoom triggerOnce>
          <div className="container">
            <span>message</span>
            <textarea
              required
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </Zoom>
        <Bounce triggerOnce>
          <div className="formBtn">
            <button type="submit">send</button>
          </div>
        </Bounce>
      </form>
    </>
  );
};

export default Form;
