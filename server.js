var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var handlebars = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));

app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use("/", routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("Server listening on: " + PORT);
     });