import React from "react";
import { Link } from "react-router-dom";
import '../Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Recipe Sharing App</h1>
      <div className="button-container">
        <Link to="/add-recipe">
          <button className="add-recipe-button">Add Recipe</button>
        </Link>
      </div>
      <div className="button-container">
        <Link to="/recipes">
          <button className="view-recipes-button">View Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
