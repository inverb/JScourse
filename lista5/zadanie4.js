var http = require('http');
var express = require('express');
var url = require('url');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));

//app.get('/print', (res, req) => {});

app.get('/', (req, res) => {
    res.render('index', {subject:'', name:'', surname:'', points:[], tekst:''});
});

app.post('/', (req, res) => {
    var name = req.body.name;
    var surname = req.body.surname;
    var subject = req.body.subject;
    var points = req.body.points;

    if(name == "" || surname == "" || subject == ""){
        res.render('index', {subject:subject, 
            name:name, 
            surname:surname, 
            points:points, 
            tekst:"Brak wszystkich niezbędnych danych"});
    }else{
        for(var i = 0; i < 10; ++i)
        {
            if(points[i] == "")
                points[i] = 0;
        }
       // res.redirect('/print?', );
        var url_redirect = url.format({
            pathname: '/print',
            query: {subject:subject, name:name, surname:surname, points:points}
          });
          console.log(url_redirect);
        res.redirect(url_redirect);
    }
});

app.get('/print', (req, res) => {
    var subject = req.query.subject;
    var name = req.query.name;
    var surname = req.query.surname;
    var points = req.query.points || [];
    console.log(points);
    res.render('print', {subject: subject, name:name, surname:surname, points:points, tekst:''});
});

http.createServer(app).listen(3000);
console.log("start");