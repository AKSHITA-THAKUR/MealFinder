import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { getMealsByName , getRandomMeal } from "../redux/mealSlice";
import { AppDispatch } from '../redux/store'; 
import { useNavigate } from "react-router-dom";
const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();

    const handleSearch = () => {
      dispatch(getMealsByName(query));
      navigate('/search');
    };
    const handleFetchRandomMeal = () => {
      dispatch(getRandomMeal());
      navigate("/random-meal");
    };
 

  return (
    <div>
    <header className="bg-gray-800 p-4 flex justify-between items-center w-full"> {/* Full width header */}
    <form className="flex-1 max-w-md mx-auto">
            <div className="relative">
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pr-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Meals here..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                />
                <button
                    type="button"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </form>
        <button
            type="button"
            className="ml-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={handleFetchRandomMeal}
        >
            Random Meal
        </button>
    </header>
</div>
  );
};

export default SearchBar;
