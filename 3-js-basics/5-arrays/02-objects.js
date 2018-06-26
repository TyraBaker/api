//Objects and arrays are related
    //-store and gather information
    //-hold different datatypes
//Objects tend to hold a bunch of info about one thing
    //-observed by {curly brackets}
//key: value,
let netflix = {
    id: 9,
    name: "Super Store",
    seasonOne: {
        episodeInfo:[
            { episode: 1, episodeName: 'Pilot'},
            {episode: 2, episodeName: 'Magazine Profile'},
            {epsidoe: 3, episodeName: "Shots and Salsa"},
        ]
    },
    seasonTwo: {},
    seasonThree: {},
}
/* console.log('all data', netflix);
console.log('just seasonOne episode info', netflix.seasonOne.episodeInfo)
console.log('the name',netflix.name);
*/

console.log(Object.keys(netflix));   //gives all of our keys
console.log(Object.values(netflix));    //gives all values 

//CHALLENGE
let movie = {
    id: 5,
    name: 'Saw V',
    actors:  [
        'Tobin Bell', 'Costas Mandylor', 'Scott Patterson',
    ],
    releaseDate: 'October 24, 2008',
    genre: 'Thriller/Gore',
}
console.log(Object.keys(movie))
console.log(movie.actors)

