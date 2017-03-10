var moviedatabase = (function () {
    var movies = [{
            title: "Änglavakt",
            year: 2010,
            genres: ["Drama"],
            ratings: [10, 10, 10, 10, 10, 10, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1]
        }, {
            title: "Himlen är oskyldigt blå",
            year: 2010,
            genres: ["Comedy", "Drama"],
            ratings: [10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 2, 1]
        }, {
            title: "Luftslottet som sprängdes",
            year: 2009,
            genres: ["Thriller"],
            ratings: [10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4]

        }, {
            title: "Madness",
            year: 2010,
            genres: ["Horror"],
            ratings: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }, {
            title: "Sebbe",
            year: 2010,
            genres: ["Drama"],
            ratings: [10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1]
        }, {
            title: "Snabba Cash",
            year: 2010,
            genres: ["Thriller"],
            ratings: [10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1]
        }, {
            title: "Svinalängorna",
            year: 2010,
            genres: ["Drama"],
            ratings: [10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1, 1]
        }, {
            title: "Till det som är vackert",
            year: 2010,
            genres: ["Drama"],
            ratings: [10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 2, 1]
        }, {
            title: "Dragonetti: The Ruthless Contract Killer",
            year: 2010,
            genres: ["Horror"],
            ratings: [10, 10, 9, 9, 8, 8, 8, 7, 7, 7, 7, 7, 6, 6, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
              ];

    /*Movie constructor*/
    /*Konstruktor för filmer*/
    function Movie(title, year, genres) {
        this.title = title;
        this.year = year;
        this.genres = genres;
    };

    /*returns the average value of all ratings of a movie*/
    /*returnera medelvärdet för alla ratings för en film*/
    var calculateRating = (movie) => {
        return movie.ratings.reduce((prevVal, val) => {
            return prevVal + val;
        }) / movie.ratings.length;
    };

    /*Show all movies*/
    /*Visa alla filmer*/
    var printMovies = () => {
        /*Create and connect elements*/
        var result = document.getElementById('result');
        result.innerHTML = '';
        var header = document.createElement('h3');
        header.innerHTML = "All Movies";
        var ul = document.createElement('ul');
        result.appendChild(header);
        result.appendChild(ul);

        /*Loop adding each movie*/
        for (let i = 0; i < movies.length; i++) {
            let li = document.createElement('li');
            let innerLi = document.createTextNode(movies[i].title);
            li.appendChild(innerLi);
            ul.appendChild(li);
        };
    };

    /*adds value of the rate parameter to the ratings property of the Movie object*/
    /*lägger till värdet på parametern rate till egenskapen ratings i objektet Movie.*/
    var rateMovie = (movie, rating) => {
        movie.ratings.push(rating);
    };


    /*returns the object corresponding to the movie with the highest average ratings*/
    /*returnerar det objektet som motsvarar den film som har bäst genomsnittligt betyg*/
    var topRatedMovie = () => {
        return movies.reduce((prevVal, val) => {
            return prevVal.ratings < val.ratings ? val : prevVal;
        })
    };

    /*returns the object corresponding to the movie with the lowest average ratings; unrated movies are ignored.*/
    /*returnerar det objektet som motsvarar den film som har sämst genomsnittligt betyg. Räkna inte med filmer som inte fått något betyg än*/
    //Obs!!! Att göra: Räkna inte med filmer som inte fått betyg än
    var worstRatedMovie = () => {
        return movies.reduce((prevVal, val) => {
            return prevVal.ratings < val.ratings ? prevVal : val;
        })
    };

    /*prints the top rated and worst rated movies in an info box*/
    /*skriver in filmen med högst rating och den med sämst rating i en inforuta*/
    var printPopularityInfo = () => {
        /*obtain values & variables*/
        var best = topRatedMovie();
        var worst = worstRatedMovie();
        var info = document.getElementById('popularity-info');

        /*Create and connect elements*/
        var bestString = document.createTextNode(`Top Rated: ${best.title} (${Math.round(calculateRating(best) * 10) / 10})`);
        var bestDiv = document.createElement('div');
        bestDiv.appendChild(bestString);
        bestDiv.className = "info-inner";
        var worstString = document.createTextNode(`Worst Rated: ${worst.title} (${Math.round(calculateRating(worst) * 10) / 10})`);
        var worstDiv = document.createElement('div');
        worstDiv.className = "info-inner";
        worstDiv.appendChild(worstString);
        info.appendChild(bestDiv);
        info.appendChild(worstDiv);
    };

    /*shows movies sorted by popularity*/
    /*visar filmer sorterade efter popularitet*/
    var popularMovies = () => {
        /*Remake the movies array with average ratings*/
        var popularArray = movies.map((val, index) => {
            movies[index].ratings = Math.round(calculateRating(movies[index]) * 10) / 10;
            return movies[index];
        })

        /*Create and connect elements*/
        var result = document.getElementById('result');
        result.innerHTML = '';
        var header = document.createElement('h3');
        header.innerHTML = "Movies by Popularity";
        var ul = document.createElement('ul');
        result.appendChild(header);
        result.appendChild(ul);

        /*Loop adding each movie*/
        for (let i = 0; i < popularArray.length; i++) {
            let li = document.createElement('li');
            let innerLi = document.createTextNode(`${popularArray[i].title} (${popularArray[i].ratings})`);
            li.appendChild(innerLi);
            ul.appendChild(li);
        }
    };

    /*returns array with genres determined by checkboxes*/
    /*returnerar array med genres som bestäms av checkboxes*/
    var determineGenres = () => {
        var genres = [];
        if (document.getElementById('comedy').checked === true) {
            genres.push("Comedy");
        }
        if (document.getElementById('drama').checked === true) {
            genres.push("Drama");
        }
        if (document.getElementById('horror').checked === true) {
            genres.push("Horror");
        }
        if (document.getElementById('thriller').checked === true) {
            genres.push("Thriller");
        }

        return genres;
    }

    /*returns all movies which have the same genre as the value of the parameter genre (able to filter for multiple genres)*/
    /*returnerar alla filmer som har samma genre som värdet på parametern genre (ska kunna filtrera på flera genrer)*/
    var moviesByGenre = (selection) => {
        /*Filter movies*/
        var genreMovies = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].genres.some((val) => {
                    return val == selection;
                }) === true) {
                genreMovies.push(movies[i]);
            };
        };
        return genreMovies;
    };

    /*prints all movies of the selected genres*/
    /*printar ut alla filmer med de valda genrerna*/
    var printMoviesByGenre = () => {
        /*function call*/
        var movieArray = moviesByGenre(determineGenres());

        /*Create and connect elements*/
        var result = document.getElementById('result');
        result.innerHTML = '';
        var header = document.createElement('h3');
        header.innerHTML = "Movies by Genre";
        var ul = document.createElement('ul');
        result.appendChild(header);
        result.appendChild(ul);

        /*Loop adding the movies*/
        for (let i = 0; i < movieArray.length; i++) {
            var li = document.createElement('li');
            var innerLi = document.createTextNode(movieArray[i].title);
            li.appendChild(innerLi);
            ul.appendChild(li);
        }
    };


    /*returns a list of all movies which premiered the year year*/
    /*returnerar en lista över alla filmer som haft premiär året year*/
    var getMoviesThisYear = (year) => {

        /*Loop adding each movie to array*/
        var moviesThen = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].year == year) {
                moviesThen.push(movies[i]);
            }
        };
        return moviesThen;
    };

    var printMoviesByYear = () => {
        /*Obtain the year in question from the user*/
        var search = document.getElementById('year');
        var year = search.value;

        /*Find movies released this year*/
        var moviesThisYear = getMoviesThisYear(year);

        /*Create and connect elements*/
        var result = document.getElementById('result');
        result.innerHTML = '';
        var header = document.createElement('h3');
        header.innerHTML = year + " Movies";
        var ul = document.createElement('ul');
        result.appendChild(header);
        result.appendChild(ul);

        /*Loop adding the movies*/
        for (let i = 0; i < moviesThisYear.length; i++) {
            var li = document.createElement('li');
            var innerLi = document.createTextNode(moviesThisYear[i].title);
            li.appendChild(innerLi);
            ul.appendChild(li);
        }
    };

    /*remove genres from a movie*/
    /*ta bort genrer från en film*/
    var removeGenres = (movie, array) => {
        /*Nestled loop searches for the element and removes it*/
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < movie.genres.length; j++) {
                if (array[i].toUpperCase() === movie.genres[j].toUpperCase()) {
                    movie.genres.splice(j, 1);
                }
            }
        }
        return movie;
    };

    /*add genres to a movie*/
    /*lägg till genrer till en film*/
    var addGenres = (movie, array) => {
        /*Loops control if genre is already present, preventing doubles.*/
        /*If not a double, the genre is added.*/
        for (let i = 0; i < movie.genres.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (movie.genres[i].toUpperCase() === array[j].toUpperCase()) {
                    array.splice(j, 1);
                } else {
                    movie.genres.push(array[j]);
                }
            }
        }
        return movie;
    };

    /*===PUBLIC===*/
    return {
        getPrintMovies: printMovies,
        getPopularMovies: popularMovies,
        getprintMoviesByGenre: printMoviesByGenre,
        getprintMoviesByYear: printMoviesByYear,
        getTopRatedMovie: topRatedMovie,
        getWorstRatedMovie: worstRatedMovie,
        getPrintPopularityInfo: printPopularityInfo
    }
})();