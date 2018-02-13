// Write a function to input temperature in Centigrade and convert to Fahrenheit. T(°F) = T(°C) × 1.8 + 32


// function CelsiusToFahrenheit(celsius) {

//     var celsius;

//     fahrenheit = celsius * 1.8 + 32;

//     return fahrenheit;
// }

// console.log(CelsiusToFahrenheit(0));

var fahrenheit = function (celsius) {
    var celsius;

    fahrenheit = celsius * 1.8 + 32;

    return fahrenheit;
}


console.log(fahrenheit(10));