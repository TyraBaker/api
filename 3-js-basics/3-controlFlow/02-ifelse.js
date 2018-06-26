let weather = 50;
if (weather < 65) {
    console.log('bring a sweater');
} else {
console.log('no sweater needed');
};

let car = 'jeep';
if (car === 'jeep' || car === 'mitsubishi'){
    console.log('okay');
} else { 
    console.log('eh');
};

/*CHALLENGE
    Write an if else statement that checks your name:
    If it is your name, console.log "Hello, my name is Tyra"
    If the name does not match, console.log 'Hello, what is your name?'
 */

 const name = 'Tyra';
 if (name === 'Tyra') {
     console.log("Hello, my name is", name + '.')   //+ combines without spacing, commas provide spacing.
 } else {
     console.log('Hello, what is your name?')
 };


 //else if
    //compare multiple variables
 let age = 22
 if (age >= 25){
     console.log('you can rent a car!');
 } else if (age >= 21) {
    console.log('you can buy alcohol!');        //goes to the first true statement. If this statement were first, then age 25 would show this message as well. 
 } else if (age>= 18) {
     console.log('you can vote!');
 } else if (age>= 16) {
     console.log('you can drive!');
 } else {
     console.log("you're too young.");          //else must go last as the catch-all
 }

 let temperature = 90
 if (temperature >= 90) {
     console.log ('it is hot');
 } else if (temperature >= 70) {
     console.log ('it is warm');
 } else if (temperature >= 50) {
     console.log ('it it chilly');
 } else if (temperature >= 30) {
     console.log('it is cold'); 
} else {
    console.log('it is really cold');
 }


 //switch
let friend = "Tina";
switch (friend) {
    case 'Tom':
        console.log("Hey, Tom!");
        break;
    case "Ken":
        console.log("Screw you, Ken");
        break;
    case "Maggie":
        console.log("MARGARET!!");
        break;
    default: 
        console.log(`I'm sorry, ${friend}, I don't know who you are.`);     //Use back-ticks (left of 1) so you don't have to break with quotes.
}           //string interpolation ^^ allows us to use js within a string


/* CHALLENGE*/
let dessert = ('xxx');
switch (dessert) {
    case "pie": 
        console.log('Pie!! Yay!');
        break;
    case 'cake':
        console.log ('cake is great!');
        break;
    case 'ice cream':
        console.log ('I scream!');
        break;
    default:
        console.log (`${dessert} is not on the menu`);
}


//Change word to all lowercase
let uppercase = "GJSrdla zefSEZ";
uppercase = uppercase.toLowerCase();
console.log(uppercase)


let number = 9;
switch(true){
    case(number < 0 && number > 10):
        console.log('this is weird');
        break;
    case (number > 0):
        console.log('this seems more normal');
        break;
    default:
        console.log('it did not work');
}