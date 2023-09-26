// import React from "react";
// import "./CompleteRecipeModal.css";

// export default function CompleteRecipeModal({ recipe, onClose, showCompleteRecipeLink, showIngredients }) {
//   const { label, ingredients, shareAs } = recipe;

  
//   const ingredientList = ingredients && typeof ingredients === 'string' ? ingredients.split(", ") : [];

//   return (
//     <div className="complete-recipe-modal">
//       <div className="complete-recipe-content">
//         <h2>{label}</h2>
//         {showIngredients && (
//           <>
//             <p>Ingredients:</p>
//             <ul>
//               {ingredientList.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {showCompleteRecipeLink && (
//           <a href={shareAs} target="_blank" rel="noopener noreferrer">
//             View Complete Recipe
//           </a>
//         )}

//         <br />
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import "./CompleteRecipeModal.css";

// export default function CompleteRecipeModal({ recipe, onClose, showCompleteRecipeLink, showIngredients }) {
//   const { label, ingredients, shareAs } = recipe;

//   return (
//     <div className="complete-recipe-modal">
//       <div className="complete-recipe-content">
//         <h2>{label}</h2>
//         {showIngredients && (
//           <>
//           <p>Ingredients:</p>
//           <ul>
//             {ingredients?.map((ingredient, index) => (
//               <li key={index}>{ingredient.text}</li>
//             ))}
//           </ul>
//           </>
//         )}
        
//         {showCompleteRecipeLink && (
//           <a href={shareAs} target="_blank" rel="noopener noreferrer">
//             View Complete Recipe
//           </a>
//         )}

//         <br />
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import "./CompleteRecipeModal.css";

export default function CompleteRecipeModal({ recipe, onClose, showCompleteRecipeLink, showIngredients }) {
  const { label, ingredients, shareAs } = recipe;

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
