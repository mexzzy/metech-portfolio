import "../CSS page/Contact.css";
import React from "react";
import Form from "../Components/Form";
import Slide from "react-awesome-reveal";

export default function Contact() {
  return (
    <div className="contactMain">
      <Slide triggerOnce>
        <span className="navTitle move">contact</span>
      </Slide>
      <div className="contactBox">
        <Form />
      </div>
    </div>
  );
}
