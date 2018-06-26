//Variables
//What is a variable?
    //Allows us to store information within words.

//var chosenName = chosenValue

var a = 1;
var b = 2; 

console.log (a+b) //output given is 3 when you press "f8" and go to output.

//Declarations

    /*Declarations are on the LEFT SIDE of the variable.

    Initializations are on the RIGHT SIDE of the variable.
    They se the value of the variable.*/

var x; //declared but not initialized
console.log("declaration:", x);
    //viewed as "declaration: undefined"

x = 10; //initialized but not declared. This only works because "x" has been declared earlier.
console.log("initialization 1:", x);
    //viewed as "initialization 1: 10"

x = 20;
console.log("init 2:", x);
    //variables can be initialized for varying quantities since Javascript runs linearly downward.
    //The most-recently given quantity for a variable will be used. 

var y = "Hello";
console.log(x,y);

/*
"var", "let", "const"
    - var is the "old" way of making a variable
    - let is a newer way to make a variable
    - const is also a newer way. It sets an UNCHANGING variable
*/

let today = 'great!';
const cats = 'awesome';
console.log(today,cats);