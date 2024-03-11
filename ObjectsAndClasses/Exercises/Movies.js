function movies (arrInput) {
    const arrMovies = [];

    function addMovie(movieName) {
        if (!arrMovies.some(movie => movie.name === movieName)) {
            arrMovies.push({name: movieName});
        }
    }

    function addDirectorToMovie(movieName, director) {
        const findMovie = arrMovies.find(movie => movie.name === movieName)
        if (findMovie) {
            findMovie.director = director
        }
    }

    function addDateToMovie(movieName, date) {
        const findMovie = arrMovies.find(movie => movie.name === movieName)
        if (findMovie) {
            findMovie.date = date
        }
    }

    arrInput.forEach(input => {
        if (input.startsWith('addMovie')) {
            const movieName = input.substring(9)
            addMovie(movieName)
        } else if (input.includes("directedBy")) {
            const [movieName, director] = input.split(' directedBy ')
            addDirectorToMovie(movieName, director)
        } else if (input.includes('onDate')) {
            const [movieName, date] = input.split(' onDate ')
            addDateToMovie(movieName, date)
        }
    });


    const completedMovies = arrMovies.filter(movie => movie.name && movie.director && movie.date)

    completedMovies.forEach(movie => console.log(JSON.stringify(movie)))
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])