console.log("Hello ~~~");

//switch statements
//functions
//classes
//scope
//arrays
//manipulating the Document Object Model (DOM)

let num = 4;

num += 6;

console.log(num);

//this function adds two numbers together!

function addNums(num1, num2){
    return "Your added number is: " + num1 + num2;
}


let myAddedNumber = addNums(1,6);
console.log(myAddedNumber);

function addStringToNumber(num){
    return "This is my fancy number: " + num;
}

let fancyNum = 12;
console.log(fancyNum);
fancyNum = addStringToNumber(fancyNum);
console.log(fancyNum);

//////scope


for(let i=0; i<7; i++){
    console.log("first loop: " + i);
}


for(let i=0; i<10; i++){
    console.log(i);
}

////////arrays


let numArray=[1,2,3,4,5,6];

console.log(numArray.length);


////manipulating the DOM

let container=document.querySelector('.container');
for(let i=0;i<100;i++){
    let div=document.createElement('div');
    container.appendChild(div);
}

console.log(container);
let myDivs=container.querySelectorAll('div');
console.log(myDivs.length);

setInterval(function(){

    for (let i=0;i<myDivs.length;i++){
        myDivs[i].classList.add('box');
        myDivs[i].style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        myDivs[i].style.width=`${Math.random()*255}px`;
    }
}, 0.01)
console.log(Math.floor(Math.random()*100));