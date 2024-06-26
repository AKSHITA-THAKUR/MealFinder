import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMealsByName = async (name: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return data.meals;
  } catch (error) {
    console.error("Error fetching meals by name:", error);
  }
}; 

export const fetchRandomMeal = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/random.php`);
    return data.meals[0];
  } catch (error) {
    console.error("Error fetching meals by name:", error);
  }
};

export const fetchMealDetails = async (id: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return data.meals[0];
  } catch (error) {
    console.error("Error fetching meals by name:", error);
  }
};

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories.php`);
    return data.categories;
  } catch (error) {
    console.error("Error fetching meals by name:", error);
  }
}; 

export const fetchFilterCategories = async (category: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return data.meals;
  } catch (error) {
    console.error("Error fetching meals by name:", error);
  }
};

