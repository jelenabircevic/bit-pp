

function horizontalChart (){
var star = "* ";
var emptyString = "";

    for (i=0; i<arguments.length; i++) {
            for(j=0; j<arguments[i]; j++) {
                emptyString += star;
            }
            console.log(emptyString);
            emptyString = "";

    }
}

horizontalChart(6,3,6);