import "../CSS page/Contact.css";
import { useState } from "react";
import parsePhoneNumberFromString from "libphonenumber-js";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
    const parsedPhoneNumber = parsePhoneNumberFromString(
      inputPhoneNumber,
      "NG"
    );
    setIsValidPhoneNumber(
      parsedPhoneNumber ? parsedPhoneNumber.isValid() : false
    );
  };
  return (
    <>
      <form>
        <div className="container">
          <span> full name</span>
          <input id="name" type="text" placeholder="-" required />
        </div>

        <div className="formFlex">
          <div className="container">
            <span> email</span>
            <input id="email" type="email" placeholder="-" required />
          </div>
          <div className="container">
            <span> phone number<span style={{fontSize: "10px", color: "#ccc"}}>(+234)</span> </span>
              <input
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                type="number"
                placeholder="-"
                required
              />
            {isValidPhoneNumber && (
              <p className="phoneNum">Phone number is valid!</p>
            )}
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
