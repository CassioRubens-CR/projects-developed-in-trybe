const express = require('express');
const app = express();
const recipesController = require('./controllers/RecipesController');

const PORT = 3000;

app.get('/', (req, res) => {
res.send("project-group-sd-06-recipes-app-node");
}); 

app.use('/recipes', recipesController);

app.listen(PORT, () => console.log('App listening on PORT %s', PORT));

