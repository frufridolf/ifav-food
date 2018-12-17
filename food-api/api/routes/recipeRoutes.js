 "use strict";
const express = require('express');
const app = express();
const router = express.Router();
console.log('in recipeRouts');

const Recipes = require('../models/recipeModel');

let recipeController = require("../controllers/recipeController"); 

router.route('/recipes')
.post(function (req, res, next) {
    console.log("in post recipes route");
    return recipeController.create(req,res);
})
.get(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      console.log("get recipes route")
    return recipeController.recipes(req,res);
});

module.exports = router;

