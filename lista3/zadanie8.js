//z zadania 7
function fib() {
    var f1=1, f2=0, x;
    return {
        next : function() {
            x = f2;
            f2 = f1 + f2;
            f1 = x;
            return {
                value : f2,
                done : false,
            }
        }
    }
}

function* take(it, top) {
    var _reverse;
    var _it = it;
    for(i=1; i<=top; i++) {
        _reverse = _it.next();
        yield _reverse.value;
    }
    return;
}


// zwróć dokładnie 10 wartości z potencjalnie
// "nieskończonego" iteratora/generatora
for (let num of take( fib(), 10 ) ) {
    console.log(num);
}