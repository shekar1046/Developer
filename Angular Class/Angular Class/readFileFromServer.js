var fs = require("fs");
var http = require("http");

http.createServer(function (req, res) {
    var data = fs.readFileSync("help.txt");
    res.end(data.toString());
}).listen(8080);

console.log('Server Started.. 127.0.0.1:8080');