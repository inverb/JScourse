Tablica = [];
for(i=2; i<=100000; i++)
{   
    a=0;
    for(var j in Tablica)
    {
        if(i%Tablica[j]==0)
        {
            a=1;
            break;
        }
    }
    if(a==0)
    {
        Tablica.push(i);
        console.log(i);
    }
}
//console.table(Tablica);