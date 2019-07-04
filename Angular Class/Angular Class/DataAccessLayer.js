// Import Modules

var express = require("express");
var MongoClient = require("mongodb").MongoClient;

//Configure Middleware

var app=express();
app.use(express.static("MEAN"));

// Create API Requests

app.get('/',function (req, res) {
    res.redirect("index.html");
});

app.get('/products',function (req, res) {
    var url="mongodb://127.0.0.1:27017/productsdb";
    MongoClient.connect(url,function (err,db) {
          if(!err)
          {
              var dbo= db.db("productsdb");
              dbo.collection("tblproducts").find({}).toArray(function (err, documents) {
                  if(!err)
                      res.send(documents);
                  else
                      res.send(err);
              })
          }
    })
});

app.listen(8080);
console.log('Server Started..');

