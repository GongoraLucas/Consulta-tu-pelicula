document.getElementById("buscar").addEventListener("click",buscarPeliculas)
let apiKey = "783bce2d93a411b8baf3b975c05eb9c3"
let urlBase = "https://api.themoviedb.org/3/search/movie?query"
let urlImg =  "https://image.tmdb.org/t/p/w200"
function buscarPeliculas(){
    let peli = document.getElementById("buscO").value;
    fetch(`${urlBase}=${peli}&api_key=${apiKey}`).then(response=>response.json() ).then(response=>busquedaApiPelicula(response.results))
}

function busquedaApiPelicula(movie){
    let containerMovies = document.getElementById("results")
    containerMovies.scrollTop=0
    containerMovies.innerHTML=""
    if (movie.length===0){
        containerMovies.innerHTML="<p>No hay resultados de tu busqueda</p>"
        containerMovies.classList.add("resultsFallido")
        return
    } else{
        containerMovies.classList.remove("resultsFallido")
    }
    movie.forEach(peli => {
        let divPeli = document.createElement("div")
        divPeli.classList.add("movie")
        let titulo = document.createElement("h2")
        titulo.textContent=peli.title
        let poster = document.createElement("img")
        poster.src=urlImg+peli.poster_path
        let fecha = document.createElement("p")
        fecha.textContent="su fecha de lanzamiento es o fue: "+peli.release_date
        let descripcion = document.createElement("p")
        descripcion.textContent= peli.overview
        divPeli.appendChild(titulo)
        divPeli.appendChild(poster)
        divPeli.appendChild(fecha)
        divPeli.appendChild(descripcion)
        containerMovies.appendChild(divPeli)
    })
}