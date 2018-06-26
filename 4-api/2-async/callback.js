function callbackFunction(){
    for (let i = 0; i < 100; i++){
        console.log(i)
    }
    const data = {
        name: "Nicky",
        age: 19,
        occupation: 'waitress'
    }
    return data;
}

function showGreeting(dataFromFunction){
    console.log(`Hello, ${dataFromFunction.name}, I hear you're cool.`);
}
showGreeting(callbackFunction())