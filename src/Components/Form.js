import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Circles } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Slide, Zoom, Bounce } from "react-awesome-reveal";
import "../CSS page/Contact.css";

const Form = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showNotSuccess, setShowNotSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      console.log("Email sent successfully:", result.text);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 7000);
    } catch (error) {
      console.error("Email could not be sent:", error.text);
      setShowNotSuccess(true);
      setTimeout(() => {
        setShowNotSuccess(false);
      }, 7000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      {showSuccess && (
        <div className="success-message">Email message sent successfully!</div>
      )}
      {showNotSuccess && (
        <div className="errorMsg">Email message sending failed!</div>
      )}
      <Slide triggerOnce>
        <div className="container">
          <span>Full Name</span>
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
            <span>Email</span>
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
          <span>Message</span>
          <textarea required name="message" id="message" cols="30" rows="10" />
        </div>
      </Zoom>
      <Bounce triggerOnce>
        <div className="formBtn">
          <button type="submit" disabled={loading}>
            {loading ? (
              <div className="btnFlex"> 
                <span>Sending... </span>
                <Circles
                  height="20"
                  width="20"
                  color="#fff"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </Bounce>
    </form>
  );
};

export default Form;
