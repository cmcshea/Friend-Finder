//Dependencies 
//Including the Path package to get correct file path for html

var path = require("path");

//Routing

module.exports = function (app) {

    //HTML GET Requests

    //Displays the Home page

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //Displays the Survey page

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //If no matching route is found, default to Home

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}