import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	fetchMealsByName,
	fetchRandomMeal,
	fetchCategories,
	fetchMealDetails,
	fetchFilterCategories,
} from "../api/handleApi";

interface MealState {
	meals: any[];
	mealDetails: any | null;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

interface CategoryState {
	categories: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialMealState: MealState = {
	meals: [],
	mealDetails: null,
	status: "idle",
	error: null,
};

const initialCategoryState: CategoryState = {
	categories: [],
	status: "idle",
	error: null,
};

export const getMealsByName = createAsyncThunk(
	"meals/fetchByName",
	async (name: string) => {
		const meals = await fetchMealsByName(name);
		return meals;
	}
);

export const getFilterCategories = createAsyncThunk(
	"meals/fetchFilterCategory",
	async (category: string) => {
		const meals = await fetchFilterCategories(category);
		return meals;
	}
);

export const getRandomMeal = createAsyncThunk(
  "meals/fetchRandom", 
  async () => {
	const meal = await fetchRandomMeal();
	return meal;
});

export const getCategories = createAsyncThunk(
	"meals/fetchCategories",
	async () => {
		const categories = await fetchCategories();
		return categories;
	}
);
export const getMealDetails = createAsyncThunk(
	"meals/fetchDetails",
	async (id: string) => {
		const mealDetails = await fetchMealDetails(id);
		return mealDetails;
	}
);
const mealSlice = createSlice({
	name: "meal",
	initialState: initialMealState,
	reducers: {},
	extraReducers: (builder) => {
		builder

			.addCase(getMealsByName.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.meals = action.payload;
			})

			.addCase(getMealsByName.pending, (state) => {
				state.status = "loading";
			})

			.addCase(getMealsByName.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "Something went wrong";
			})

			.addCase(getMealDetails.fulfilled, (state, action) => {
				state.mealDetails = action.payload;
			})

			.addCase(getRandomMeal.fulfilled, (state, action) => {
				state.mealDetails = action.payload;
			})

			.addCase(getFilterCategories.fulfilled, (state, action) => {
				state.meals = action.payload;
				state.status = "succeeded";
			})

			.addCase(getFilterCategories.pending, (state) => {
				state.status = "loading";
			})

			.addCase(getFilterCategories.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "failed to fetch meals";
			});
	},
});

const CategorySlice = createSlice({
	name: "category",
	initialState: initialCategoryState,
	reducers: {},
	extraReducers: (builder) => {

		builder
			.addCase(getCategories.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.categories = action.payload;
			})

			.addCase(getCategories.pending, (state) => {
				state.status = "loading";
			})
      
			.addCase(getCategories.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "Something went wrong";
			});
	},
});

export const mealsReducer = mealSlice.reducer;
export const categoriesReducer = CategorySlice.reducer;
