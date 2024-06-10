import React from 'react'
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import SearchBar from './Components/SearchBar'
import MealList from './Components/MealList'
import MealDetails from "./Components/MealDetails"
import RandomMeal from "./Components/RandomMeal"
import ErrorPage from "./Components/ErrorPage"
import Sidebar from './Components/Sidebar'
import Filter from "./Components/Filter"
function App() {


  return (
    <BrowserRouter>
    <React.Fragment>  
      <div className="flex flex-col min-h-screen">
        <SearchBar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4"> 
            <Routes>
              <Route path="/" element={<MealList />} />
              <Route path="/meal/:id" element={<MealDetails />} />
              <Route path='/random-meal' element={<RandomMeal />} />
              <Route path='/filter' element={<Filter/>}/>
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </React.Fragment>
  </BrowserRouter>
  )
}

export default App
