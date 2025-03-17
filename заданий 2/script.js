const form = document.querySelector('#movieForm');
const movieList = document.querySelector('#movieList');
const noMoviesMessage = document.querySelector('#noMoviesMessage');

form.addEventListener('submit', addMovie);
movieList.addEventListener('click', handleMovieAction);

document.addEventListener("DOMContentLoaded", loadMovies);

function loadMovies() {
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.forEach(movie => renderMovie(movie));
    toggleNoMoviesMessage();
}

function addMovie(evt) {
    evt.preventDefault();
    const title = document.querySelector('#movieTitle').value.trim();
    const genre = document.querySelector('#movieGenre').value.trim();

    if (!title || !genre) {
        alert("Заполните название и жанр");
        return;
    }

    const movie = {
        id: crypto.randomUUID(),
        title,
        genre,
        watched: false,
    };

    renderMovie(movie);
    saveMovie(movie);
    form.reset();
    toggleNoMoviesMessage();
}

function renderMovie(movie) {
    const movieHTML = `
      <li class="movie-item" data-movie-id="${movie.id}" data-movie-watched="${movie.watched}">
        <span class="${movie.watched ? 'watched' : ''}">${movie.title} (${movie.genre})</span>
        <div>
          <button data-action="toggle" class="toggle-btn">✔</button>
          <button data-action="delete" class="delete-btn">✖</button>
        </div>
      </li>
    `;
    movieList.insertAdjacentHTML('beforeend', movieHTML);
}

function saveMovie(movie) {
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
}

function handleMovieAction(evt) {
    const action = evt.target.dataset.action;
    if (!action) return;

    const movieItem = evt.target.closest('li');
    const movieId = movieItem.dataset.movieId;

    if (action === "toggle") {
        toggleWatched(movieItem, movieId);
    } else if (action === "delete") {
        deleteMovie(movieItem, movieId);
    }
}

function toggleWatched(movieItem, movieId) {
    const movies = JSON.parse(localStorage.getItem("movies"));
    const movie = movies.find(m => m.id === movieId);
    movie.watched = !movie.watched;
    localStorage.setItem("movies", JSON.stringify(movies));
    movieItem.querySelector("span").classList.toggle("watched");
}

function deleteMovie(movieItem, movieId) {
    let movies = JSON.parse(localStorage.getItem("movies"));
    movies = movies.filter(m => m.id !== movieId);
    localStorage.setItem("movies", JSON.stringify(movies));
    movieItem.remove();
    toggleNoMoviesMessage();
}

function toggleNoMoviesMessage() {
    if (movieList.children.length === 0) {
        noMoviesMessage.style.display = "block";
    } else {
        noMoviesMessage.style.display = "none";
    }
}