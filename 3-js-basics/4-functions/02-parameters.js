//Parameters
/*
Parameters are like empty storage boxes, 
that we put info in and call it whatever we want.

You can none to many parameters. 

You give the value of the parameter when tou call the function. 
*/

addition(90,40) //defined later

function pet(animal){
    console.log(`I have a/an ${animal} for a pet.`)
}
pet('cat');
pet('aardvark');

function addition(num1, num2){
    console.log(num1 + num2)
}
addition(90, 85)
addition(-164, 498)


//CHALLENGE
var fullName = ("Tyra" + " " + "Baker")
function name(first, last){
    console.log(`Hello, my name is ${fullName}`)
    //console.log(`Hello, my name is ${first} ${last}`)
}
//name("Tyra", "Baker")
name()



//regular
function coffee() {
    console.log('coffee is awesome')
}
//fat arrow
tea = () => {
    console.log('tea is great')
}

coffee()
tea()

pets = (pet1, pet2) => {
    console.log(`I have a ${pet1} and ${pet2} as pets`)
}
pets('cat', 'dog')

//CHALLENGE
name = (first, last) => {
    //let fullName = (first + ' ' + last)
    console.log(`Hello, my name is ${first} ${last}`) // ${fullName}
}
name('Tyra','Baker')



//Return
    //anything underneath return will not get ran
    //send information of outcome of function so that it may be used outside the function
addition = (num1, num2) => {
    console.log(num1 + num2)
    return num1 + num2;
}

let sum = addition(3, 6)
console.log(sum)

madLibs = (verb, noun, adj) => {
    let story = `A ${noun} ${verb} away ${adj}.`
    return story;
}
let awesomeStory = madLibs('ran', 'mouse', 'quickly')    
console.log(awesomeStory)

//CHALLENGE 
items = (num1, num2, num3) => {
    let total = (num1+num2+num3)
    return (total * .20)                //functions/equations folowing return
}
let tip = items(2,2,2)
console.log(tip)
