
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; 
import RecipeForm from "./components/RecipeForm"; 
import RecipeList from "./components/RecipeList"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/recipes" element={<RecipeList />} />
      </Routes>
    </Router>
  );
};

export default App;



