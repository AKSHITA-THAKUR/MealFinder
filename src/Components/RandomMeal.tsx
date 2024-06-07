import React from "react";
import {  useSelector  } from "react-redux";
import { RootState } from "../redux/store";

const RandomMeal:React.FC = () => {
    const randomMeal = useSelector((state: RootState) => state.meal.mealDetails);
    if (!randomMeal) {
        return <div>No random meal fetched yet.</div>;
    }
    return(
        <React.Fragment>
           <div>
      <h2>{randomMeal.strMeal}</h2>
      <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} className="w-full h-48 object-cover" />
      <h3>Ingredients:</h3>
      <ul>
        {Object.keys(randomMeal)
          .filter((key) => key.startsWith("strIngredient") && randomMeal[key])
          .map((key) => (
            <li key={key}>{randomMeal[key]}</li>
          ))}
      </ul>
      <h3>Recipe:</h3>
      <p>{randomMeal.strInstructions}</p>
    </div>
        </React.Fragment>
    )
}
export default RandomMeal