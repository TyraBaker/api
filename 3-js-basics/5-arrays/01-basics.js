//Arrays
    //lists similar infor
    //holds multiple datatypes
    //[square brackets] indicate an array

let dogs = ['Husky', 'Lab', 'German Shepard', 3, true]
        //      0       1       2              3    4

//accessing info in arrays
    //arrays are based on indices
    //access certain parts of an array by its index

console.log(dogs[0]);

//CHALLENGE
let foods = ['fruit', 'fish', '?'];
console.log (foods[0]);
console.log (foods[2]);

foods.push('burrito');      //adds item to end of aray
console.log (foods);

foods.pop('burrito');       //removes last item from end of array
console.log (foods);

//work well with for of loops
for (f of foods){
    console.log(f);
}

//CHALLENGE
let movies = ['Saw', 'Saw II', 'Saw III', 'The Lion King', 'Saw V', 'Saw VI', 'Jigsaw'];
for (f of movies){
    console.log(f)};
movies.push('It')
console.log(movies)
movies.push('The Shining')
console.log(movies)
movies.pop('The Shining')
console.log(movies)

//position, how many to cut out, what is being added
movies.splice(3, 1, 'Saw IV');
console.log(movies)
movies.splice(0, 0, 'Mulan');
console.log(movies)
movies.splice(0,1);
console.log(movies)
//getting length of an array
console.log(movies.length)

let x = 1;
x += 4;