import React, { useState, useEffect } from "react";
// import { useLocation, useHistory } from "react-router-dom";

import { getMealsByCategory } from "../../../service.js";

import MealsImageCardList from "../../MealsImageCardListComponent/MealsImageCardList.jsx";
import ImageLinkCard from "../../ImageLinkCardComponent/ImageLinkCard.jsx";

import StyledCategoryPage from "./StyledcategoryPage.jsx";
// import { useLocation } from "react-router";

const CategoryPage = ({ category, meals, setMeals }) => {
  const [randomMeal, setRandomMeal] = useState({});
  const [localSearch, setLocalSearch] = useState("");

  const filteredMeals = meals.filter((meal) => {
    const mealLC = meal.strMeal.toLowerCase();
    const queryLC = localSearch.toLowerCase();

    return mealLC.includes(queryLC);
  });

  // const location = useLocation();
  // console.log(location.pathname);
  // const history = useHistory();
  // console.log(history.push("/meal"));
  // // JS alternativa za adresu (bez domena, sa domenom)
  // console.log(window.location.pathname);
  // console.log(window.location.href);
  useEffect(
    () =>
      getMealsByCategory(category).then((res) => {
        const catMealsArr = res.data.meals;
        const randMealIdx = Math.floor(Math.random() * catMealsArr.length);
        setRandomMeal(catMealsArr[randMealIdx]);
        setMeals(catMealsArr);
      }),
    // category and setMeals doesn't change at all
    // Dependencies added just so that React isn't complaining
    [category, setMeals]
  );
  // console.log("category: ", category);
  // console.log("Meals arr: ", meals);
  // console.log("Random meal: ", randomMeal);

  return (
    <StyledCategoryPage className="category_page">
      <h1 className="category_title">{category}</h1>
      <div className="meal_and_search">
        <div className="recommended_meal">
          <h3 className="recommended_title">Our recommendation:</h3>
          <ImageLinkCard
            linkTo="/meal"
            divClass="meal"
            setState={null}
            obj={{
              imgSrc: randomMeal.strMealThumb,
              title: randomMeal.strMeal,
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Search meals locally"
          autoComplete="off"
          onChange={(e) => setLocalSearch(e.target.value)}
        />
      </div>
      <hr />
      <MealsImageCardList
        arr={filteredMeals}
        setState={setMeals}
        divId="meals"
        divClass="meals"
        linkTo="/category"
      />
    </StyledCategoryPage>
  );
};

export default CategoryPage;
