// 1 - Start #1
// Defining a baseURL and key to as part of the request URL
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'key';
let url;

// Grab references to all the DOM elements you'll need to manipulate
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
// 1 - End #1

//3 - Start #1
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');

const section = document.querySelector('section');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;
console.log('PageNumber:', pageNumber);

let displayNav = false;

// Event listeners to control the functionality
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
//3 - End #1

//1 - Start #2
function fetchResults(e) {
  // Use preventDefault() to stop the form submitting
  e.preventDefault(); 
  // Assemble the full URL
  url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  console.log("URL:", url);  
  if(startDate.value !== '') {
    url += '&begin_date=' + startDate.value;
  };

  if(endDate.value !== '') {
    url += '&end_date=' + endDate.value;
  };

  // Use fetch() to make the request to the API
  fetch(url).then(function(result) {
    return result.json();
  }).then(function(json) {
    displayResults(json);
  });
}
//1 - End #2

//2 
function displayResults(json) {
  while (section.firstChild) {
      section.removeChild(section.firstChild);
  }

  let articles = json.response.docs;
  console.log(articles);
  if (articles.length === 10) {
    nav.style.display = 'block';
    
    if (pageNumber === 0) { 
      previousBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'block';
      previousBtn.style.display = 'block';
    }
  } else {
    if (pageNumber > 0) {
      nextBtn.style.display = 'none';
      previousBtn.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  }

  if(articles.length === 0) {
    let para = document.createElement('p');
    para.textContent = 'No results returned.'
    section.appendChild(para);
  } else {
    for(let i = 0; i < articles.length; i++) {
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');

      let current = articles[i];

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para.textContent = 'Keywords: ';
      for(let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }

      if(current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class','clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
};


//3 - Start #2
function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log("Next page:", pageNumber);
};

function previousPage(e) {
  if(pageNumber > 0) {
    pageNumber--;
    console.log("Previous page:", pageNumber);
  } else {
    return;
  }
  fetchResults(e);
};




// const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// const key = "cffca16fe0ad41a690a542c63c46de91";
// let url;

// const searchTerm = document.querySelector(".search");
// const startDate = document.querySelector("#start-date");
// const endDate = document.querySelector(".end-date");
// const searchForm = document.querySelector("form");
// const submitBtn = document.querySelector(".submit");

// const nextBtn = document.querySelector(".next");
// const previousBtn = document.querySelector(".prev");
// const nav = document.querySelector("nav");

// const section = document.querySelector("section");

// nav.style.display = "none";

// let pageNumber = 0;
// console.log("PageNumber:", pageNumber);
// let displayNav = false;

// searchForm.addEventListener("submit", fetchResults);

// nextBtn.addEventListener("click", nextPage);
// previousBtn.addEventListener("click", previousPage);

// // if (pageNumber === 0){
// //     document.getElementById(prev).style.display = "none"
// // }




// function fetchResults(e) {
//     //console.log(e)
//     e.preventDefault();
//     url = baseURL + '?api-key=' + key + '&page=' + pageNumber +'&q=' + searchTerm.value;
//     console.log("URL:", url);
//     if(startDate.value !== '') {
//         console.log(startDate.value)
//         url += '&begin_date=' + startDate.value;
//     };

//     if(endDate.value !== "") {
//         url += "&end_date=" + endDate.value;
//     };

//     fetch(url)
//     .then(function(result) {
//         //console.log(result)
//         return result.json();
//     }).then(function(json) {
//         //console.log(json)
//         displayResults(json);
//     });

// }

// function displayResults(json) {
//     while (section.firstChild) {
//         section.removeChild(section.firstChild);
//     }
//     let articles = json.response.docs;
//     //console.log(articles);

//     if(articles.length === 10) {
//         nav.style.display = "block";
//      } else {
//      nav.style.display = "none";
//     };

//     if (articles.length === 0) {
//         console.log ("No results");
//     } else {
//         for (let i = 0; i < articles.length; i++) {
//         let article = document.createElement("article");
//         let heading = document.createElement("h2");
//         let link = document.createElement('a');
//         let img = document.createElement("img");
//         let para = document.createElement('p');
//         let clearfix = document.createElement("div");

//         let current = articles[i];
//         console.log("Current:", current);

//         link.href = current.web_url;
//         link.textContent = current.headline.main;

//         para.textContent = "Keywords: ";

//         for (let j = 0; j < current.keywords.length; j++){
//             let span = document.createElement("span");
//             span.textContent += current.keywords[j].value + " " ;
//             para.appendChild(span);
//         }

//         if(current.multimedia.length > 0) {
//             img.src = "http://nytimes.com/" + current.multimedia[0].url;
//             img.alt = current.headline.main;
//         }

//         clearfix.setAttribute("class", "clearfix");

//         article.appendChild(heading);
//         heading.appendChild(link);
//         article.appendChild(img);
//         article.appendChild(para);
//         article.appendChild(clearfix);
//         section.appendChild(article);
//     }
//     }
// };

// function nextPage(e) {
//     pageNumber++;
//     fetchResults(e);
//     console.log("Page number:", pageNumber);
// };

// function previousPage(e) {
//     if(pageNumber > 0) {
//         pageNumber--;
//     }else{
//         return;
//     }
//     fetchResults(e);
//     console.log("Page:", pageNumber);
// };

