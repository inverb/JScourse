//definiowanie obiektu
var obj = {
    num : 0,
    add : function()
    {
        console.log(this.num);
        this.num = this.num + 1;
    },
    get ret() {
        return this.num;
    },
    set upd(i) {
        this.num = i;
    } 
}

//dodawanie pola
obj.maxiumum = 100;

//dodawanie metody
obj.control = function() {
    if(this.num >= this.maxiumum) return true;
    else return false;
}

//dodawanie getterów/setterów (nie da się inaczej)
Object.defineProperty( obj, 'diff', {
    get : function() {
        return this.maxiumum - this.num;
    }
});

Object.defineProperty( obj, 'div', {
    set : function(i) {
        this.num = Math.floor(this.num/i);
    }
});


//testy
obj.add();
obj.add();
console.log(obj.diff);
obj.upd = 10;
console.log(obj.ret);
obj.div = 3;
console.log(obj.ret);