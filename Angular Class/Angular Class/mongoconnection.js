var MongoClient = require("mongodb").MongoClient;

var url="mongodb://127.0.0.1:27017/productsdb";

MongoClient.connect(url,function (err,db) {
     var dbo = db.db("productsdb");
     dbo.collection("tblproducts").find({}).toArray(function (err, documents) {
         if(!err)
             console.log(documents);
         else
             console.log(err);
     })
})