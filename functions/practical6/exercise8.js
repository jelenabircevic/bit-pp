function maxAndMin(someArray) {
    var min = someArray[0];
    var max = someArray[0];
    for (var i = 1; i < someArray.length; i++) {
        if (someArray[i] < min) {
            min = someArray[i];
        }
        if (someArray[i] > max) {
            max = someArray[i];
        }
    }
    return [max, min];
}

console.log(maxAndMin([4, 4, 4, 4, 4, 4, 4]));