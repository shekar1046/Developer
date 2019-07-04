var mysql = require("mysql");

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'productsdb'
});
con.connect();
con.query('Select * From tblproducts',function (err,rows,fields) {
    if(!err)
        console.log(rows);
    else
        console.log(err);
});