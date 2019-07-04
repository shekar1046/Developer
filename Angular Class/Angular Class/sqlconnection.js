var mysql = require("mysql");

var con  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'productsdb'
});
con.connect(function (err) {
    if(!err)
        console.log('Connected..');
    else
        console.log(err);
});