
var mongoose = require('mongoose'),
Recipe = mongoose.model('Recipes');


exports.recipes = function(req, res) {
  console.log('in recipeController get');
    Recipe.find({}, function(err, recipes) {
      if (err)
        res.send(err);
      res.json(recipes);
    });
  };

exports.create = function(req, res) {
    var new_recipe = new Recipe(req.body);
    new_recipe.save(function(err, recipe) {
      if (err)
        res.send(err);
      res.json(recipe);
    });
  };
  
  
  exports.recipe = function(req, res) {
    Recipe.findById(req.params.recipeId, function(err, recipe) {
      if (err)
        res.send(err);
      res.json(recipe);
    });
  };

  exports.update = function(req, res) {
    Recipe.findOneAndUpdate({_id: req.params.recipeId}, req.body, {new: true}, function(err, recipe) {
      if (err)
        res.send(err);
      res.json(recipe);
    });
  };

  exports.delete = function(req, res) {
    Recipe.remove({
      _id: req.params.recipeId
    }, function(err, recipe) {
      if (err)
        res.send(err);
      res.json({ message: 'Recipe successfully deleted' });
    });
  }