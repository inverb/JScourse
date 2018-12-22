var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.disable('etag');

//COOKIES
// var cookieParser = require('cookie-parser');
// app.use(cookieParser('xzufybuixyfbuxziyfbuzixfuyb'));

// app.use(express.urlencoded({ extended : true }));

// app.use("/", (req, res) => {
//     var cookieValue;
//     if (!req.signedCookies.cookie) {
//         cookieValue = new Date().toString();
//         res.cookie('cookie', cookieValue, { signed: true });
//     } else {
//         cookieValue = req.signedCookies.cookie;
//     }
//     res.render("zadanie_3_index", { cookieValue: cookieValue } );
// });

//--------------------------------------------------------------------


// KONTENER
// var session = require('express-session');
// app.use(session({resave:true, saveUninitialized: true, secret:'qewhiugriasgy'}));

// app.use("/", (req, res) => {
//     var sessionValue;
//     if (!req.session.sessionValue) {
//         sessionValue = new Date().toString();
//         req.session.sessionValue = sessionValue;
//     } else {
//         sessionValue = req.session.sessionValue;
//     }
//     res.render("zadanie_3_session", { sessionValue: sessionValue } );
// });

// --------------------------------------------------------------------

// session-file-store

var session = require('express-session');
var FileStore = require('session-file-store')(session);

app.use(session({
    store: new FileStore,
    secret: 'abcd',
    resave: true,
    saveUninitialized: true
  })
);

app.use('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.render("zadanie_3_sfs", { views: req.session.views } );
  } else {
    req.session.views = 1;
    res.render("zadanie_3_sfs", { views: req.session.views } );
  }
});

http.createServer(app).listen(3000);
console.log( 'OK, adres hosta: http://localhost:3000' );