import React from "react";
import "./CompleteRecipeModal.css";

export default function CompleteRecipeModal({ recipe, onClose, showCompleteRecipeLink, showIngredients }) {
  const { label, ingredients, shareAs } = recipe;

  return (
    <div className="complete-recipe-modal">
      <div className="complete-recipe-content">
        <h2>{label}</h2>
        {showIngredients && (
          <>
          <p>Ingredients:</p>
          <ul>
            {ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
          </>
        )}
        
        {showCompleteRecipeLink && (
          <a href={shareAs} target="_blank" rel="noopener noreferrer">
            View Complete Recipe
          </a>
        )}

        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
