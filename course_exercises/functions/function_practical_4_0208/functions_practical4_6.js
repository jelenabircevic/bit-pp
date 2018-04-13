



function symmetricArray (someArray) {
var newArray = [];
var positiveResult = "This array is symmetric! You're a genius!";
var negativeResult = "This array isn't symmetric! Shame on you! Go back to school!";
    for(i=someArray.length-1, j = 0; i>=0; i--, j++) {
        if (someArray[j] != someArray[i]) {
            return negativeResult;
        }
    }
    
    return positiveResult;
}


console.log(symmetricArray([2, 4, -2, 7, -2, 4, 2]))