var express = require("express");

var app = express();

app.get('/',function (req,res) {
    res.send('This GET Request - Request for Site Home');
});

app.get('/details',function (req,res) {
    res.send('This GET Request - Request for Details Page');
});

app.get('/c*t',function (req,res) {
    res.send('This GET Request - For File starting with C char & end with T');
});

app.post('/insert',function (req,res) {
    res.send('This POST Request - To Submit Resource');
});

app.put('/update',function (req,res) {
    res.send('This PUT Request - To Modify Resource');
});

app.delete('/delete',function (req,res) {
    res.send('This DELETE request - To Delete Resource');
});

app.listen(8080);
console.log('Server Started');

