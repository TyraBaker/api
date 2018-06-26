// Number 
var number = 1;
var decimal = 0.5;
console.log(number,decimal);
    //numbers not distinctly precise. Not good for banking. *Example Below*
var bigNumber = 99999999999999999999;
console.log(bigNumber);


//String
//Strings are anything you put in quotes. Usually used for words.
let firstName = "Tyra";
let lastName = 'Baker';
console.log(firstName, lastName, "anything in quotes is directly stated in console");
    //single and double quotes are generally interchangeable, unless they are used within the word. 
    // Example: if I typed "Tyra's" with an apostraphe, use double-quotes. 
let first = 100 + 200; //300
let second = '100' + '200'; //100200
    //this is a string that smushes the values together. calles concantenation.
console.log(first, second);

//Example use of concantenation
let fullName= 'Tyra' + ' ' + 'Baker'; //space given in quotes to prevent smushing. :)
console.log(fullName);


//Boolean
    //true or false
var bool = true; //true and false are keywords in js that don't need to be in quotes to appear in the console.
console.log(bool);

let boolNo = false;
console.log(boolNo);


//Undefined
    //No assigned value, not even an empty container. Not an error. Declared w/o value.

var x;
let y; 
let z = undefined; //Undefined, like true and false, are keywords in js.
    // ^^^ above are undefined
console.log(x,y,z);


//Null
    //Has no value. Nothing is in it.
var empty = null; // null being a keyword
console.log(empty);



//CHALLENGE---
    /*
    set 7 (or 8) Variables:*/
     firstName = "Tyra";
     lastName = "Baker";
     //let or var unneeded because it has already been declared. Only neet to re-initialize w/o command.
       let houseNumber = 13197;
    //aptNumber (if applicable)
       let street = "Prosperity Ridge Road";
       let city = "Dillsboro";
       let state = "Indiana";
       let zipcode = 47018;

    /*set each variable to the correct type
    console.log your whole address (with spaces in between)
    */

    console.log (firstName , lastName);
    console.log (houseNumber + " " + street);
    console.log (city + ", " + state + " " + zipcode);


//Object
    /*
    What is an object?
            A container that can hold multiple pieces of info, of ANY DATATYPE. 
    Denoted by { }
    Keys and Values as pairs
            example:     " color: 'blue' "
            color is the key, blue is the value.
        each pair is separates with a comma.
   */

let burrito = {
    meat: 'chicken',
    cost: 7,
    yummy: true  //last object pairs do not need a comma.
}; //semi-colon optional
console.log(burrito);
console.log(typeof burrito);


//Arrays
    /*
    Used for lists or collections of information.
    Denoted by [ ]
    Can hold different types of information.
    */

var dogArray = ['lab', 'husky', 'pitbull', 'alaskan malamute', 'jack russell'];
console.log(dogArray);