//Ternary
    //Different wat of doing an if else
    //1-line solution

let x = 7;
(x > 0) ? console.log('yes') : console.log('no')

(x == 0) ? console.log('zero') : (x < 0) ? console.log ('negative') : console.log('positive');

//CHALLENGE

let age = 28;
(age >= 25) ? console.log ("you can rent a car") : (age >= 21) ? console.log ("you can drink") : (age >= 18) ? console.log ("you can vote") : console.log ("you're too young");


//CHALLENGE

var fb = 9;
switch(true){
    case(fb % 3 && fb % 5 == 0) :
        console.log('fizz buzz');
        break;
    case (fb % 3 == 0) :
        console.log('fizz');
        break;
    case(fb % 5 == 0) :
        console.log("buzz");
        break;
    default:
        console.log(null);
}

var fb = 15;
(fb % 3 == 0 && fb % 5 == 0) ? console.log('fizz buzz') : (fb % 3 == 0) ? console.log('fizz') : (fb % 5 == 0) ? console.log('buzz') : console.log(null);
