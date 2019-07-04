var express = require("express");
var mysql = require("mysql");

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'productsdb'
});

var app=express();

app.use(express.static("Pages"));

app.get('/',function (req, res) {
    res.redirect('Pages/Index.html');
})

app.get('/products',function (req, res) {
    con.connect();
    con.query('Select * from tblproducts',function (err,rows,fields) {
      res.send(rows);
    })
});
app.listen(8080);
console.log('Server Started...');