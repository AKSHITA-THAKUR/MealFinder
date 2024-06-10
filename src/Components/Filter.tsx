import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Filter: React.FC = () => {
  const navigate = useNavigate();
  const filterMeals = useSelector((state: RootState) => state.meal.meals);

  const handleMealClick = (id: string) => {
    navigate(`/meal/${id}`);
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        {filterMeals.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded p-4 m-3 "
            onClick={() => handleMealClick(meal.idMeal)}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-xl mt-2">{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default Filter;
