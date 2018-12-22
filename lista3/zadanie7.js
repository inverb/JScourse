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

//js nie wie, czy fib() jest iterable
var _it = fib();
for ( var _result; _result = _it.next(), !_result.done; ) {
    console.log( _result.value );
}

function* fib2() {
    var f1=1, f2=0, x;
    while(true) {
        x = f2;
        f2 = f1 + f2;
        f1 = x;
        yield f2;
    }
}

var _it2 = fib2();
for ( var _result; _result = _it2.next(), !_result.done; ) {
    console.log( _result.value );
}

//yield świadczy o byciu iterable
for ( var i of fib2() ) {
    console.log( i );
}