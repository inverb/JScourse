var T = [];
var T1 = [];
var i=0,x=0;
var entry;

var fs = require('fs');
var input = fs.createReadStream("serverlogs.txt");

var readline = require('readline');
var rl = readline.createInterface({
    input: input
});

rl.on('close', function() { //wywołuje się raz
    // tu wczytany cały plik
    var a=0,b=0,c=0,d,e,f;

    for(var i=0; i<T1.length; i++)
    {
        if(T[T1[i]]>a)
        {
            a=T[T1[i]];
            d=T1[i];
        }
    }
    for(var i=0; i<T1.length; i++)
    {
        if(T[T1[i]]>b && T1[i]!=d)
        {
            b=T[T1[i]];
            e=T1[i];
        }
    }
    for(var i=0; i<T1.length; i++)
    {
        if(T[T1[i]]>c && T1[i]!=d && T1[i]!=e)
        {
            c=T[T1[i]];
            f=T1[i];
        }
    }
    console.log(d + " " + a);
    console.log(e + " " + b);
    console.log(f + " " + c);
});
rl.on('line', readLine); //wywołuje się wiele razy

function readLine(line) {
    entry = line.split(" ");
    if(T[entry[1]] == void 0)
    {
        T[entry[1]]=0;
        T1[i]=entry[1];
        i++;
    }
    T[entry[1]] = T[entry[1]]+1;
    x++;
    if(x==280) write_ans();
}