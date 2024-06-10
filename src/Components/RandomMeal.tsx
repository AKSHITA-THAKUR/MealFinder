import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const RandomMeal: React.FC = () => {
	const randomMeal = useSelector(
		(state: RootState) => state.meal.mealDetails
	);

	if (!randomMeal) {
		return <div className="text-center">No random meal fetched yet.</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<div className="bg-white rounded-lg shadow-lg p-6">
				<h2 className="text-2xl font-bold mb-4">
					{randomMeal.strMeal}
				</h2>
				<img
					src={randomMeal.strMealThumb}
					alt={randomMeal.strMeal}
					className="w-full h-48 object-cover rounded-lg mb-4"
				/>
				<h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
				<ul className="list-disc pl-5 mb-4">
					{Object.keys(randomMeal)
						.filter(
							(key) =>
								key.startsWith("strIngredient") &&
								randomMeal[key]
						)
						.map((key) => (
							<li key={key} className="mb-1">
								{randomMeal[key]}
							</li>
						))}
				</ul>
				<h3 className="text-xl font-semibold mb-2">Recipe:</h3>
				<p className="leading-relaxed">{randomMeal.strInstructions}</p>
			</div>
		</div>
	);
};

export default RandomMeal;
