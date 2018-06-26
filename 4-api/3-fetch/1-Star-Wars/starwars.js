var starWarsPeopleList = document.querySelector("ul")


//fetch info from API
fetch("https://swapi.co/api/people/")
.then(
    function (response){
       // console.log(response)
        return response.json();
    }
)
.then(
    function(json){
       // console.log(json)
        let people = json.results;
        for (p of people){
           // console.log(p)
            let listItem = document.createElement("li");
            listItem.innerHTML = "<p>" + p.name + "</p>";
            starWarsPeopleList.appendChild(listItem);
        }
    }
) 

var planetsList = document.getElementById("planets")

fetch("https://swapi.co/api/planets/")
.then(function(response){
    return response.json();
     }
)
.then(
    function(json){
        let planets = json.results;
        for (pl of planets){
            let listItem = document.createElement("li");
            listItem.innerHTML = "<p>" + pl.name + "</p>";
            planetsList.appendChild(listItem)
        }
    }
)