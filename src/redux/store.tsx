import { configureStore } from "@reduxjs/toolkit";
import { mealsReducer, categoriesReducer } from "./mealSlice"

const store = configureStore({
    reducer: {
        meal: mealsReducer,
        category : categoriesReducer
      }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;