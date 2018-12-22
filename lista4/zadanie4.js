module.exports = { dodaj_wiele };
var config = require('./zadanie4_1.js');

function dodaj_wiele(args) {
    var wyn=0;
    for(var i=0; i<args.length; i++)
    {
        wyn = config.dodaj(wyn, args[i]);
    }
    return wyn;
}

console.log(dodaj_wiele([1,2,3,4]));