import React from "react";
import "./Dishcard.css";

export default function Dishcard({ recipe }) {
  const { label, ingredientLines } = recipe || {
    label: "No Recipe",
    ingredientLines: [],
  };
  return (
    <div className="recipelistcontainer">
      <div className="recipecontainer">
        <img
          src="https://img.freepik.com/premium-photo/lahmacun-is-popular-turkish-dish-thin-crispy-tortilla-with-minced-lamb-tomatoes-bell-pepper-black-table_207126-4997.jpg?w=360"
          alt=""
          className="CoverImage"
        />
        <span className="RecipeName">
          <h2>{label}</h2>
        </span>
        <span className="IngredientsText">Ingredients</span>
        <ul className="IngredientList">
          {ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <span className="SeeMoreText">See Complete Recipe</span>
      </div>
    </div>
  );
}
