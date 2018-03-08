/* 1. Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ‘hello’, ‘there’, ‘ES’, 6
    Output: ‘Hello’, ‘there’, ‘ES’ */

var capitalize = (...args) => {
    let b = args.filter((e) => {
        return typeof e == 'string';
    });
    b.forEach((e, i) => {
        b[i] = e[0].toUpperCase() + e.substring(1);
    });
    return b;
}

console.log(capitalize('hello', 'there', 'ES', 6))

/*  2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
 Input: 120
 Output: 24    */

var taxCalc = (price) => {
    const tax = 20;
    return price * (tax / 100);
}

console.log(taxCalc(120));

/*  3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
 Input: [4, 6, 11, -9, 2.1], 2
 Output: [6, 8, 13, -7, 4.1] */

var increase = (arr, inc = 1) => arrNew = arr.map((e) => e + inc)

console.log(increase([4, 6, 11, -9, 2.1]));

/* 4. Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0] */

var keepEven = (arr) => newArr = arr.filter((e) => !(e % 2))

console.log(keepEven([6, 11, 9, 0, 3]));

/* 5. Write a function that filters all the strings from the given array that contain substring JS or js.
Input: [‘compiler’, ‘transpiler’, ’babel.js’, ‘JS standard’, ‘linter‘]
Output: [‘babel.js, ‘JS standard’] */

var hasJS = arr => arr.filter( e =>  (e.indexOf('js') != -1) || (e.indexOf('JS') != -1))
console.log(hasJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

/* 6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
    Output: [7, 8] */

var integers = arr => arr.filter( e => Number.isInteger(e))

console.log(integers([1.6, 11.34, 9.23, 7, 3.11, 8]));

/* 7. Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
Output: 45, 553 */

var digit5 = (...args) => args.filter(e =>(Number.isInteger(e)) && (e.toString().indexOf('5') != -1)).join(',')
console.log(digit5(23, 11.5, 9, 'abc', 45, 28, 553));

/* 8. Write a function that returns indexes of the elements greater than 10. 
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: 1, 2, 5 */

var greaterThan10 = arr => {
    let newArr = [];
    arr.forEach((e, i) => {
        if (e>10) {
            newArr.push(i);
        }
    })
    return newArr.join(',');
}

console.log(greaterThan10([1.6, 11.34, 29.23, 7, 3.11, 18]));

/* 9. a. Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
b. Write a function that prints out the names of persons older than 25. 
c. Write a function that check if there is a person older than 40.
d. Write a function that checks if all persons are older than 20.  */

var persons = [];

var olderThan25 = arr => arr.filter(e =>  e.age > 25).map(e => e.name).join("\n");

var createPerson = (name = 'John Doe', age = 18) => persons.push({name, age})

let pera = createPerson('pera', 20);
let zika = createPerson('zika', 26);
createPerson('mika', 16);
createPerson('laza');
createPerson();
console.log(olderThan25(persons), persons, pera, zika);

/* 10. Write a function that checks if the given array is an array of positive integer values. 
Input: [3, 11, 9, 5, 6]
Output: yes

Input: [3, -12, 4, 11]
Output: no */

let allPositive = arr => arr.every(e => (Number.isInteger(e) && (e > 0)))

console.log(allPositive([3, -12, 4, 11]));

/* 11. Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48 */

let reduceArr = arr => arr.reduce((acc, e) => acc * e)
console.log(reduceArr([2, 8, 3]));

/* 12. Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
    Output: 8 */
    
function max(arr) {
    return Math.max(...arr);
}

console.log(max([2, 7, 3, 8, 5.4]));

let f = (...args) => console.log(args)

f(2,3,4,5,6,7);