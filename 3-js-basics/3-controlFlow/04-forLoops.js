//Loops
    //offer a way for us to do something repeatedly

//Types of Loops in JS: 
    /*
    for loops
    while loops
    do while
    labeled statement
    break statement
    continue statement
    for in
    for of
    */


//For loops

let x = 1; //declare
x += 5; //increases by given number
x++; //just adds 1

for (var i = 0; i < 10 ; i ++){     //unit. condition for running. output funtion for running.
    console.log(i);                 //New value of i after all loops have been run.
}

for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

//CHALLENGE
for (let i = 10; i <= 20; i ++){
    console.log(i);
}


let name = 'Aaron'
for (let i = 0; i < name.length; i++){
    console.log(name[i])
}

//CHALLENGE
let sum = 0;
for (var i = 1; i <= 50; i++){
    sum =+i
}


//In Loops
    //iterate over keys and values in an object

var user = {
    name: "Aaron",
    shirt: "red",
    week: 1,
    awesome: true
}

for (item in user){  //item is interchangable, random variable/title. User the defined term.
    console.log(item)
    console.log(user[item])
    }

    //CHALLENGE
var pet = {
    name: "Onyx",
    type: "dog",
    breed: "Black Lab",
    gender: "male",
    age: 4,
    sweet: true
}
for (properties in pet){
    console.log(properties)
    console.log(pet[properties])
}


//For of loops
    //iterate over an array
    //print value of what they iterate over. ie: arrays.

let catArray = ['tabby', 'american shorthair', 'maine coon', 'rag doll']
for (cat of catArray) {
    console.log(cat)
}

//for ins grab the keys
for (cat in catArray) {
    console.log(cat)
}

//for of for arrays, for in for objects