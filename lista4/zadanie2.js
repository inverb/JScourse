// var Tree = function(name, left, right) {
//     this.name = name;
//     this.left = left;
//     this.right = right;
//     var tab = [];
//     var i=0;
//     iterator =  function*() {
//         for(i in tab) yield tab[i];
//     };
//     this.it = iterator();
//     begin = function(Knot) {
//         tab[i]=Knot.name;
//         i++;
//         if(Knot.left != '{}') this.begin(Knot.left);
//         if(Knot.right != '{}') this.begin(Knot.right);
//     }
//     begin(this);
// }

// Tree.prototype.say = function() {
//         return this.name;
// }
// Tree.prototype.left_son = function() {
//         return this.left;
// }
// Tree.prototype.right_son =  function() {
//         return this.right;
// }

// Tree.prototype.next = function() {
//     var x  = this.it.next();
//     return x;
// }

// var T = [];

// for(var i=8; i>=1; i--)
// {
//     if(i>=4) T[i] = new Tree((i).toString(2), '{}', '{}');
//     else T[i] = new Tree((i).toString(2), T[2*i], T[2*i+1]);
// }

// var root = new Tree('0' ,T[1], '{}');

// // enumeracja wartości z węzłów
// for ( var e of root.it ){
//     console.log( e );
// }

var Tree = function(name, left, right) {
    this.name = name;
    this.left = left;
    this.right = right;
}

var root = new Tree(2, new Tree(3), new Tree(4));

Tree.prototype[Symbol.iterator] = function*() {
    if ( this.left ) yield* this.left; // for ( var e of this.left ) yield e;
    yield this.name;
    if ( this.right ) yield* this.right;
}

for ( var e of root ) console.log(e);