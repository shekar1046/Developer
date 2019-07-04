var http = require("http");

http.createServer(function (req,res) {
    res.end('Welcome to Node JS');
}).listen(8080);

console.log('Server Started: http://127.0.0.1:8080');

