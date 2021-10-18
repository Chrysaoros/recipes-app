import React from "react";

import StyledImageCardList from "./StyledImageCardList.jsx";
import ImageLinkCard from "../ImageLinkCardComponent/ImageLinkCard.jsx";

const CategoryImageCardList = ({ arr, setState, divId, divClass, linkTo }) => {
  return (
    <StyledImageCardList id={divId} className={divClass}>
      {arr.map((category) => (
        <ImageLinkCard
          key={category.idCategory}
          linkTo={linkTo}
          divClass="category"
          setState={setState}
          obj={{
            imgSrc: category.strCategoryThumb,
            title: category.strCategory,
          }}
        />
      ))}
    </StyledImageCardList>
  );
};

export default CategoryImageCardList;
