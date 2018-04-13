var notANumber = "Please input a number!";    
var maxNumber;    
    
    
    
    function calcMax(a,b){
    
        if( typeof a != "number" || typeof b != "number" ) {
            return notANumber;
        }
        else if ( a > b ) {
            maxNumber = a;

        }
        else {
            maxNumber =b;
        }
        return maxNumber;
}

console.log(calcMax(5,15) + " Is max number.");