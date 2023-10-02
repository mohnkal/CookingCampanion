import React,{useState, useEffect} from "react";
import CompleteRecipeModal from "../CompleteRecipeModal";
import './style.css'
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const RecipeShared = () => {
  const [cuisineRecipes, setCuisineRecipes] = useState([]);
  const [showCompleteRecipe, setShowCompleteRecipe] = useState(null);
  const [showIngredients, setShowIngredients] = useState(null);

  console.log(cuisineRecipes);

  const toggleCompleteRecipe = (index) => {
    setShowCompleteRecipe(showCompleteRecipe === index ? null : index);
  };

  const toggleIngredients = (index) => {
    setShowIngredients(showIngredients === index ? null : index);
  };

  const onClose = () => {
    setShowIngredients(false);
    setShowCompleteRecipe(false);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recipes");
        const data = response.data;
        console.log(data);
        setCuisineRecipes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      {/* <Carousel
          className="cuisine"
          responsive={responsive}
          ssr={true}
          infinite={true}
        > */}
      {cuisineRecipes?.map((recipe, index) => (
        <div key={index} className="recipelistcontainer">
          <div className="recipecontainer">
            <img
              src={recipe.imageURL}
              alt={recipe.recipeTitle}
              className="CoverImage"
            />
            <span className="RecipeName">
              <h2>{recipe.recipeTitle}</h2>
            </span>
            <button
              className="IngredientsText"
              onClick={() => toggleIngredients(index)}
            >
              Ingredients
            </button>
            {showIngredients === index && (
              <CompleteRecipeModal
                recipe={{
                  label: recipe.recipeTitle,
                  ingredients: recipe.ingredients,
                }}
                showCompleteRecipeLink={false}
                showIngredients={true}
                onClose={onClose} // Make sure this line is included
              />
            )}
            <button
              className="SeeMoreText"
              onClick={() => toggleCompleteRecipe(index)}
            >
              Instructions
            </button>
            {showCompleteRecipe === index && (
              <CompleteRecipeModal
                recipe={{
                  label: recipe.recipeTitle,
                  ingredients: recipe.ingredients,
                }}
                showCompleteRecipeLink={false}
                showIngredients={true}
                onClose={onClose} // Make sure this line is included
              />
            )}
          </div>
        </div>
      ))}
      {/* </Carousel> */}
    </>
  );
};

export default RecipeShared;
