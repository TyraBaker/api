//NOTE: Single equal sign only used to assign values.


// Check if equal
    // double equals (==) ignores type
console.log('3' == 3);
console.log(5 == 3);

//strict equal (===)
    //checks type
console.log('3' === 5);
console.log (3 === 3);

//not equal (!=)
    //ignores type
console.log(3 != 4);
console.log(3 != '3');

//strict not qual (!==)
    //checks type
console.log(3 !== '3');

//greater or less than
console.log (3 > 2);
console.log (3 < 2);

//greater (or less) than or equal to
    // ">=" "<=" . EQUAL SIGN SECOND
console.log (2 >= 2);
console.log (2 <= 2);

//and
    //compares many things at once 
    //if any one part is false, the statement is false.
    // "&&"
console.log (1 < 2 && 1 > 0);
console.log (1 < 2 && 1 > 0 && 1 > 3);

//or
    //compares many things at once
    //if any part is true, the statement is true
    // "||"
console.log (1 < 2 || 1 > 3);

//not
    //opposite of anything
    //"!"
console.log( !(1 > 2));
console.log( !(1 < 2));