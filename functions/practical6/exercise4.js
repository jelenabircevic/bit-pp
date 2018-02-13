// Write a function that takes a number and returns array of its digits.

// input: 321; output: [3,2,1]

var arrayOfDigits = function (x) {
    var k=0;
    var z = [];
    x = x + '';
    for (i = 0; i < x.length; i++) {
        z[k] = parseInt(x[i]);
        k++;
    }

    return z;
}

console.log(arrayOfDigits(32234234234231));