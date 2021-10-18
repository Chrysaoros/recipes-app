import React from "react";
import StyledTitle from "./StyledTitle.jsx";

const Title = () => {
  return (
    <StyledTitle className="title_section">
      <div className="left">
        <h1>Food Recipes</h1>
        <p className="title_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi
          omnis impedit quisquam delectus quae. Unde ipsum doloribus
          perspiciatis sed odio, officia quam, totam, facilis blanditiis aliquam
          excepturi vero voluptatem.
        </p>

        <a href="#categories">Categories &#9660;</a>
      </div>

      <div className="right">
        <img src="/assets/images/photo_app.jfif" alt="Different food" />
      </div>
    </StyledTitle>
  );
};

export default Title;
