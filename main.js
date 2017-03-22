
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

fav.sort() // sort by title
worst.sort() // sort by title




function parse(list) { // make objects with movie data corrisponding to the titles in the list
  movobj = [] // this will the be new list of js object
  jlist = [] // this will be the JSON formatted list (stringify didn't like when I gave it an array of objects)
  list.forEach ( //iterate over the list
    title => fetch("http://www.omdbapi.com/?t="+encodeURIComponent(title)).then(
      response => response.json() //convert from json
    ).then(
      movie => {
// I tried for a long time to user for(i++) syntax so I could set 'list[i] =' here. it never worked. I think because of the `then` statements?
        mov = { //make an object using the returned data
          title: movie.Title,
          directors: movie.Director,
          genre: movie.Genre,
          year: movie.Year,
          actors: movie.Actors,
          rating: movie.imdbRating,
          metascore: movie.Metascore
        }
        movobj.push(mov) //add the object to our lists
        jlist.push(JSON.stringify(mov))
      }
    )
  )
  return { // return an object that has both js objects and json formatted arrays
    obj: movobj,
    toj: jlist
  }
}


// function tablize(id, arr) {
//   table = document.querySelector("#"+ id)
//   table.innerHTML += "<tr>"
//   console.log(arr)
//   arr.forEach(
//     item => console.log(item)
//   )
//   console.log(Object.keys(arr[0]))
//   Object.keys(arr[0]).forEach(
//     key => {
//       table.innerHTML += "<th>"+key+" a key?" + "</th>"
//     }
//   )
//   table.innerHTML += "</tr>"
//
//
//
//   table.innerHTML += "<h1>tablize works!</h1>"
// }


fav = parse(fav)
console.log(fav.obj)
console.log(fav.toj)


// this is somehow combining lists?!?!
// worst = parse(worst)
// console.log(worst.obj)
// console.log(worst.toj)



//lots of things aren't working how expected.
// If I run parse on worst list, it pulls in data from the fav list.
// iterating through an array and using the iterator to define and redefine elements in an array didn't work.
// passed in variable are disappearing inside the tabalize function.
