class Movie {
  constructor(title, directors, genre, year, actors) {
    this.title = title
    this.directors = directors
    this.genre = year
    this.actors = actors
  }
}



fav = []
fav[0] = "The Shawshank Redemption"
fav[1] = "Aladdin"
fav[2] = "Star Wars: The Force Awakens"
fav[3] = "The Bourne Identity"
fav[4] = "The Dark Knight"

leastfav = []
fav[0] = "The Star Wars Holiday Special"
fav[1] = "Army of Darkness"
fav[2] = "Starship Troopers"
fav[3] = "Kazaam"
fav[4] = "Star Wars: Episode II - Attack of the Clones"







console.log(favs)
film_list = document.querySelector("#starwars ul")

fetch("http://swapi.co/api/films/")
.then( response => response.json()).then(data => console.log( data.results ))

fetch("http://swapi.co/api/films/").then(
  response => response.json()
).then(
  data => data.results.forEach(
    film => film_list.innerHTML += "<li>" + film.title + "</li>"
  ))


fetch("http://www.omdbapi.com/")
