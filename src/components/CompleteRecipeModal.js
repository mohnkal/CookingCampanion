import React from "react";
import "./CompleteRecipeModal.css";

export default function CompleteRecipeModal({ recipe, onClose }) {
  return (
    <div className="complete-recipe-modal">
      <div className="complete-recipe-content">
        <h2>{recipe.label}</h2>
        {/* <p>Ingredients:</p>
        <ul>
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul> */}
        <a href={recipe.shareAs} target="_blank" rel="noopener noreferrer">
          View Complete Recipe
        </a>
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
