// Defining a baseURL and key to as part of the request URL

const id = "NDZBCUJSRZL5KHHA0K2S4DIL53UWGWTIYAWMSZRZM00MRVHD";
const secret = "TPUVVT0PCUUUPKUDWPK4V2UFQIHX034FRAVGIDHAIORV0IHZ";
const place = document.querySelector('.place');
const searchTerm = document.querySelector('.search');


//const baseURL = 'https://api.foursquare.com/v2/venues/search?near=Indianapolis,IN&client_id=' + id + '&client_secret=' + secret + '&v=20180323' + '&search=';


const baseURL = 'https://api.foursquare.com/v2/venues/search?near=Indianapolis&client_id=' + id + '&client_secret=' + secret + '&v=20180323' + '&query=';


const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
 

searchForm.addEventListener('submit', fetchResults);
function fetchResults(e) {
    // Use preventDefault() to stop the form submitting
    e.preventDefault();
    // Assemble the full URL
    const baseURL = 'https://api.foursquare.com/v2/venues/search?near=' + place.value + '&client_id=' + id + '&client_secret=' + secret + '&v=20180323' + '&query=' + searchTerm.value;

    fetch(baseURL)
        .then(function (result) {
            console.log(result);

            return result.json();
        }).then(function (json) {
            console.log(json);
            displayResults(json);
        });

};





function displayResults(results) {
    for (venue of results.response.venues) {
        //1 create HTML elements for what you want
        let venueName = document.createElement('h2')



        //2 add text content or src/href to the element from the api result
        venueName.textContent = venue.name;



        //3 append to HTML
        section.appendChild(venueName)
    }
}