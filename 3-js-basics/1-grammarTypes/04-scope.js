/*Scope
    -JS has both local and global scope.*/

var x = 23;   //global

function scope() {
    var x = 33;      //local
    console.log (x);
};

console.log (x);  //global output

scope();   //local output
//functions create a local scope of their own

var y = 7;
function localScope() {
    y = 27;
    console.log(y);
}

localScope();        //When placed before the console.log command, the local variable is recognized bc it is the more specific value given most recently.
//var y= 10;           //When a new global variable is given, it becomes the overriding variable.
console.log(y);

//var, let, const

const state = "Indiana";        //Variables you do not want to change.
//state = "Indianaaaaa";        //cannot override const
//const state = "Something else";       //still cannot override


//var
function varTest() {
    var scope = 1;
    if (true) {
        var scope = 2;
        console.log (scope);
    }
    console.log(scope)
}

function letTest() {
    let scope = 1;
    if (true) {
        let scope = 2;
        console.log (scope);
    }
    console.log(scope)
}

varTest()
letTest()

/*
    Block Scope
        -block is the part between {} in a function or conditional
        -inside the block is local scope

    var does NOT have block scope built in. 
        -older and does not always work as wanted/expected

    let is newer and DOES have block scope
        -always locked into the scope between the {} making in more predictable

        TLDR: use let over var in most cases
*/