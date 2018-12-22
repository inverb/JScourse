var http = require('http');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use( (req, res) => {
 res.write("Hello world");
 res.end();
 });
http.createServer(app).listen(3000);
