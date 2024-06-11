import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getFilterCategories } from "../redux/mealSlice";
import { RootState, AppDispatch } from "../redux/store";

const Sidebar: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const categories = useSelector(
		(state: RootState) => state.category.categories
	);

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	const handleClick = (category: string) => {
		dispatch(getFilterCategories(category));
		navigate("/filter");
	};

	return (
		<React.Fragment>
			<aside>
				<nav className=" min-h-screen w-72 text-gray-100 px-4 bg-gradient-to-b from-yellow-400 to-red-600 bg-red-700 border-2 border-double border-black rounded-xl">
					<div className="py-3 flex justify-center">
						<h1 className="text-3xl">Categories</h1>
					</div>
					<div>
						{categories.map((category: any) => (
							<div
								className=" text-l  py-4 px-4 cursor-pointer hover:bg-green-600"
								onClick={() =>
									handleClick(category.strCategory)
								}
							>
								{category.strCategory}
							</div>
						))}
					</div>
				</nav>
			</aside>
		</React.Fragment>
	);
};
export default Sidebar;
