import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getAllCategories } from "../service.js";

import GlobalStyle from "../GlobalStyles.jsx";

import Header from "./HeaderComponent/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage.jsx";
import SingleMealPage from "./pages/SingleMealPage/SingleMealPage.jsx";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [meals, setMeals] = useState([]);
  const [headSearch, setHeadSearch] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => {
      console.log("radi");
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header setHeadSearch={setHeadSearch} />
        <Switch>
          <Route exact path="/">
            <HomePage categories={categories} setCategory={setCategory} />
          </Route>
          <Route path="/category">
            <CategoryPage
              category={category}
              meals={meals}
              setMeals={setMeals}
            />
          </Route>
          <Route path="/meal">
            <SingleMealPage />
          </Route>
          <Route path="/search">
            <SearchResultsPage headSearch={headSearch} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
