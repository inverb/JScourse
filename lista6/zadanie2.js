var http = require('http');
var express = require('express');
var app = express();

/**
* @param {http.IncomingMessage} req
* @param {http.ServerResponse} res
* @param {*} next
*/

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get( '/', (req, res) => {
    // res.render('zadanie_2_options');
     res.render('zadanie_2_radio');
});


http.createServer(app).listen(3000);
console.log( 'OK, adres hosta: http://localhost:3000' );