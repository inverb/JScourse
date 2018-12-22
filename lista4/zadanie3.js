var Foo = function(name, surname) {
    this.name = name;
    this.surname = surname;
}

Foo.prototype.Bar = function()
{
    var x = this.name.length + this.surname.length;
    function Qux(x)
    {
        if(x>10) return x;
        else return 23*x;
    }
    return this.name + Qux(x);
}

var foo = new Foo("Jan", "Kowalski");
var foo1 = new Foo("Ja", "N");

//console.log(foo.Bar());
//console.log(foo.Qux(1));
//console.log(foo1.Bar());