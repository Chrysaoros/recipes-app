import React from "react";
import StyledAbout from "./StyledAbout.jsx";

const About = () => {
  return (
    <StyledAbout id="about" className="about">
      <h2>About Us</h2>
      <div>
        <div className="about_desc__wrapper">
          <p className="about_desc__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            exercitationem ab nihil iure inventore explicabo eius consequuntur
            natus vitae odio iste expedita aperiam similique, obcaecati quas
            quasi, vel illo eveniet.
          </p>
        </div>
        <div>
          <img src="/assets/images/photo_app.jfif" alt="Team" />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
