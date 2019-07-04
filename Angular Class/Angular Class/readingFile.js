//Import the Module

var fs = require("fs");

//Implement Functionality

var data = fs.readFileSync("help.txt");
console.log(data.toString());