

function positiveTimesTwo (input) {

    for(i=0; i<input.length; i++) {
        if (input[i] > 0) {
            input[i] *= 2;
        }
    } return input;
}

console.log(positiveTimesTwo([-3, 11, 5, 3.4, -8]));