function square(n){
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function half(n) {
    return n / 2;
}

function multiply(n) {
    return n * 2;
}

function array(someArray, someFunction, someOtherFunc){
    var newArray = [];
    for(var i = 0; i < someArray.length; i++){
        newArray[i] = someOtherFunc(someFunction(someArray[i]));
    }
    return newArray;

}

console.log(array([2, 4, 5], half, square));

//primer 2

function small() {
    return 8;
}

function large() {
    return 590;
}

function huge() {
    return 234567;
}

function generateNumber(someFunc) {
    return someFunc();
}

console.log(generateNumber(large));

//

function add (a, b){
    return a + b;
}



function arrays (firstArray, secondArray, someFunc, secondFunc, factor){
    var newArray = [];
    for (var i = 0; i < firstArray.length; i++){
        newArray[i] = secondFunc(someFunc(firstArray[i], secondArray[i]), factor);
}
    return newArray;
}

console.log(arrays([1, 7], [6, 9], add, function(a,f) { return a * f;}, 4));

/*
kad funkcija arrays uzima argumente

secondFunc = function(a,f) { return a * f;};
factor = 4;

kad se izvrsi funkcija someFunc

secondFunc(7, factor);
secondFunc(7, 4);

kad se pozove anonimna funkcija

a = 7;
f = 4;
*/

/*napisati funkciju koja ocekuje ime i prezime, a za nas vraca f-ju koja predlaze formu email adrese (npr. name.surname@gmail.com) */

function usernameGenerator(name, surname) {
    return function () {
        return name + '.' + surname + '@gmail.com';
    }
}

/* var emailGen = usernameGenerator('anja', 'antic');
console.log(typeof emailGen);
console.log(emailGen()); */

console.log(usernameGenerator('anja', 'antic')());

/*napisati anonimnu f-ju koja u niski zamenju svako 'a' slovo zvezdicom, ispisuje rezultat i vraca broj zamena*/

var r = (function(someString){
    var newString = '';
    var counter = 0;
    for (var i = 0; i< someString.length; i++) {
        if (someString[i] == 'a') {
            newString += '*';
            counter++;
        } else {
            newString += someString[i];
        }
    }
    console.log(newString);
    return counter;
})('javascript');
console.log(r);
console.log(typeof r);