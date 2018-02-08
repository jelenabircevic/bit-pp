function isOdd(a) {
    var error = "Please enter a number!";
    var res;
    if (typeof a != "number" || isNaN(a) || !isFinite(a))
        return error;
    
    if (a % 2 == 0) {
        res = "even";
    }
    else res = "odd";
    return res;
}

console.log("This number is", isOdd(6));