let http = require('http');

let express = require('express');
let app = express();
var serveStatic=require('serve-static');

app.use('/serve', serveStatic('./public'));
app.get('/', (req, res) => {res.render('index')});
let server = http.createServer(app);
server.listen(0, () => {
    console.log(server.address().port)
})