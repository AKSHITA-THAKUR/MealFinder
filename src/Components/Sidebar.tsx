import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getFilterCategories } from "../redux/mealSlice";
import { RootState, AppDispatch } from "../redux/store";
const Sidebar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.meal.categories);
 
  const navigate = useNavigate();
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
        <nav className="bg-black min-h-screen w-72 text-gray-100 px-4">
          <div className="py-3 flex justify-center">
            <h1 className="text-3xl">Categories</h1>
          </div>
          <div>
            {categories.map((category: any) => (
              <div
                className=" text-l  py-4 px-4 cursor-pointer hover:bg-gray-700"
                onClick={() => handleClick(category.strCategory)}
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
