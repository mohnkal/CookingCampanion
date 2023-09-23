import React, { useState } from "react";
import "./Dishcard.css";
import CompleteRecipeModal from "./CompleteRecipeModal";

export default function Dishcard({ recipe }) {
  const { label, ingredientLines, image, shareAs, ingredients } = recipe || {
    label: "No Recipe",
    ingredientLines: [],
    image: "chickenpaprikash.jpg",
    shareAs: "",
    ingredients: [],
  };

  const [showCompleteRecipe, setShowCompleteRecipe] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

  const toggleCompleteRecipe = () => {
    setShowCompleteRecipe(!showCompleteRecipe);
  };

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  }

  return (
    <div className="recipelistcontainer">
      <div className="recipecontainer">
        <img src={image} alt="" className="CoverImage" />
        <span className="RecipeName">
          <h2>{label}</h2>
        </span>
        <button className="IngredientsText" onClick={toggleIngredients}>
          Ingredients
        </button>        
        {showIngredients && (
          <CompleteRecipeModal
            recipe={{ label, ingredients }}
            onClose={toggleIngredients}
            showCompleteRecipeLink={false}
            showIngredients={true}
          />
        )}
        <button className="SeeMoreText" onClick={toggleCompleteRecipe}>
          See Complete Recipe
        </button>
        {showCompleteRecipe && (
          <CompleteRecipeModal
            recipe={{ label, ingredientLines, shareAs, ingredients }}
            onClose={toggleCompleteRecipe}
            showCompleteRecipeLink={true}
            showIngredients={false}
          />
        )}
      </div>
    </div>
  );
}
