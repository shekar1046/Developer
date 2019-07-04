//Import References

var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");

//Configure Database Connection

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'productsdb'
});

con.connect();

//Configure Middleware

var app=express();

app.use(express.static('Project'));

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

// Configure API Requests

app.get('/',function (req,res) {
    res.redirect('Project/index.html');
});

app.get('/products',function (req, res) {

    con.query('Select * from tblproducts',function (err,rows,fields) {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.post('/addProduct',function (req, res) {
    var data={
        ProductId:req.body.ProductId,
        Name:req.body.Name,
        Price:req.body.Price,
        Mfd:new Date(req.body.Mfd)
    }
    con.query('Insert into tblproducts SET ?',data,function (err, rows, fields) {
        if(!err)
            console.log('Record Inserted');
        else
            console.log(err);
    })
});
app.listen(8080);
console.log('Server Started...');