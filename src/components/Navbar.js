import React, { useRef, useState } from "react";
import Axios from "axios";
import { useRecipeContext } from "../RecipeContext"; // Adjust the path
import logo from "./logo.png";
import "./Navbar.css";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory

export default function Navbar() {
  const { setRecipeList } = useRecipeContext();

  const navref = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navref.current.classList.toggle("responsive_nav");
  };

  const [timeoutId, updateTimeoutId] = useState();
  const APP_ID = "b3d83013";
  const APP_KEY = "99c125c3cda80cff95d788ab0a71c936";

  const fetchRecipe = async (inputSearch) => {
    try {
      console.log(inputSearch);
      const response = await Axios.get(
        `https://api.edamam.com/search?q=${inputSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      console.log(response);
      setRecipeList(response.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };
 
  const handlelogin = () => {
    console.log()
  }

  const onLogoClicked = (event) => {
    // Assuming you want to redirect to the home page
    navigate('/');
  }

  const onMyRecipeClick = () => {
    navigate('/recipeShared');
  }

  return (
    <>
      <div className="navbar">
        <div className="logo-image">
          <img src={logo} alt="logo" onClick={onLogoClicked} />
        </div>
        <div className="options-divider">
          <div className="upper-options">
            <div className="inputSearch">
              <input
                type="text"
                placeholder="Search for a recipe"
                onChange={onTextChange}
                id="navbar-search-id"
              />
              <button className="searchButton" >Search</button>
            </div>
            <a href="https://www.amazon.com/fmc/storefront?almBrandId=QW1hem9uIEZyZXNo" target="_blank" className="log">
              <SlBasket />
            </a>
            <a target="_blank" className="log">
              <AiOutlineHeart />
            </a>
            <button className="log" onClick={handlelogin}>
              <UserButton />
            </button>
          </div>
          <div className="lower-options" ref={navref}>
            <div className="myrec" onClick={onMyRecipeClick}>My Recipes</div>
            <div className="meals">Meals</div>
            <div className="quickbits">Quickbites</div>
            <div className="ingredients">Ingredients</div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </div>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </>
  );
}
