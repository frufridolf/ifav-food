"use strict";
module.exports = function (app){
    let recipeController = require("../controllers/recipeController");

    //routes
    app.route('/recipes')
    .get(recipeController.recipes)
    .post(recipeController.create);

     app.route('/recipes/:recipeId')
     .get(recipeController.recipe)
    .put(recipeController.update)
     .delete(recipeController.delete);


}

