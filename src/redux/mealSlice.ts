
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMealsByName, fetchRandomMeal, fetchCategories, fetchMealDetails,fetchFilterCategories} from "../Api/handleApi";

interface MealState {
  meals: any[];
  mealDetails: any | null;
  categories: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState : MealState ={
    meals: [],
    mealDetails: null,
    categories: [],
    status: "idle",
    error: null,
}

export const getMealsByName  = createAsyncThunk('meals/fetchByName', async (name:string)=>{
  const meals = await fetchMealsByName(name);
  return meals;
} );

export const getFilterCategories = createAsyncThunk('meals/fetchFilterCategory' , async(category:string)=>{
  const meals = await fetchFilterCategories(category);
  return meals;
})

export const getRandomMeal = createAsyncThunk('meals/fetchRandom', async () => {
  const meal = await fetchRandomMeal();
  return meal;
});

export const getCategories = createAsyncThunk('meals/fetchCategories' , async()=>{
  const categories = await fetchCategories();
  return categories;
})
export const getMealDetails = createAsyncThunk('meals/fetchDetails' , async (id:string)=>{
  const mealDetails = await fetchMealDetails(id);
  return mealDetails;
})
const mealSlice = createSlice({
  name : 'meals' , 
  initialState,
  reducers:{},
  extraReducers : (builder) => {
  builder.
  addCase(getMealsByName.pending , (state)=>{
    state.status = "loading";
    console.log("loading...")
  })
  .addCase(getMealsByName.fulfilled , (state , action)=>{
    state.status = "succeeded"
    state.meals = action.payload;
    
  })
  .addCase(getMealsByName.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message || 'Something went wrong';
  })
  .addCase(getMealDetails.fulfilled , (state , action)=>{
    state.mealDetails = action.payload
  })
  // .addCase(getMealDetails.pending , (state) =>{
  //   state.status = "loading";
  // } )
  // .addCase(getMealDetails.rejected, (state, action) => {
  //   state.status = 'failed';
  //   state.error = action.error.message || 'Something went wrong';
  // })
  .addCase(getRandomMeal.fulfilled , (state , action)=>{
    state.mealDetails = action.payload;
  })
  .addCase(getCategories.fulfilled , (state , action)=>{
    state.categories =  action.payload
  })
  .addCase(getCategories.pending , (state)=>{
    state.status = 'loading';
  })
  .addCase(getCategories.rejected , (state , action)=>{
    state.status = 'failed';
    state.error = action.error.message || 'failed to fetch categories';
  })
  .addCase(getFilterCategories.fulfilled , (state,action)=>{
    state.meals = action.payload;
    state.status =  'succeeded';
  })
  .addCase(getFilterCategories.pending , (state)=>{
    state.status = 'loading';
  })
  .addCase(getFilterCategories.rejected , (state,action)=>{
    state.status = 'failed';
    state.error = action.error.message || 'failed to fetch meals';
  })
  }
})
export default mealSlice.reducer