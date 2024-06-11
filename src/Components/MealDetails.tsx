import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../redux/store";
import { getMealDetails } from "../redux/mealSlice";

const MealDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch: AppDispatch = useDispatch();

	const mealDetails = useSelector((state: RootState) => state.meal.mealDetails);  
	const status = useSelector((state: RootState) => state.meal.status);

	useEffect(() => {
		if (id) {
			dispatch(getMealDetails(id));
		}
	}, [dispatch, id]);

	if (status === "loading") {
		return (
			<div className="flex justify-center items-center h-screen text-2xl">
				Loading...
			</div>
		);
	}

	if (!mealDetails) {
		return (
			<div className="flex justify-center items-center h-screen text-2xl">
				No details found
			</div>
		);
	}

	return (
		<div className="container mx-auto p-4">
			<div className="bg-white rounded-lg shadow-lg p-6">
				<h2 className="text-2xl font-bold mb-4 font-serif">
					{mealDetails.strMeal}
				</h2>
				<div className="rounded-lg overflow-hidden mb-4">
					<img
						src={mealDetails.strMealThumb}
						alt={mealDetails.strMeal}
						className="w-full h-48 object-cover"
					/>
				</div>
				<h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
				<div className="grid grid-cols-3 gap-4">
					{Object.keys(mealDetails)
						.filter(
							(key) =>
								key.startsWith("strIngredient") &&
								mealDetails[key]
						)
						.map((key) => (
							<div key={key}>
								<p className="mb-1">{mealDetails[key]}</p>
							</div>
						))}
				</div>
				<h3 className="text-xl font-semibold mb-2 mt-4">Recipe:</h3>
				<p className="leading-relaxed">{mealDetails.strInstructions}</p>
			</div>
		</div>
	);
};

export default MealDetails;
