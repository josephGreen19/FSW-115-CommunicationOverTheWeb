const starWars =  {
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.co/api/planets/1/",
	"films": [
		"https://swapi.co/api/films/2/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/",
		"https://swapi.co/api/films/1/",
		"https://swapi.co/api/films/7/"
	],
	"species": [
		"https://swapi.co/api/species/1/"
	],
	"vehicles": [
		"https://swapi.co/api/vehicles/14/",
		"https://swapi.co/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.co/api/starships/12/",
		"https://swapi.co/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.co/api/people/1/"
}
var json = JSON.stringify(starWars)
var myList = document.createElement("ul")

var newli1 = document.createElement("li")
newli1.textContent = ("Name: " + starWars.name)
var newLi2 = document.createElement('li')
newLi2.textContent = ("Height: ") + starWars.height
var newLi3 = document.createElement("li")
newLi3.textContent = ("Mass: ") + starWars.mass
var newLi4 = document.createElement("li")
newLi4.textContent = ("Hair Color: ") + starWars.hair_color
var newLi5 = document.createElement("li")
newLi5.textContent = ("Skin Color: ") + starWars.skin_color
var newLi6 = document.createElement("li")
newLi6.textContent = ("Eye Color: ") + starWars.eye_color
var newLi7 = document.createElement("li")
newLi7.textContent = ("Birth Year: ") + starWars.birth_year
var newLi8 = document.createElement("li")
newLi8.textContent =("Gender: ") + starWars.gender
var newLi9 = document.createElement("li")
newLi9.innerHTML = ("HomeWorld: ") + starWars.homeworld
// Add li to the ul
document.querySelector("myList")
myList.append(newli1,newLi2, newLi3, newLi4, newLi5, newLi6, newLi7, newLi8, newLi9)

document.body.append(myList)