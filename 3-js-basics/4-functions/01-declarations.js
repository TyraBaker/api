//Declarations

//hey()             ==can only be run after variable is declared (var)
greetings()        // ==can run anywhere, even prior to being defined (function)

function greetings() {              //run/call any time
    console.log("salutations")
}

greetings()  // (parenthases) required to run function
console.log(greetings)      //runs info pertaining to function
console.log(greetings())       // runs function, but is invoked. == undefined

var hey = function hey() {          //run/call after defined
    console.log('hey')              //more specific, run locally
}
console.log(hey)
hey()