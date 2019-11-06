//linking routes to data source
var friends = require("../data/friends");

//exporting data 
module.exports = function(app) {

  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  

    app.post("/api/friends", function(req, res) {
        //console.log(req.body);
        //math logic goes here
        friends.push(req.body);
        var score = req.body.scores;
        var newFriend = 0;
        var bestScore = 50;

        for (var i = 0; i < friends.length; i++){
          var compareScores = friends[i].scores;
          var totalDiff = 0;

          for (var j = 0; j < score.lenth; j++){
            var oneDiff = math.abs(parseInt(score[j]) - parseInt(compareScores[j]));
            totalDiff = totalDiff + oneDiff;
          }
          if (totalDiff < bestScore){
            bestScore = totalDiff;
            newFriend = i;
          }
        }
        res.json(friends[newFriend]); //build object to send back match
    });
  };
  