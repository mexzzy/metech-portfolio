import "../CSS page/Contact.css";
import React from "react";
import Form from "../Components/Form";

export default function Contact() {
  return (
    <div className="contactMain">
      <span className="navTitle move">contact</span>
      <div className="contactBox">
        <Form />
      </div>
    </div>
  );
}