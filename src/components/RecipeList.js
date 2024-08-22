
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/recipes/");
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="recipe-list-container">
      <h2 className="title">Recipes</h2>
      {recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-description">{recipe.description}</p>
              <p className="recipe-ingredients">
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p className="recipe-instructions">
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;

