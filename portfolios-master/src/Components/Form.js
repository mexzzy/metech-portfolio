import "../CSS page/Contact.css";
const Form = () => {
  return (
    <>
      <form>
        <div className="formFlex">
          <div className="container">
            <span> full name</span>
            <input id="name" type="text" placeholder="-" required />
          </div>

          <div className="container">
            <span> email</span>
            <input id="email" type="email" placeholder="-" required />
          </div>
        </div>
        <br />
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

        <div className="formBtn">
          <button>send</button>
        </div>
      </form>
    </>
  );
};

export default Form;
