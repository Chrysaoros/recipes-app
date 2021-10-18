import React, { useState, useEffect } from "react";

import SelectCategoryFilter from "../../SelectCategoryFilterComponent/SelectCategoryFilter.jsx";
import MealsImageCardList from "../../MealsImageCardListComponent/MealsImageCardList.jsx";
import ImageLinkCard from "../../ImageLinkCardComponent/ImageLinkCard.jsx";

import StyledResultsPage from "./StyledResultsPage.jsx";

const SearchResultsPage = ({ headSearch }) => {
  const [category, setCategory] = useState("");
  const [randomMeal, setRandomMeal] = useState({});

  const filteredMeals = headSearch.filter((meal) =>
    meal.strCategory.includes(category)
  );

  useEffect(() => {
    const randMealIdx = Math.floor(Math.random() * headSearch.length);
    const randomMeal = headSearch[randMealIdx];

    setRandomMeal(randomMeal);
  }, [headSearch]);

  return (
    <StyledResultsPage className="search_page">
      <h1 className="search_title">Search results:</h1>
      <div className="meal_and_select">
        <div className="recommended_meal">
          <h3 className="recommended_title">Our recommendation:</h3>
          <ImageLinkCard
            linkTo="/meal"
            divClass="search"
            setState={null}
            obj={{
              imgSrc: randomMeal.strMealThumb,
              title: randomMeal.strMeal,
            }}
          />
          <p className="meal_category">
            Category: <b>{randomMeal.strCategory}</b>
          </p>
          <p className="meal_country">
            Country: <b>{randomMeal.strArea}</b>
          </p>
        </div>
        <SelectCategoryFilter
          headSearch={headSearch}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <hr />
      <MealsImageCardList
        arr={filteredMeals}
        setState={null}
        divId="search_result"
        divClass="search_result"
        linkTo="/meal"
      />
    </StyledResultsPage>
  );
};

export default SearchResultsPage;
