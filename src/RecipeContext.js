import React, { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <RecipeContext.Provider value={{ recipeList, setRecipeList }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipeContext() {
  return useContext(RecipeContext);
}
