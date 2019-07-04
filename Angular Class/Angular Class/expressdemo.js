var express = require("express");

var app=express();

app.use(express.static('Pages'));

app.get('/',function (req,res) {
    res.redirect('Pages/index.html');
});

app.listen(8080);
console.log('Server Started');