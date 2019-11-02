//linking routes to data source
var friendsData = require("../data/friendsData");

//exporting data 
module.exports = function(app) {

  
    /*app.get("/api/friends", function(req, res) {
      res.json(tableData);
    });*/
  

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        //math logic goes here
        res.json(friendsData); //build object to send back match
    });

  

  };
  