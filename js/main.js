/*===DATABASE & MAIN FUNCTIONS===*/
var moviedatabase = (function () {
    var movies = [{
            title: "Änglavakt",
            year: 2010,
            genres: ["Drama"],
            ratings: [10, 10, 10, 10, 10, 10, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
            averageRating: 0
        }, {
            title: "Himlen är oskyldigt blå",
            year: 2010,
            genres: ["Comedy", "Drama"],
            ratings: [10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 2, 1],
            averageRating: 0
        }, {
            title: "Luftslottet som sprängdes",
            year: 2009,
            genres: ["Thriller"],
            ratings: [10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4],
            averageRating: 0
        }, {
            title: "Madness",
            year: 2010,
            genres: ["Horror"],
            ratings: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            averageRating: 0
        }, {
            title: "Sebbe",
            year: 2010,
            genres: ["Drama"],
            ratings: [10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1],
            averageRating: 0
        }, {
            title: "Snabba Cash",
            year: 2010,
            genres: ["Thriller"],
            ratings: [10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1],
            averageRating: 0
        }, {
            title: "Svinalängorna",
            year: 2010,
            genres: ["Drama"],
            ratings: [10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1, 1],
            averageRating: 0
        }, {
            title: "Till det som är vackert",
            year: 2010,
            genres: ["Drama"],
            ratings: [10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 3, 2, 1],
            averageRating: 0
        }, {
            title: "Dragonetti: The Ruthless Contract Killer",
            year: 2010,
            genres: ["Horror"],
            ratings: [10, 10, 9, 9, 8, 8, 8, 7, 7, 7, 7, 7, 6, 6, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            averageRating: 0
        }
              ];

    /*Movie constructor*/
    /*Konstruktor för filmer*/
    function Movie(title, year, genres, rating, averageRating) {
        this.title = title;
        this.year = year;
        this.genres = genres;
        this.rating = rating;
        this.averageRating = averageRating;
    };

    /*summarize two values*/
    /*summera två värden*/
    var summarize = (total, number) => {
        return total + number;
    };

    /*changes the value of the averageRating property of a movie into actual average rating*/
    /*ändrar värdet på averageRating property:n för en film till genomsnittlig rating*/
    var calculateRating = (movie) => {
        var averageRating = movie.ratings.reduce(summarize);
        movie.averageRating = Math.round(averageRating / movie.ratings.length * 10) / 10;
        return movie.averageRating;
    };

    /*Show all movies*/
    /*Visa alla filmer*/
    var printMovies = () => {
        /*Get ul-element*/
        var ul = document.getElementById('print-ul');

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
        calculateRating(best);
        calculateRating(worst);
        info.innerHTML = '';
        info.innerHTML = `<div class="info-inner">Top Rated: ${best.title} (${best.averageRating})</div>
            <div class="info-inner">Worst Rated: ${worst.title} (${worst.averageRating})</div>`;
    };

    /*shows movies sorted by popularity*/
    /*visar filmer sorterade efter popularitet*/
    var popularMovies = () => {
        /*Calculate value of averageRating property for all movies*/
        for (i = 0; i < movies.length; i++) {
            calculateRating(movies[i]);
        }

        /*Find the UL*/
        var ul = document.getElementById('popularity-ul');

        /*Loop adding each movie*/
        for (let i = 0; i < movies.length; i++) {
            let li = document.createElement('li');
            let innerLi = document.createTextNode(`${movies[i].title} (${movies[i].averageRating})`);
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
            genres.push(" Horror");
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

        /*Obtain UL*/
        var ul = document.getElementById('genres-ul');

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

    /*add a new movie to the database*/
    /*lägg till en ny film till databasen*/
    var addMovie = () => {
        /*Determine data*/
        var title = document.getElementById('title').value;
        var year = parseInt(document.getElementById('year').value);
        var genres = determineGenres();
        var rating = [parseInt(document.getElementById('rating').value)];

        /*Create the new movie*/
        var newMovie = new Movie(title, year, genres, rating, 0);

        /*Push into database*/
        movies.push(newMovie);

        /*Get confirmation-element*/
        var confirm = document.getElementById('confirm');
        confirm.innerHTML = `${newMovie.title} was added!`;
    };

    /*in-parameter is supposed to be the genres from a movie; returns string of those genres*/
    /*det är meningen att inparametern ska vara genrer från en film; returnerar en sträng med de genrerna*/
    var arrayToString = (genresArray) => {
        var str = '';
        /*Loop through array, adding the genres to string. Adds , and space as long as it isn't the last element in the array.*/
        for (let i = 0; i < genresArray.length; i++) {
            str = str + genresArray[i];
            if (i !== genresArray.length - 1) {
                str = str + ", "
            }
        }
        return str;
    };
    
    var modify = (movie) => {
        
    };


    /*===PUBLIC===*/
    return {
        getPrintMovies: printMovies,
        getPopularMovies: popularMovies,
        getprintMoviesByGenre: printMoviesByGenre,
        getprintMoviesByYear: printMoviesByYear,
        getTopRatedMovie: topRatedMovie,
        getWorstRatedMovie: worstRatedMovie,
        getPrintPopularityInfo: printPopularityInfo,
        getAddMovie: addMovie,
        getArrayToString: arrayToString
    }
})();

/*===SUBPAGES===*/
/*At first I used subpages, but then I discovered changes to the movies-array wouldn't translate to other pages. This is a fix.*/
/*Till en början använde jag undersidor, men sedan upptäckte jag att ändringar i movies-array:en inte följde med till andra sidor. Det här är en fix.*/
var subpages = (function () {
    /*load index*/
    /*indexsidan*/
    var index = () => {
        /*obtain content*/
        var content = document.getElementById('content');

        /*clear content*/
        content.innerHTML = '';

        /*append HTML elements*/
        content.innerHTML = `<div id="result">
            <h3>All Movies</h3>
            <ul id="print-ul"></ul>
        </div>`;

        /*function call to print all movies*/
        moviedatabase.getPrintMovies();
    };

    /*load popularity page*/
    /*popularitetssidan*/
    var popular = () => {
        /*obtain content*/
        var content = document.getElementById('content');

        /*Clear content*/
        content.innerHTML = '';

        /*append HTML elements*/
        content.innerHTML = `<div id="popularity-info"></div><div id="result">
        <h3>Movies by Popularity</h3>
        <ul id="popularity-ul">
        </ul>
        </div>`;

        /*function calls*/
        moviedatabase.getPrintPopularityInfo();
        moviedatabase.getPopularMovies();
    };

    /*load genres search*/
    /*genre-sidan*/
    var genres = () => {
        /*obtain content*/
        var content = document.getElementById('content');

        /*Clear content*/
        content.innerHTML = '';

        /*append HTML elements*/
        /*The design for these checkboxes was obtained from https://codepen.io/bbodine1/pen/novBm
                Basically, the labels are designed to look like checkboxes, since the checkboxes themselves can't be styled. The check-mark (v) is actually part of the border from a div which has been rotated.*/
        content.innerHTML = `<h3>Choose Genres</h3>
        <div class="indentation">
            <div class="check">
                <input type="checkbox" value="1" id="comedy" name="comedy" />
                <label for="comedy"></label>
                <p class="label">Comedy</p>
            </div>
            <div class="check">
                <input type="checkbox" value="1" id="drama" name="drama" />
                <label for="drama"></label>
                <p class="label">Drama</p>
            </div>
            <div class="check">
                <input type="checkbox" value="1" id="horror" name="horror" />
                <label for="horror"></label>
                <p class="label">Horror</p>
            </div>
            <div class="check">
                <input type="checkbox" value="1" id="thriller" name="thriller" />
                <label for="thriller"></label>
                <p class="label">Thriller</p>
            </div>
        </div>
        <button class="indentation" onclick="moviedatabase.getprintMoviesByGenre()">Search</button>
        <div id="result">
            <div>
                <h3>Movies by Genres</h3>
            </div>
            <ul id="genres-ul"></ul>
        </div>`;
    };

    /*search by year*/
    /*sökning efter år*/
    var year = () => {
        /*obtain content*/
        var content = document.getElementById('content');

        /*Clear content*/
        content.innerHTML = '';

        /*append HTML elements*/
        content.innerHTML = `<div>
        <h3>Choose a Year</h3>
        <input id="year" type="number" placeholder="Year" max="2010" min="1890">
    </div>
    <button class="indentation" onclick="moviedatabase.getprintMoviesByYear()">Search</button>
    <div id="result"></div>`;
    };

    /*add a new movie*/
    /*lägg till en ny film*/
    var addMovies = () => {
        /*obtain content*/
        var content = document.getElementById('content');

        /*Clear content*/
        content.innerHTML = '';

        /*Add content*/
        /*Note: The design for the select and options was obtained from https://codepen.io/ericrasch/pen/zjDBx
This is to get rid of the boring, default, appearance of the select as well as to improve readability (the default is small).*/
        content.innerHTML = `<div id="result">
            <fieldset>
                <legend>New Movie</legend>
                <div>
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" required>
                </div>

                <div>
                    <label for="year">Premiere Year</label>
                    <input id="year" name="year" type="number" placeholder="Year" max="2010" min="1890" required>
                </div>
                <div>
                    <p>Genres</p>
                    <div class="check">
                        <input type="checkbox" value="1" id="comedy" name="comedy" />
                        <label for="comedy"></label>
                        <p class="label">Comedy</p>
                    </div>
                    <div class="check">
                        <input type="checkbox" value="1" id="drama" name="drama" />
                        <label for="drama"></label>
                        <p class="label">Drama</p>
                    </div>
                    <div class="check">
                        <input type="checkbox" value="1" id="horror" name="horror" />
                        <label for="horror"></label>
                        <p class="label">Horror</p>
                    </div>
                    <div class="check">
                        <input type="checkbox" value="1" id="thriller" name="thriller" />
                        <label for="thriller"></label>
                        <p class="label">Thriller</p>
                    </div>
                </div>
                <div class="select-positioner">
                    <label for="rating">Rating</label>
                    <div class="styled-select slate">
                        <select name="rating" id="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                    </div>
                </div>
                <button name="submit" id="submit" onclick="moviedatabase.getAddMovie()">Submit</button>
            </fieldset>
        </div>
        <div id="confirm"></div>`;
    };
    
    var modify = () => {
        /*obtain content*/
        var content = document.getElementById('content');

        /*Clear content*/
        content.innerHTML = '';
        
        /*Add content*/
        content.innerHTML = `<div id="result">
    <h3>Select movie</h3>
    <ul id="movie-selection-ul"></ul>

    <h3>Remove genres</h3>
    <div class="indentation">
        <div class="check">
            <input type="checkbox" value="1" id="comedy" name="comedy" />
            <label for="comedy"></label>
            <p class="label">Comedy</p>
        </div>
        <div class="check">
            <input type="checkbox" value="1" id="drama" name="drama" />
            <label for="drama"></label>
            <p class="label">Drama</p>
        </div>
        <div class="check">
            <input type="checkbox" value="1" id="horror" name="horror" />
            <label for="horror"></label>
            <p class="label">Horror</p>
        </div>
        <div class="check">
            <input type="checkbox" value="1" id="thriller" name="thriller" />
            <label for="thriller"></label>
            <p class="label">Thriller</p>
        </div>
        <button>Remove</button>
    </div>

    <h3>Add genres</h3>
    <div class="indentation">
        <div class="check">
            <input type="checkbox" value="1" id="comedy" name="comedy" />
            <label for="comedy"></label>
            <p class="label">Comedy</p>
        </div>
        <div class="check">
            <input type="checkbox" value="1" id="drama" name="drama" />
            <label for="drama"></label>
            <p class="label">Drama</p>
        </div>
        <div class="check">
            <input type="checkbox" value="1" id="horror" name="horror" />
            <label for="horror"></label>
            <p class="label">Horror</p>
        </div>
        <div class="check">
            <input type="checkbox" value="1" id="thriller" name="thriller" />
            <label for="thriller"></label>
            <p class="label">Thriller</p>
        </div>
        <button>Add</button>
    </div>

    <h3>Rate movie</h3>
    <div class="indentation">
        <div class="select-positioner">
            <label for="rating">Rating</label>
            <div class="styled-select slate">
                <select name="rating" id="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
        <button>Rate</button>
    </div>
</div>
`;
    };

    /*Adding event listeners for nav*/
    var autoAddEventListeners = () => {
        document.getElementById('print-li').addEventListener('click', index);
        document.getElementById('popular-li').addEventListener('click', popular);
        document.getElementById('genres-li').addEventListener('click', genres);
        document.getElementById('year-li').addEventListener('click', year);
        document.getElementById('add-movie-li').addEventListener('click', addMovies);
        document.getElementById('modify-li').addEventListener('click', modify);

    };
    
    return {
        autoAddEventListeners: autoAddEventListeners
    };
})();

var init = (function() {
    subpages.autoAddEventListeners();
})();