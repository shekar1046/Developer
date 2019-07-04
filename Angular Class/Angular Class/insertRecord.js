var mysql = require("mysql");

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'productsdb'
});
con.connect();

var data ={
    ProductId:3,
    Name:'Lee Cooper Boot',
    Price:5200.42,
    Mfd:new Date('2018/02/12')
}

con.query("Insert into tblproducts SET ?",data,function (err) {
    if(!err)
        console.log('Record Inserted..');
    else
        console.log(err);
})