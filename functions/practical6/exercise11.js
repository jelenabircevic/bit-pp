function elementOfArray(someArray) {
    var first = someArray[0];
    var last = someArray[someArray.length - 1];
    var median;
    if (someArray.length <= 1) return someArray;
    if (someArray.length % 2 == 1) {
        median = someArray[parseInt(someArray.length / 2)];
        return [first, median, last];
    }
    return [first, last]
}
console.log(elementOfArray([1, 5, 7, 5, 1, 5, 8, 9, 9]));