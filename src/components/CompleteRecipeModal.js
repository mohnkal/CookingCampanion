import React from "react";
import "./CompleteRecipeModal.css";

export default function CompleteRecipeModal({ recipe, onClose, showCompleteRecipeLink, showIngredients, showInstructions }) {
  const { label, ingredients, instructions, shareAs } = recipe;

  let ingredientList = [];
  

  if (Array.isArray(ingredients)) {
    ingredientList = ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient.text}</li>
    ));
  } else if (typeof ingredients === "string") {
    ingredientList = ingredients.split(", ").map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ));
  }

  let instructionList = [];
  if (Array.isArray(instructions)) {
    instructionList = instructions.map((instruction, index) => (
      <li key={index}>{instruction.text}</li>
    ));
  } else if (typeof instructions === "string") {
    instructionList = instructions.split(", ").map((instruction, index) => (
      <li key={index}>{instruction}</li>
    ));
  }

  return (
    <div className="complete-recipe-modal">
      <div className="complete-recipe-content">
        <h2>{label}</h2>
        {showIngredients && (
          <>
            <p>Ingredients:</p>
            <ul>
              {ingredientList}
            </ul>
          </>
        )}

        {showInstructions && (
          <>
            <p>Instructions:</p>
            <ul>
              {instructionList}
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
