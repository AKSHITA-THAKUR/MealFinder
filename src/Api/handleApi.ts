import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMealsByName = async (name: string) => {
  const { data } = await axios.get(`${BASE_URL}/search.php?s=${name}`);
  return data.meals;
};

export const fetchRandomMeal = async () => {
  const { data } = await axios.get(`${BASE_URL}/random.php`);
  return data.meals[0];
};

export const fetchMealDetails = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return data.meals[0];
};

export const fetchCategories = async () => {
  const { data } = await axios.get(`${BASE_URL}/categories.php`);
  return data.categories;
};
export const fetchFilterCategories = async (category: string) => {
  const { data } = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
  return data.meals;
};
