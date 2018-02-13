function mostFrequent(someArray) {
    var counter = [];
    var maxC, maxI;
    for (var i = 0; i < someArray.length; i++) {
        counter[i] = 0;
        for (var j = 0; j < someArray.length; j++) {
            if (someArray[j] == someArray[i]) counter[i]++;
        }
    }
    maxC = counter[0];
    maxI = 0;
    for (var i = 1; i < counter.length; i++) {
        if (counter[i] > maxC) {
            maxC = counter[i];
            maxI = i;
        }
    }
    return someArray[maxI];
}

console.log(mostFrequent([5, 7, 7, 7, 7, 8, 8, 44, 5, 6]));