import { useForm, ValidationError } from "@formspree/react";
import { Slide, Zoom, Bounce } from "react-awesome-reveal";
import "../styles/Contact.css";

const Form = () => {
  const [state, handleSubmit] = useForm("xoqzradw");
  if (state.succeeded) {
    return <div className="success-message">Message Delivered!</div>;
  }
  if (state.errors) {
    return <div className="errorMsg">Message not Delivered!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
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
              name="email"
              type="email"
              placeholder="-"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
      </Slide>
      <br />
      <Zoom triggerOnce>
        <div className="container">
          <span>Message</span>
          <textarea required name="message" id="message" cols="30" rows="10" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </Zoom>
      <Bounce triggerOnce>
        <div className="formBtn">
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </div>
      </Bounce>
    </form>
  );
};

export default Form;
