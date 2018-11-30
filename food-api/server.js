var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Recipe = require('./api/models/RecipeModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Recipedb", { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/recipeRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('recipe RESTful API server started on: ' + port);

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Methods', 'GET,POST');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     res.status(404).send({ url: req.originalUrl + ' not found' });
//     return next();
//     //res.status(200).send(res.json);
// });
//The snippet above helps to redirect and respond whenever a wrong route is entered on the site.

