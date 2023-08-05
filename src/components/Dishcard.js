import React from 'react'
import "./Dishcard.css"

export default function Dishcard() {
  return (
    <>
      <div className="recipelistcontainer">
        <div className="recipecontainer">
            <img src="https://img.freepik.com/premium-photo/lahmacun-is-popular-turkish-dish-thin-crispy-tortilla-with-minced-lamb-tomatoes-bell-pepper-black-table_207126-4997.jpg?w=360" alt="" className='CoverImage' />
            <span className='RecipeName'>Shahi Paneer</span>
            <span className='IngredientsText'>Ingredients</span>
            <span className='SeeMoreText'>See Complete Recipe</span>
        </div>
      </div>
      {/* <div className="card">
        <div className="base">
          <b className="title">
            Shai Paneer
          </b>
          <p>
          Shahi Paneer is a traditional Indian dish from Northern India. Traditional shahi paneer ingredients include spices found in Northern India, such as cumin seeds, ginger, garlic, coriander powder, and garam masala.
          </p>
        </div>
        <div className="dish-image">
          <img src="https://img.freepik.com/premium-photo/lahmacun-is-popular-turkish-dish-thin-crispy-tortilla-with-minced-lamb-tomatoes-bell-pepper-black-table_207126-4997.jpg?w=360" alt="" />
        </div>
      </div> */}
    </>
  );
}

