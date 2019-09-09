//Dependencies

var path = require("path");
var friends = require("../data/friends.js");

//Routing

module.exports = function(app) {

//API GET Requests
//Handles when a user visits a page

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

//API POST Requests
//Code used when user submits survey 

app.post("api/friends", function(req, res) {
console.log("json for survey")
});

};