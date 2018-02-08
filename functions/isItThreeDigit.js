
var isNotANumber = "Please input some three digit number!";
var thisIsThreeDigit = "This is a three digit number!";

function isItThreeDigit(input) {

    if (typeof input != "number" || isNaN(input) || !isFinite(input))
    return isNotANumber;
    else if (input>=100 && input<1000) {
        return thisIsThreeDigit; 
    }
    else { return isNotANumber;} 
    

}

console.log(isItThreeDigit(234));