
import React, { useState } from "react";
import axios from "axios";
import '../RecipeForm.css';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/recipes/", formData);
      setFormData({ title: "", description: "", ingredients: "", instructions: "" });
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        <div className="form-group">
          <label htmlFor="title">Recipe Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter recipe title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Describe your recipe"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            name="ingredients"
            id="ingredients"
            placeholder="List the ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            placeholder="Step-by-step instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;


