function aInString(someString) {
    counter = 0;
    counter_a = 0;
    counter_A = 0;
    error_0 = "Please input a string containing 'a' or 'A'!";
    errorMessage = "Please input a string!";
    if (typeof someString != "string") {
        return errorMessage;
    }
    for (i = 0; i < someString.length; i++) {
        if (someString[i] == "a") {
            counter++;
            counter_a++;
        }
        else if (someString[i] == "A") {
            counter++;
            counter_A++;
        }
    }
    if (counter) {
        console.log(counter_a, counter_A);
        return counter;
    }
    else
        return error_0;
}

console.log(aInString("kjudugjrg"));