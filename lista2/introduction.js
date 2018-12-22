//introduction
//console.log('hello');

/*variables
var example = 'some string';
console.log(example);*/

//strings
/*var someString = 'this is a string';
console.log(someString);
var example = 'example string'
console.log(example.length);
var pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful');
console.log(pizza);*/

//numbers
/*example = 123456789;
console.log(example);*/
/*roundUp = 1.5;
rounded = Math.round(roundUp);
console.log(rounded);*/
/*n=128;
n=n.toString();
console.log(n);*/

//conditional and loops
/*var fruit = 'orange'
if(fruit.length>5) console.log('The fruit name has more than five characters.');
else console.log('The fruit name has five characters or less.');*/
/*var total = 0, limit = 10;
for(var i=0; i<limit; i++) total+=i;
console.log(total);*/

//arrays
/*var pizzaToppings = ['tomato sauce' , 'cheese', 'pepperoni'];
console.log(pizzaToppings);*/
/*var nums = [1,2,3,4,5,6,7,8,9,10];
var filtered = nums.filter(function evenNumbers (number) {
    return number % 2 === 0;
});
console.log(filtered);*/
/*var food = ['apple', 'pizza', 'pear'];
console.log(food[1]);*/
var pets = ['cat', 'dog', 'rat'];
for(var i = 0; i<pets.length; i++) pets[i] = pets[i] + 's';
console.log(pets);