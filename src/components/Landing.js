import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Landing.css";
import cookingman from "./cookingman.png";
import Dishcard from "./Dishcard";
import { useRecipeContext } from "../RecipeContext";
import ReviewCard from "./ReviewCard";
import { useNavigate } from "react-router-dom";
import CompleteRecipeModal from "./CompleteRecipeModal";



export default function Landing() {
  const { recipeList } = useRecipeContext();
  const navigate = useNavigate();

  const [cuisineRecipes, setCuisineRecipes] = useState([]);
  const [showIngredients, setShowIngredients] = useState(null);
  const [showCompleteRecipe, setShowCompleteRecipe] = useState(null);

  const redirectToSharingPage = () => {
    navigate("/sharing");
  };

  const toggleCompleteRecipe = (index) => {
    setShowCompleteRecipe(showCompleteRecipe === index ? null : index);
  };
  
  const toggleIngredients = (index) => {
    setShowIngredients(showIngredients === index ? null : index);
  }

  const onClose = () => {
    setShowIngredients(false); 
    setShowCompleteRecipe(false);
  };
  

  useEffect(() => {
    document.title = "name - pagename";
  }, []);

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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  // const handleFileUpload = async (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);

  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     // Send a POST request to your server endpoint
  //   fetch('https://food-api-4uyzwngf6q-uc.a.run.app/', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('File uploaded successfully:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error uploading file:', error);
  //     });
  // }};
  
  const [response, setResponse] = useState(null);


  // New handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('image');
    formData.append('image', fileInput.files[0]);

    try {
      const serverResponse = await fetch('https://food-api-4uyzwngf6q-uc.a.run.app/', {
        method: 'POST',
        body: formData,
      });

      // Assuming the server returns JSON data, you can parse it as follows
      const responseData = await serverResponse.json();

      // Save the response in the 'response' state variable
      setResponse(responseData);

      console.log(responseData);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
   

  return (
    <>
      <div className="landing-container">
        <span className="cooking">
          <p className="ccompanion">
            Cooking <br />
            Campanion
          </p>
        </span>
        <div className="uploadbox">
          <div className="ingredientd">Ingredient Detection</div>
          <form onSubmit={handleSubmit} method="POST" enctype="multipart/form-data" >
            <input type="file" className="uploadbtn" accept="image/*" id="image" name="image" />
            <input type="submit" value="Submit Value" className="submit"/>
          </form>
        </div>
      </div>
      <div className="fybox">
        <div className="fy">For You</div>
      </div>
      <div className="dishbox">
        {recipeList.length > 0 ? (
          recipeList.map((hit, index) => (
            <Dishcard key={index} recipe={hit.recipe} />
          ))
        ) : (
          <>
            <Dishcard recipe={{ label: "No Recipe", ingredientLines: [] }} />
            <Dishcard recipe={{ label: "No Recipe", ingredientLines: [] }} />
            <Dishcard recipe={{ label: "No Recipe", ingredientLines: [] }} />
          </>
        )}
      </div>
      <div className="interbox">
        <div className="inter">Recipe's shared</div>
      </div>

      <div className="cuisine">
      <Carousel
        className="cuisine"
        responsive={responsive}
        ssr={true}
        infinite={true}
      >
        {cuisineRecipes.map((recipe, index) => (
          <div key={index} className="recipelistcontainer">
            <div className="recipecontainer">
              <img src={recipe.imageURL} alt={recipe.recipeTitle} className="CoverImage" />
              <span className="RecipeName">
                <h2>{recipe.recipeTitle}</h2>
              </span>
              <button className="IngredientsText" onClick={() => toggleIngredients(index)}>
                Ingredients
              </button>
              {showIngredients === index && (
                <CompleteRecipeModal
                recipe={{
                  label: recipe.recipeTitle,
                  ingredients: recipe.ingredients
                }}
                showCompleteRecipeLink={false}
                showIngredients={true}
                onClose={onClose}  // Make sure this line is included
              />
              )}
              <button className="SeeMoreText" onClick={() => toggleCompleteRecipe(index)}>
                Instructions
              </button>
              {showCompleteRecipe === index && (
                <CompleteRecipeModal
                recipe={{
                  label: recipe.recipeTitle,
                  ingredients: recipe.ingredients
                }}
                showCompleteRecipeLink={false}
                showIngredients={true}
                onClose={onClose}  // Make sure this line is included
              />
              )}
            </div>
          </div>
        ))}
        </Carousel>
      </div>



      <div className="srecipe">
        <div className="man">
          <img src={cookingman} alt="cookingman" />
        </div>
        <div className="love">
          Love Cooking and want to <br />
          share your recipe with <br />
          others ?<br />
          <button className="share" onClick={redirectToSharingPage}>
            Start Sharing Recipe
          </button>
        </div>
      </div>
      <div className="what">
        <div className="wp">What People has to say</div>
      </div>
      <div className="whatbox">
        <ReviewCard />
      </div>
    </>
  );
}
