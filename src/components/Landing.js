import React, {useEffect} from "react";
import "./Landing.css";
import cookingman from "./cookingman.png";
import Dishcard from "./Dishcard";
// import Comment from "./Comment";

export default function Landing() {
  useEffect(() => {
    document.title = "name - pagename";
  }, []);
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
          <button className="uploadbtn" >Upload File</button>
        </div>
      </div>
      <div className="fybox">
        <div className="fy">For You</div>
      </div>
      <div className="dishbox">
        <Dishcard />
        <Dishcard />
      </div>
      <div className="dishbox">
        <Dishcard />
        <Dishcard />
      </div>
      <div className="dishbox">
        <Dishcard />
        <Dishcard />
      </div>
      <div className="interbox">
        <div className="inter">International</div>
      </div>
      <div className="cuisine"></div>

      <div className="srecipe">
        <div className="man">
          <img src={cookingman} alt="cookingman" />
        </div>
        <div className="love">
          Love Cooking and want to <br />
          share your recipe with <br />
          others ?<br />
          <button className="share">
            Start Sharing Recipe
          </button>
        </div>
      </div>

      <div className="what">
        <div className="wp">What People has to say</div>
      </div>
      <div className="whatbox">
        {/* <Comment/>
       <Comment/>
       <Comment/> */}
      </div>
    </>
  );
}
