// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
// Input: [1,2,3,4,5, "apple", "orange", NaN]  Output: array: [1, 2, 3 ,4 ,5] max=5

function maxElement(a){
    var r = [];
    var i;
    var j;
for(i = 0, j =0; i < a.length; i++){
    if(typeof a[i] == "number" && !isNaN (a[i])){
        r[j]= a[i];
         j++;


    }

}

console.log(r);
var max = r[0];
for(i = 1; i< r.length; i++){
    if(r[i] > max){
        max=r[i];
    }
}
console.log(max);
return max;

}



maxElement( [1,2,13,4,5, "apple", "orange", NaN] );
