import React from "react";
import { useState } from "react";
import "./RecipeManager.css";

function RecipeManager() {
  // State for each input field
  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [allergens, setAllergens] = useState("");
  // State for the list of recipes
  const [recipes, setRecipes] = useState([]);

  // Handle form submission
  const handleAddRecipe = (e) => {
    e.preventDefault();
    // Create a new recipe object
    const newRecipe = {
      cuisine,
      difficulty,
      cookTime,
      servings,
      // Split allergens into an array
      allergens: allergens.split(",").map((a) => a.trim()),
    };

    // Check for duplicates
    const isDuplicate = recipes.some(
      (recipe) =>
        recipe.cuisine.toLowerCase() === newRecipe.cuisine.toLowerCase() &&
        recipe.difficulty.toLowerCase() ===
          newRecipe.difficulty.toLowerCase() &&
        recipe.cookTime === newRecipe.cookTime &&
        recipe.servings === newRecipe.servings
    );

    if (isDuplicate) {
      alert("This recipe already exists!");
      return;
    }

    // Add the new recipe to the list
    setRecipes([...recipes, newRecipe]);
    // Clear input fields
    setCuisine("");
    setDifficulty("");
    setCookTime("");
    setServings("");
    setAllergens("");
  };

  // Handle recipe deletion
  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  const Recipe = ({ recipe, index }) => (
    <li className="recipe-item">
      <p>
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
      <p>
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
      <p>
        <strong>Cook Time:</strong> {recipe.cookTime}
      </p>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <p>
        <strong>Allergens:</strong> {recipe.allergens.join(", ")}
      </p>
      <button className="delete-btn" onClick={() => handleDeleteRecipe(index)}>
        Delete
      </button>
    </li>
  );

  return (
    <div className="recipe-manager">
      <h2>Recipe Manager</h2>
      <form onSubmit={handleAddRecipe} className="recipe-form">
        <div>
          <label>Cuisine: </label>
          <input
            type="text"
            placeholder="Cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Difficulty: </label>
          <input
            type="text"
            placeholder="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cook Time: </label>
          <input
            type="text"
            placeholder="Cook Time"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Servings: </label>
          <input
            type="number"
            placeholder="Servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Allergens: </label>
          <input
            type="text"
            placeholder="Allergens (comma separated)"
            value={allergens}
            onChange={(e) => setAllergens(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add Recipe
        </button>
      </form>
      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeManager;
