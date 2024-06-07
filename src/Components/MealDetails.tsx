import React ,{useEffect} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState  , AppDispatch} from "../redux/store";
import { getMealDetails } from "../redux/mealSlice";

const MealDetails:React.FC =() => {
    const { id } = useParams<{ id: string }>();
    const dispatch:AppDispatch = useDispatch();
    const mealDetails  = useSelector((state:RootState)=> state.meal.mealDetails)
    const status = useSelector((state: RootState) => state.meal.status);

    useEffect(() => {
        if (id) {
          dispatch(getMealDetails(id));
        }
      }, [dispatch, id]);
      if (status === "loading") {
        return <div>Loading...</div>;
      }
    
      if (!mealDetails) {
        return <div>No details found</div>;
      }

    return(
        <React.Fragment>
         
         <h2>{mealDetails.strMeal}</h2>
      <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      <h3>Ingredients:</h3>
      <ul>
        {Object.keys(mealDetails)
          .filter((key) => key.startsWith("strIngredient") && mealDetails[key])
          .map((key) => (
            <li key={key}>{mealDetails[key]}</li>
          ))}
      </ul>
      <h3>Recipe:</h3>
      <p>{mealDetails.strInstructions}</p>

        </React.Fragment>
    )
}

export default MealDetails