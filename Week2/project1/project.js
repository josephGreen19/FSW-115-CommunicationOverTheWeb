var rickMorty = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}




var json = JSON.stringify(rickMorty)
var myList = document.createElement("ul")

var newli1 = document.createElement("li")
newli1.textContent = ("Name: " + rickMorty.name)
var newLi2 = document.createElement('li')
newLi2.textContent = ("Status: ") + rickMorty.status
var newLi3 = document.createElement("li")
newLi3.textContent = ("Species: ") + rickMorty.species
var newLi4 = document.createElement("li")
newLi4.textContent = ("Gender: ") + rickMorty.gender
var newLi5 = document.createElement("li")
newLi5.textContent = ("Origin Name: ") + rickMorty.origin.name
var newLi6 = document.createElement("li")
newLi6.textContent = ("Origin URL: ") + rickMorty.origin.url
var newLi7 = document.createElement("li")
newLi7.textContent = ("Location Name: ") + rickMorty.location.name
var newLi8 = document.createElement("li")
newLi8.textContent =("Location URL: ") + rickMorty.location.url
var newLi9 = document.createElement("li")
newLi9.innerHTML = ("Created: ") + rickMorty.created
// Add li to the ul
document.querySelector("myList")
myList.append(newli1,newLi2, newLi3, newLi4, newLi5, newLi6, newLi7, newLi8, newLi9)

document.body.append(myList)

document.querySelector("ul").style.fontSize = "25px"
document.querySelector("ul").style.border = "solid black 10px"
