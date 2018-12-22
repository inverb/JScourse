for(i=1; i<=100000; i++) 
{
    a=0;
    b=i;
    while(b>0)
    {
        c = b % 10;
        a+=c;
        if(i%c!=0)
        {
            b=-1;
            break;
        }
        b=Math.floor(b/10);
    }
    if(b==-1 || i%a!=0) continue;
    console.log(i);
}