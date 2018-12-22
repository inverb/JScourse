//objects
/*var pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
};
console.log(pizza);*/
/*var food = {
    types: 'only pizza'
};
console.log(food.types);*/

//functions
/*function eat (food) {
    return food + ' tasted really good.';
}
console.log(eat('bananas'));*/
/*function math(a,b,c){
    return (b*c)+a;
}
console.log(math(53,61,67));*/

//scope
var a = 1, b = 2, c = 3;
(function firstFunction(){
    var b = 5, c = 6;
    (function secondFunction(){
        var b = 8;
        (function thirdFunction(){
            var a = 7, c = 9;
            (function fourthFunction(){
                var a = 1, c = 8;
            })();
        })();
        console.log("a: "+a+", b: "+b+", c: "+c);
    })();
})();

//nadpisywanie
/*var str = {
    _temp: "ala ma kota",
    get length() {
        return temp.length;
    }
};
var str2 = str;
console.log(str.length);
str = "aaaaaaa";
console.log(str.length);*/