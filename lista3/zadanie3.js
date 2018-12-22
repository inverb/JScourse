function forEach( a, f ) {
    for(i in a) f(a[i]);
}

function map( a, f ) {
    var b = [];
    for(i in a) b.push(f(a[i]));
    return b;
}

function filter( a, f ) {
    var b = [];
    for(i in a) {
        if(f(a[i])) b.push(a[i]);
    }
    return b;
}

//testy
var a = [1,2,3,4];
function f1(x) {
    console.log(x);
    return;
}
forEach( a, _ => { console.log( _ ); } );
forEach( a, f1);
// [1,2,3,4]

function f2(x) {
    return 2*x;
}
console.log(map( a, _ => _ * 2 ));
console.log(map( a, f2 ));
// [2,4,6,8]

function f3(x) {
    if(x<3) return true;
    else return false;
}
console.log(filter( a, _ => _ < 3 ));
console.log(filter( a, f3 ));
// [1,2]