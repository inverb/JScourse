function createGenerator(n) {
    var _state = 0;
    return {
        next : function() {
            return {
                value : _state,
                done : _state++ >= _n,
            }
        }
    }
}

//zamieniłem iterator na generator
function* createGenerator2(n) {
    var _state = 0;
    while(_state<=n)
    {
        yield _state;
        _state++;
    }
}

var foo = createGenerator2(10);
var foo1 = createGenerator2(20);
var foo2 = createGenerator2(30);

for ( var f of foo )
    console.log(f);

var o = {
    [Symbol.iterator]: () => createGenerator(10)
}