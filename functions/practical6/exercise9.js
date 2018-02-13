function median(a) {
    var med;
    for (i = 0, j = a.length - 1; i < a.length / 2; i++, j--) {

    }
    if (i == j) med = a[i];
    else med = (a[i] + a[j]) / 2;

    return med;
}

console.log(median([1, 2, 3, 4]));