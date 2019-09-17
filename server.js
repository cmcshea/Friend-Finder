//Dependencies

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Sets up Express app

var app = express();
var PORT =  process.env.PORT || 3000;

//Sets up Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

var exhbs = require('express-handlebars');
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

//Router - points the server to a series of route files

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



//Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});