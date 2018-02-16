console.log((function (s) {
    var a = s.split(" ");
    for (var i = 0; i < a.length; i++) {
       a[i] = a[i].split("").sort().join("");
    }
    return a.join(" ");
})("Ana voli Milovana"));