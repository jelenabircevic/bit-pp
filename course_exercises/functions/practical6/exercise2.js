// Write a function that combines two arrays by alternatingly taking elements.

// [a,b,c], [1,2,3] -> [a,1,b,2,c,3]



//function intertwiner(x, y) {
var intertwiner = function (x, y) {

    var i;
    var j;
    var z = [];
    var k;
    var p;

    for (i = 0, k = 0; i < x.length; i++ , k = k + 2) {
        z[k] = x[i];
    }

    for (j = 0, p = 1; j < y.length; j++ , p = p + 2) {
        z[p] = y[j];
    }
    return z;
};

console.log(intertwiner(['a','b','c'], [1,2,3]))


var newFunction = intertwiner;

console.log(newFunction(['a','b','c'], [1,2,3]));