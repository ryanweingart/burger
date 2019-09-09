var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ryan0913rmw89",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected by ID: " + connection.threadId);
});

module.exports = connection;