
function arithMean() {
    var sum = 0;
    var errorMarker = "";
    counter = 0;
    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
            errorMarker = "Please replace " + arguments[i] + " with number!";
            counter++;
            console.log(errorMarker);
            continue;
        }
        sum += arguments[i];
    }
    sum = sum / (arguments.length - counter);
    return sum;
}

console.log(arithMean(4,7,8,9,"i",3,NaN,6,7,"b",87,9));