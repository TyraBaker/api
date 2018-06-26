// Defining a baseURL and key to as part of the request URL
const baseURL = 'https://api.foursquare.com/v2/venues/explore';
const id = "NDZBCUJSRZL5KHHA0K2S4DIL53UWGWTIYAWMSZRZM00MRVHD";
const secret = "TPUVVT0PCUUUPKUDWPK4V2UFQIHX034FRAVGIDHAIORV0IHZ";
let url;

// Grab references to all the DOM elements you'll need to manipulate
const searchTerm = document.querySelector('.search');
const distance = document.querySelector('.distance');

const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const foodBtn = document.querySelector(".food");
const drinksBtn = document.querySelector(".drinks");
const entertainmentBtn = document.querySelector(".entertainment");

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');

const section = document.querySelector('section');
const nav = document.querySelector('nav');