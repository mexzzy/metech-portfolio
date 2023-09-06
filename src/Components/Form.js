import { Slide, Zoom, Bounce } from "react-awesome-reveal";
import "../CSS page/Contact.css";

const Form = () => {
  return (
    <>
      <form>
        <Slide>
          <div className="container">
            <span> full name</span>
            <input id="name" type="text" placeholder="-" required />
          </div>
        </Slide>
        <Slide direction="right">
          <div className="formFlex">
            <div className="container">
              <span> email</span>
              <input id="email" type="email" placeholder="-" required />
            </div>
          </div>
        </Slide>
        <br />

        <Zoom>
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
        <Bounce>
          <div className="formBtn">
            <button>send</button>
          </div>
        </Bounce>
      </form>
    </>
  );
};

export default Form;
