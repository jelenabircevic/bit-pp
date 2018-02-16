

function radixChange(a, r1, r2) {
    // var s=Number(a);
    return parseInt(a + '', r1).toString(r2);
}

console.log(radixChange(59, 36, 10));