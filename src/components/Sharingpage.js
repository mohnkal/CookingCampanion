import React, { useState } from "react";
import "./SharingPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SharingPage = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageURL, setImageURL] = useState("");

  const navigate = useNavigate();

  const handleShareRecipe = async () => {
    try {
      
      const response = await axios.post("http://localhost:5000/api/recipes", {
        recipeTitle,
        ingredients,
        instructions,
        imageURL,
      });

      console.log("Recipe Shared Successfully- ", response.data);

      setRecipeTitle("");
      setIngredients("");
      setInstructions("");
      setImageURL("");

      navigate("/");
    } catch (error) {
      console.error("Error sharing recipe ", error);
    }
  };

  return (
    <div className="recipe-share-container">
      <h2>Share Your Recipe</h2>
      <form className="recipe-form">
        <div className="form-group">
          <label htmlFor="recipe-title">Recipe Title:</label>
          <input
            type="text"
            id="recipe-title"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="6"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image-url">Image URL:</label>
          <input
            type="text"
            id="image-url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleShareRecipe}>
          Share Recipe
        </button>
      </form>
    </div>
  );
};

export default SharingPage;
