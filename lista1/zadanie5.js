function fibonacci_iter(n)
{
    if(n==0) return 0;
    var F0 = 0, F1 = 1, F2;
    for(i=2; i<=n; i++)
    {
        F2 = F1 + F0;
        F0 = F1;
        F1 = F2;
    }
    return F1;
}

function fibonacci_rek(n)
{
    //if(n==2) return 1;
    if(n<=2) return 1;
    return fibonacci_rek(n-1) + fibonacci_rek(n-2);
}

for(var i=10; i<=20; i++)
{
    console.log(i);
    console.time("iter");
    fibonacci_iter(i);
    console.timeEnd("iter");
    console.time("rek");
    fibonacci_rek(i);
    console.timeEnd("rek");
}

//console.table(Tablica,Tablica2);