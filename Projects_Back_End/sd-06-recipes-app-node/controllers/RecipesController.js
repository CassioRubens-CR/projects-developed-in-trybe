const recipes = require('../models/Recipes');
const { Router } = require('express');

const recipesController = new Router();

recipesController.get('/', async (req, res) => {
  res.status(200).json(await recipes.getAll());
});

module.exports = recipesController;
