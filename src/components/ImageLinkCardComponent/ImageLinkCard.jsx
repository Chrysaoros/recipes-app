import React from "react";
import { Link } from "react-router-dom";

import StyledImageLinkCard from "./StyledImageLinkCard.jsx";

const ImageLinkCard = ({ linkTo, divClass, setState, obj }) => {
  return (
    <StyledImageLinkCard className={divClass}>
      <Link to={linkTo} onClick={() => setState(obj.title)}>
        <img src={obj.imgSrc} alt={obj.title} />
      </Link>
      <h2>{obj.title}</h2>
    </StyledImageLinkCard>
  );
};

export default ImageLinkCard;
