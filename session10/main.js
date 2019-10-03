// console stuff

console.log("hellllllo woooooorld");

//console.warn("be careful");

// console.error("something is not right");

// data types! (primitive date types!) Number, String, Boolean, Objects, undefined, null

console.log(typeof 1);
console.log(typeof true);

// variables
// let myNumber = 4;
// console.log(typeof myNumber);

let num = 4; // initializing a variable;
let a;
a = 5;
const b = 5;
console.log(a+1);
console.log(num);
console.log(b);

//% MODULUS

let modNumbers = 5%2;
console.log(modNumbers);

let myString = "this is a string";
console.log(myString);
console.log(`my name is ${myString}`);
let stringWithNumber = myString + a;
console.log(stringWithNumber); // You can add string and number directly in Javascript

//undefined
let dog;
console.log(typeof dog);

//objects

let tree = {
    family: "oak",
    color: "green",
    branches: 7
}
console.log(tree.color);
console.log(tree);

//for loops

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let j = 0; 
console.log("hey");

while(j<10){
    console.log(j);
    j++;
}

//conditional statements

let coolNum = 20;
if (coolNum < 20){
    console.log("this number isn't cool anymore");
}
else if (coolNum > 20){
    console.log("this number is too cool");
}
else{
    console.log("this number is cool");
}

const myText = document.getElementById("lol");


myText.innerHTML = "colololollololol";
let i=0

let x = setInterval(function(){

    myText.innerHTML = i;
    i++;
},.1)