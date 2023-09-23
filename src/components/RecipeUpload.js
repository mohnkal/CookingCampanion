import React, { useState } from 'react';

const RecipeUpload = () => {
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const [file] = files;
      setRecipeData((prevData) => ({
        ...prevData,
        image: file,
      }));
    } else {
      setRecipeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server or store it in a database).
    console.log(recipeData);
    // Reset form fields after submission
    setRecipeData({
      title: '',
      ingredients: '',
      instructions: '',
      image: null,
    });
  };

  return (
    <div>
      <h2>Upload Your Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Recipe Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipeData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipeData.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipeData.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Recipe Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeUpload;
