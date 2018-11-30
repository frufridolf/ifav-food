var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var RecipeSchema = new Schema(
    {
        recipeId: ObjectId,
        Category:{
            type: String,
                   required: 'Kindly enter the category of the recipe'
            },
        IsHealty:{
            type: String,
            enum: ['healty', 'yummie'],
                   required: 'Kindly enter the is healty property of the recipe'
            },
        Classification:{
            type: String,
                   required: 'Kindly enter the classification of the recipe'
            },
        HeadIngredient:{
            type: String,
                   required: 'Kindly enter the head ingredient of the recipe'
            },
        Ingredients:[
            {
                Ingredient:{ type: String },
                Quantity:{ type: Number },
                Unit:{ type:String}
            },
        ],
        Instructions:[
            {type:String}
        ]
    }
);
  
  module.exports = mongoose.model('Recipes', RecipeSchema);