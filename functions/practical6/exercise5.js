// Write a program that prints a multiplication table for numbers up to 12.


function multipTable(a) {

    var i;
    var j;
    sum = '';

    for (i = 0; i < a; i++) {

        for (j = 0; j < a; j++) {
            sum = sum + ' ' + i * j;

        }

        sum = sum + '\n';
    }

    return sum;
}

console.log(multipTable(13));