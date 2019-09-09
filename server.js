var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var handlebars = require("express-handlebars");

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

var port = 8080;
app.listen(port);
console.log("Listening on PORT: " + port);