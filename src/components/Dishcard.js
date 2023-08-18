import React,{useState} from "react";
import "./Dishcard.css";
import CompleteRecipeModal from "./CompleteRecipeModal";

export default function Dishcard({ recipe }) {
  const { label, ingredientLines, image, shareAs } = recipe || {
    label: "No Recipe",
    ingredientLines: [],
    image:"",
    shareAs:"",
  };

  const [showCompleteRecipe, setShowCompleteRecipe] = useState(false)

  const toggleCompleteRecipe = () => {
    setShowCompleteRecipe(!showCompleteRecipe);
  }

  return (
    <div className="recipelistcontainer">
      <div className="recipecontainer">
        <img
          src={image}
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

        {/* <span className="SeeMoreText">See Complete Recipe</span> */}
        <button className="SeeMoreText" onClick={toggleCompleteRecipe}>
          See Complete Recipe
        </button>
        {showCompleteRecipe && (
          <CompleteRecipeModal
            recipe={{label,ingredientLines, shareAs}}
            onClose={(toggleCompleteRecipe)}/>
        )}

      </div>
    </div>
  );
}
