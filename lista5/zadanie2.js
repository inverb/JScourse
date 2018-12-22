//Wszystkie hasła: weppo

var fs = require('fs');
var https = require('https');
(async function () {
    var pfx = await fs.promises.readFile('klucze.pfx');
    var server = https.createServer({
        pfx: pfx,
        passphrase: 'weppo'
    },
    (req, res) => {
        res.setHeader('Content-type', 'text/html; charset=utf-8');
        res.end(`Witaj użytkowniku`);
    });
    server.listen(3000);
    console.log('started');
})(); 