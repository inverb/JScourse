var http = require('http');
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })
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
    res.render('zadanie_1_index');
});

app.post('/zadanie_1_thanks', upload.single('plik'), function (req, res, next) {
    res.render('zadanie_1_thanks');
})

http.createServer(app).listen(3000);
console.log( 'OK, adres hosta: http://localhost:3000' );