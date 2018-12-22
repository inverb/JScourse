var http = require('http');
var server =
 http.createServer(
 (req, res) => {
 res.setHeader('Content-type', 'text/html; charset=utf-8');
 res.end(`text`);
 });
server.listen(3000);
console.log('started');


//komenda do Burpa:
//java -jar -Xmx1G /home/mateusz/Dokumenty/burpsuite_community_v1.7.36.jar
