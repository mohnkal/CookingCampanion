import express from 'express';
import Recipe from '../models/Recipe.js';

const router = express.Router();

// to POST in database
router.post('/recipes', async(req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
        
    } catch (error) {
        res.status(400).json({message: error});
    }
});

// to fetch in frontend
router.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find(); 
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;





