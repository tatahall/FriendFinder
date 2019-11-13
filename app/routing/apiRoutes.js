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
         //build object to send back match

         //variable for the users input to survey
         var userObject = req.body;
         var userScore = userObject.score;

          var nameMatch = "";
          var imageMatch = "";

          var totDiff = 50;

          //want to loop through the friends in the data file
          for(var i = 0; i <friends.length; i++){
            var diff = 0;
            //determine difference for each question
            for (var j = 0; j < userScore.length; j++){
              diff += Math.abs(friends[i].score[j] - userScore[j]);
            }
            if (diff < totDiff){
              totDiff = diff;
              nameMatch = friends[i].name;
              imageMatch = friends[i].photo;
            }
          }
          friends.push(userObject);
          res.json({status: 'OK', nameMatch: nameMatch, imageMatch: imageMatch});
    });
  };
  