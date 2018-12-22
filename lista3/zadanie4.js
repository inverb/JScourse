//let działa tak, jakbyśmy chcieli, var tworzy jedną zmienną i na całym obszarze funkcji. 
//Wartość fs[i] jest równa i, przy czym o ile to pierwsze i jest wskaźnikiem na komórkę tablicy
//i przez to się nie zmienia, to drugie jest tą właśnie zmienną i, zmieniającą się aż do return,
//gdzie ma wartość 10.
function createFs(n) {
    var fs = [];
    for (let i=0; i<n; i++ ) {
        fs[i] = function() {
            return i;
        };
    };
    return fs;
}

function createFs2(n) {
    var fs = [];

    //eksport zmiennej i poza ciało fora sprawia
    //że i przekazywane w arg. funkcji to już nie to samo i
    var fun = function fun(i) {
        // closure
        fs[i] = function() {
            return i;
        };
    };

    for (var i=0; i<n; i++ ) {
        fun(i);
    };
    return fs;
}

var myfs = createFs2(10);
console.log( myfs[0]() ); // zerowa funkcja miała zwrócić 0
console.log( myfs[2]() ); // druga miała zwrócić 2
console.log( myfs[7]() );