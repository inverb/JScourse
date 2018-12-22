var Tree = function(name, left, right) {
    this.name = name;
    this.left = left;
    this.right = right;
}

Tree.prototype.say = function() {
        return this.name;
}
Tree.prototype.left_son = function() {
        return this.left;
}
Tree.prototype.right_son =  function() {
        return this.right;
}

var T = [];

for(var i=8; i>=1; i--)
{
    if(i>=4) T[i] = new Tree((i).toString(2), '{}', '{}');
    else T[i] = new Tree((i).toString(2), T[2*i], T[2*i+1]);
}

console.log(T[1]);
console.log(T[1].say());
console.log(T[1].right_son().left_son());
