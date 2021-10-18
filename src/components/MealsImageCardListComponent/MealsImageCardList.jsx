import React from "react";

import StyledImageCardList from "../CategoryImageCardListComponent/StyledImageCardList.jsx";
import ImageLinkCard from "../ImageLinkCardComponent/ImageLinkCard.jsx";

const MealsImageCardList = ({ arr, setState, divId, divClass, linkTo }) => {
  return (
    <StyledImageCardList id={divId} className={divClass}>
      {arr.map((meal) => (
        <ImageLinkCard
          key={meal.idMeal}
          linkTo={linkTo}
          divClass="meal"
          setState={setState}
          obj={{
            imgSrc: meal.strMealThumb,
            title: meal.strMeal,
          }}
        />
      ))}
    </StyledImageCardList>
  );
};

export default MealsImageCardList;
