//Dependencies

var express = require("express");
var path = require("path");

//Sets up Express app

var app = express();
var PORT = 3000;

//Sets up Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});