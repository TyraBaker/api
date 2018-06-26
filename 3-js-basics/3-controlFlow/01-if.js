//if
    //a conditional statement
if (true){
    console.log('yay');
};
if (false){                 //does not run. only runs when if is true.
    console.log('boo');
};

let isOn = true; //convention for boolean naming is 'isWhatever'
if (isOn === true){
    console.log('the light is on');     //nothing would be run IF the statement were false.
};
if (isOn){
    console.log('the light is on again');
};

let weather = 60;
if (weather < 65) {
    console.log('bring a sweater');
};
let precipitation = 50;
if (precipitation > 0) {
    console.log('bring an umbrella');
};