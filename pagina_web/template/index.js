// 1. get user's input 
console.log("mi primer comentario")
console.log("MI Primer Streaming Platform")

var nombre = "Pablo" 

console.log("Hola, mi nombre es:", nombre)

console.log(document)
var movieForm = document.getElementById("movie-form")
console.log(movieForm)

// var movieList = [{
//     movieName:"Blade",
//     moviePlatform: "Netflix",
//     movieCover:"https://img.sflix.to/xxrz/250x400/224/11/99/1199a22914d04d72e657007fcaaae128/1199a22914d04d72e657007fcaaae128.jpg"
// }]
// console.log(movieList)
var movieContainer = document.getElementById("movies-container")

movieForm.addEventListener("submit", function(event) {
    event.preventDefault()

    var movieItem = document.createElement("section")
    movieItem.setAttribute("class", "movie-card")

    var movieNameInput = document.getElementById("movie-name").value
    var moviePlatformInput = document.getElementById("movie-platform").value
    var movieCoverInput = document.getElementById("movie-cover").value
    console.log(movieNameInput)
    var newMovieTitle = document.createElement("h2")
    newMovieTitle.textContent = movieNameInput
    var newMoviePlatform = document.createElement("h3")
    newMoviePlatform.textContent = moviePlatformInput
    var newMovieCoverDiv = document.createElement("div")
    newMovieCoverDiv.setAttribute("class", "movie-cover-div")
    var newMovieCover = document.createElement("img")
    newMovieCover.src = movieCoverInput
    newMovieCover.setAttribute("class", "movie-cover-image")
    newMovieCoverDiv.appendChild(newMovieCover)
    var newMovieButton = document.createElement("button")
    newMovieButton.textContent = "Marcar como visto"
    
    movieItem.appendChild(newMovieCoverDiv)
    movieItem.appendChild(newMovieTitle)
    movieItem.appendChild(newMoviePlatform)
    movieItem.appendChild(newMovieButton)

    movieContainer.appendChild(movieItem)

    console.log(movieItem)
   
  
})


