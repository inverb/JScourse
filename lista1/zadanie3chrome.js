function PrintPierwsze()
{
    document.write(Pierwsze());
}

function Pierwsze()
{
    Array = [];
    for(i=2; i<=100; i++)
    {   
        a=0;
        for(var j in Array)
        {
            if(i%Array[j]==0)
            {
                a=1;
                break;
            }
        }
        if(a==0)
        {
            Array.push(i);
        }
    }
    return Array;
}