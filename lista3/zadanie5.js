function sum(...args) {
    var wynik = 0;
    for(var i in args) {
        wynik = wynik + args[i];
    }
    return wynik;
}

console.log(sum(1,2,3));
// 6
console.log(sum(1,2,3,4,5));
// 15