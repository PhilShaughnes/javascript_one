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

worst = []
worst[0] = "The Star Wars Holiday Special"
worst[1] = "Army of Darkness"
worst[2] = "Starship Troopers"
worst[3] = "Kazaam"
worst[4] = "Star Wars: Episode II - Attack of the Clones"

fav.sort()
worst.sort()





console.log(fav)
film_list = document.querySelector("#starwars ul")

fetch("http://swapi.co/api/films/")
.then( response => response.json()).then(data => console.log( data.results ))

x = fetch("http://swapi.co/api/films/").then(
  response => response.json()
).then(
  data => data.results.forEach(
    film => film_list.innerHTML += "<li>" + film.title + "</li>"
  ))


fetch("http://www.omdbapi.com/")
