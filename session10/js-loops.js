//for-loop for doog
var a;
for (a=0; a<6; a++) {
    console.log("doog"+a+"!");
}

//while-loop string 

var b=0;
var stringA="";
while (b<10) {
    stringA+=b;
    b++;
    console.log(stringA);
}

//for-loop pattern

var c;
var stringC="";
for (c=0; c<21; c++) {
    if (c % 2  == 0){
        stringC+="+";
    }
    else{
        stringC+="-";
    }
}

console.log(stringC);


//nested for-loop

var d;
var stringD="";
var e;


for (d=0;d<1;d++) {
    for (e=0;e<10;e++){
        stringD+="\*";
    console.log(stringD);
    }
}

//Why???Why???Why!!!