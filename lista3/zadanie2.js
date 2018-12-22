function fibonacci_iter(n)
{
    if(n==0) return 0;
    var F0 = 0, F1 = 1, F2;
    for(var i=2; i<=n; i++)
    {
        F2 = F1 + F0;
        F0 = F1;
        F1 = F2;
    }
    return F1;
}

function fibonacci_rek(n)
{
    if(n<=2) return 1;
    return fibonacci_rek(n-1) + fibonacci_rek(n-2);
}

function memoize(funct) {
    var cache = {};

    return function(n) {
        if ( n in cache ) {
            return cache[n]
        } else {
            var result = funct(n);
            cache[n] = result;
            return result;
        }
    }
}

var memo = memoize(fibonacci_rek);

for(var i=30; i<=40; i++)
{
    console.log(i);
    console.time("iter");
    fibonacci_iter(i);
    console.timeEnd("iter");
    console.time("rek");
    fibonacci_rek(i);
    console.timeEnd("rek");
    console.time("memo");
    memo(i);
    console.timeEnd("memo");
}

for(var i=1; i<=10; i++)
{
    console.log(i);
    console.time("iter");
    fibonacci_iter(25);
    console.timeEnd("iter");
    console.time("rek");
    fibonacci_rek(25);
    console.timeEnd("rek");
    console.time("memo");
    memo(25);
    console.timeEnd("memo");
}