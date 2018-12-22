module.exports = { dodaj };
var config = require('./zadanie4.js');

function dodaj(x,y) {
    return x+y;
}

function srednia(...args) {
    var num = args.length;
    var sum = config.dodaj_wiele(args);
    return sum/num;
}

console.log(srednia(1,2,3,4,5));

//Co się dzieje przy odpalaniu zadanie4?