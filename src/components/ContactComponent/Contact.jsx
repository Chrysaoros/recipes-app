import React from "react";
import StyledContact from "./SyledContact.jsx";

const Contact = () => {
  return (
    <StyledContact id="contact_us" className="contact_us">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="First name" />
        <br />
        <input type="text" placeholder="Last name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </StyledContact>
  );
};

export default Contact;
