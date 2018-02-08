function arithMean() {
    sum = 0;
    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number" || isNaN(arguments[i]) || !isFinite(arguments[i]))
            continue;
        sum += arguments[i];
    }
    sum = sum / arguments.length;
    return sum;
}

console.log(arithMean(4,7,8,9,"i",3,6,7,87,9));