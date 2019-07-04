app.get('/customer/:id', function(req,res){
    res.send('customer selected is ' + req.params.id );

});
app.get('/customer/contact', function(req,res){
    res.send('welcome to contact');

});