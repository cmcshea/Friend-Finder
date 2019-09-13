//Dependencies
var friends = require("../data/friends.json");

//Routing

module.exports = function(app) {

//API GET Requests
//Handles when a user visits a page

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

//API POST Requests
//Code used when user submits survey 

app.post("/api/friends", function(req, res) {
    var { name, photo, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } = req.body;

    var newFriend = {
        name,
        photo,
        scores: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 ]
    }

    var bestmatch = {
        name: "",
        photo: "",
        diff: Infinity
    }

    for(var i = 0; i < friends.length; i++){
        var thisFriend = friends[i];
        var totalDiff = 0;
        for(var j = 0; j < thisFriend.scores.length; j++){
            totalDiff += Math.abs(parseInt(newFriend.scores[j] - parseInt(thisFriend.scores[j])))
        }
        if(totalDiff < bestmatch.diff){
            bestmatch = {
                name: thisFriend.name,
                photo: thisFriend.photo,
                diff: totalDiff
            }
           
        }
    }

    friends.push(newFriend);
    res.render("survey", bestmatch)
});

};