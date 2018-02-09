arrayForFunction = ["d", 6, 3, 7, 8];



function oddElementsSum(numbers) {
    var sum = 0;
    var errorMarker = "";
    for (i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] != "number" || isNaN(numbers[i]) || !isFinite(numbers[i])) {
            errorMarker = numbers[i] + " is not a number!";
            console.log(errorMarker);
            continue;
        }
        else if (numbers[i] % 2 == 0) {
            continue;
        }
        else sum += numbers[i];
    }
    return sum;
}

console.log(oddElementsSum(arrayForFunction));
