//var path = require("path");

//linking routes to data source
var friends = require("../data/friends.js");

//exporting data 
module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function (req, res) {
    //console.log(req.body);
    //math logic goes here
    //build object to send back match
    var userObject = req.body;
    var userScore = userObject.scores;
    console.log(userScore);
    var scoresArray = [];
    //var friendCount = 0;
    var bestChoice = 0;

    //loop through all the friends in the current list on the friends.js file
    for (var i = 0; i < friends.length; i++) {
      var diff = 0;
      //loop through scores to compare user's scores with friends scores
      for (var j = 0; j < userScore.length; j++) {
        diff += (Math.abs(parseInt(friends[i].scores[j])) - parseInt(userScore[j]));
      }
      //push the difference into the array
      scoresArray.push(diff);
    }
    //loop through the array to find a match
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestChoice]) {
        bestChoice = i;
      }
    }
    //show match
    var bestie = friends[bestChoice];
    res.json(bestie);

    //push into friends array
    friends.push(req.body);
  });
};
