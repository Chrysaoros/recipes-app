import axios from "axios";

// const BASE = "https://www.themealdb.com/api";
// const jSON = "/json";
// const V1 = "/v1";
// const TEST_API_KEY = "/1";
const BASE = "https://www.themealdb.com/api/json/v1/1";
const SEARCH = "/search";
const CATEGORIES = "/categories";
const FILTER = "/filter";
const LOOKUP = "/lookup";
const PHP = ".php";
const FILTER_CATEGORY = "c";
const FILTER_ID = "i";
const FILTER_SEARCH = "s";

function filterQuery(filterBy, query) {
  return `?${filterBy}=${query}`;
}

// www.themealdb.com/api/json/v1/1/categories.php
export const getAllCategories = () => axios.get(`${BASE}${CATEGORIES}${PHP}`);

// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
export const getMealsByCategory = (query) =>
  axios.get(`${BASE}${FILTER}${PHP}${filterQuery(FILTER_CATEGORY, query)}`);

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export const getMealById = (id) =>
  axios.get(`${BASE}${LOOKUP}${PHP}${filterQuery(FILTER_ID, id)}`);

// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
export const getMealByName = (query) =>
  axios.get(`${BASE}${SEARCH}${PHP}${filterQuery(FILTER_SEARCH, query)}`);
