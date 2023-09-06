import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Landing.css";
import cookingman from "./cookingman.png";
import Dishcard from "./Dishcard";
import { useRecipeContext } from "../RecipeContext";

export default function Landing() {
  // importing from the context api RecipeContext.js
  const { recipeList } = useRecipeContext();

  useEffect(() => {
    document.title = "name - pagename";
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
          {/* <input type="file" className="uploadbtn" placeholder="Upload File" /> */}
          <button className="uploadbtn">Upload File</button>
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
            {/* <p>No recipe</p> */}
            <Dishcard recipe={{ label: "No Recipe", ingredientLines: [] }} />
            <Dishcard recipe={{ label: "No Recipe", ingredientLines: [] }} />
            <Dishcard recipe={{ label: "No Recipe", ingredientLines: [] }} />
            {/* <Dishcard />
            <Dishcard /> */}
          </>
        )}
      </div>
      <div className="interbox">
        <div className="inter">International</div>
      </div>
      {/* <div className="cuisine">
      </div> */}
      <Carousel
        className="cuisine"
        responsive={responsive}
        ssr={true}
        infinite={true}
      >
        <div className="cuisines">
          <span className="greek">Greek</span>
        </div>
        <div className="cuisines">
          <span className="thai">Thai</span>
        </div>
        <div className="cuisines">
          <span className="japanese">Japanese</span>
        </div>
        <div className="cuisines">
          <span className="spanish">Spanish</span>
        </div>
        <div className="cuisines">
          <span className="russian">Russian</span>
        </div>
        <div className="cuisines">
          <span className="mexican">Mexican</span>
        </div>
        <div className="cuisines">
          <span className="italian">Italian</span>
        </div>
        <div className="cuisines">
          <span className="german">German</span>
        </div>
        <div className="cuisines">
          <span className="indian">Indian</span>
        </div>
      </Carousel>
      <div className="srecipe">
        <div className="man">
          <img src={cookingman} alt="cookingman" />
        </div>
        <div className="love">
          Love Cooking and want to <br />
          share your recipe with <br />
          others ?<br />
          <button className="share">Start Sharing Recipe</button>
        </div>
      </div>

      <div className="what">
        <div className="wp">What People has to say</div>
      </div>
      <div className="whatbox"></div>
    </>
  );
}
