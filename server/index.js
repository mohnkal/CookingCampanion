import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import recipeRoutes from './routes/recipeRoutes.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json({limit: '30mb', extended:true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/api', recipeRoutes);

const MONGO_URI = "mongodb://127.0.0.1:27017/recipe";
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server Running on port: http://localhost:${PORT}`);
        });
    }).catch((error) => {
        console.log('Failed to Connect To MongoDB', error.message);
    });

