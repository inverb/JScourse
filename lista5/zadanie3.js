var http = require('http');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use( (req, res) => {
 res.header('Content-disposition', 'attachement; filename="foo.txt"');
 res.end(`text`);
 });
http.createServer(app).listen(3000);
