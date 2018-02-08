function firstLargerThanMin(someArray) {
    var min = someArray[0];
    var nextMin;
    for (i =1; i < someArray.length; i++) {
        if (someArray[i] < min) {
            nextMin = min;
            min = someArray[i];
        }
        else if (someArray[i] < nextMin) {
            nextMin = someArray[i];
        }
    }
    return [min, nextMin];
}

console.log(firstLargerThanMin([4, 2, 2, -1, 0]));