function movies(array) {
    let movies = [];

    for (let i = 0; i < array.length; i++) {
        let token = array[i].split(' ');

        if (token.includes('addMovie')) {
            token.shift();
            let movieName = token.join(' ');
            let obj = {
                name: movieName
            }

            movies.push(obj);
        } else if (token.includes('directedBy')) {
            let startIndexOfDirector = token.indexOf('directedBy');
            let movieName = token.slice(0, startIndexOfDirector).join(' ');
            let director = token.slice(startIndexOfDirector + 1).join(' ');

            for (let i = 0; i < movies.length; i++) {
                Object.keys(movies[i]).forEach(movie => {
                    if (movies[i][movie] == movieName) {
                        movies[i]['director'] = director;
                    }
                });
            }
        } else if (token.includes('onDate')) {
            let startIndexOfOnDate = token.indexOf('onDate');
            let movieName = token.slice(0, startIndexOfOnDate).join(' ');
            let date = token.slice(startIndexOfOnDate + 1).join('.');

            for (let i = 0; i < movies.length; i++) {
                Object.keys(movies[i]).forEach(movie => {
                    if (movies[i][movie] == movieName) {
                        movies[i]['date'] = date;
                    }
                });
            }
        }
    }

    for (let movie of movies) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            let parsedToJson = JSON.stringify(movie);
            console.log(parsedToJson);
        }
    }
}

movies(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);