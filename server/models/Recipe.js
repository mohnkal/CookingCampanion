import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    recipeTitle: { type: String, required: true},
    ingredients: { type: String, required: true},
    instructions: { type: String, required: true},
    imageURL: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
