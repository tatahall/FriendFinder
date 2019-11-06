//add express and require it
var express = require("express");


var app = express();

//define a port for passing requests
//
var PORT = process.env.PORT || 8080;

//needed to use express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//for using the routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//to request the port listen for action
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
