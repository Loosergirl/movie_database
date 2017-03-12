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
    function Movie(title, year, genres, rating) {
        this.title = title;
        this.year = year;
        this.genres = genres;
        this.rating = rating;
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

    /*add a new movie to the database*/
    /*lägg till en ny film till databasen*/
    var addMovie = () => {
        /*Determine data*/
        var title = document.getElementById('title').value;
        var year = parseInt(document.getElementById('year').value);
        var genres = determineGenres();
        var rating = [parseInt(document.getElementById('rating').value)];

        /*Create the new movie*/
        var newMovie = new Movie(title, year, genres, rating);

        /*Push into database*/
        movies.push(newMovie);
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
        getAddMovie: addMovie
    }
})();

/*At first I used subpages, but then I discovered changes to the movies-array wouldn't translate to other pages. This is a fix.*/
/*Till en början använde jag undersidor, men sedan upptäckte jag att ändringar i movies-array:en inte följde med till andra sidor. Det här är en fix.*/

var subpages = (function () {
    /*Collection of original elements*/
    var printLi = document.getElementById('print-li');
    var popularLi = document.getElementById('popular-li');
    var genresLi = document.getElementById('genres-li');
    var yearLi = document.getElementById('year-li');
    var addMovieLi = document.getElementById('add-movie-li');
    var content = document.getElementById('content');

    /*function for setting multiple attributes at once*/
    var setAttributes = (el, attrs) => {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    };

    var makeCheckbox = (name, Name) => {
        var check = document.createElement('div');
        check.setAttribute("class", "check");
        var input = document.createElement('input');
        setAttributes(input, {
            "type": "checkbox",
            "value": "1",
            "id": name,
            "name": name
        });
        var label = document.createElement('label');
        label.setAttribute("for", name);
        var p = document.createElement('p');
        p.innerHTML = Name;
        p.setAttribute("class", "label");
        check.appendChild(input);
        check.appendChild(label);
        check.appendChild(p);

        return check;
    };

    /*===SUBPAGES===*/

    /*load index*/
    /*indexsidan*/
    var index = () => {
        /*clear content*/
        content.innerHTML = '';

        /*append HTML elements*/
        var result = document.createElement('div');
        result.setAttribute("id", "result");
        content.appendChild(result);

        /*function call to print all movies*/
        moviedatabase.getPrintMovies();
    };

    /*load popularity page*/
    /*popularitetssidan*/
    var popular = () => {
        /*clear content*/
        content.innerHTML = '';

        /*div for appending*/
        var popularityInfo = document.createElement('div');
        popularityInfo.id = "popularity-info";
        content.appendChild(popularityInfo);

        /*another div for appending*/
        var result = document.createElement('div');
        result.setAttribute("id", "result");
        content.appendChild(result);

        /*print data*/
        moviedatabase.getPrintPopularityInfo();
        moviedatabase.getPopularMovies();
    };

    /*load genres search*/
    /*genre-sidan*/
    var genres = () => {
        /*clear content*/
        content.innerHTML = '';

        /*Heading*/
        var heading = document.createElement('h3');
        heading.innerHTML = 'Choose Genres';
        document.body.appendChild(heading);

        /*Positioning div*/
        var div1 = document.createElement('div');
        div1.setAttribute("class", "indentation");

        /*Checkbox 1*/
        var check1 = makeCheckbox("comedy", "Comedy");

        /*Checkbox 2*/
        var check2 = makeCheckbox("drama", "Drama");

        /*Checkbox 3*/
        var check3 = makeCheckbox("horror", "Horror");

        /*Checkbox 4*/
        var check4 = makeCheckbox("thriller", "Thriller");

        /*append checkboxes*/
        content.appendChild(check1);
        content.appendChild(check2);
        content.appendChild(check3);
        content.appendChild(check4);

        /*button for selection*/
        var search = document.createElement('button');
        search.innerHTML = "Search";
        search.setAttribute("class", "indentation");
        search.addEventListener('click', moviedatabase.getprintMoviesByGenre);

        /*for appending*/
        var result = document.createElement('div');
        result.setAttribute("id", "result");
        content.appendChild(result);
    };

    /*search by year*/
    /*sökning efter år*/
    var year = () => {
        /*clear content*/
        content.innerHTML = '';

        /*creating and appending elements...*/
        var div1 = document.createElement('div');
        /*...heading*/
        var heading = document.createElement('h3');
        heading.innerHTML = "Choose a Year";
        div1.appendChild(heading);
        /*..year input*/
        var input1 = document.createElement('input');
        setAttributes(input1, {
            "type": "number",
            "id": "year",
            "placeholder": "Year",
            "max": "2100",
            "min": "1890",
            "step": 1
        });
        div1.appendChild(input1);
        /*append*/
        content.appendChild(div1);

        /*button for selection*/
        var button1 = document.createElement('button');
        button1.innerHTML = "Search";
        button1.setAttribute("class", "indentation");
        button1.addEventListener('click', moviedatabase.getprintMoviesByYear);
        content.appendChild(button1);

        /*for appending*/
        var result = document.createElement('div');
        result.setAttribute("id", "result");
        content.appendChild(result);
    };

    /*add a new movie*/
    /*lägg till en ny film*/
    var addMovies = () => {
        /*clear content*/
        content.innerHTML = '';

        /*fieldset and legend*/
        var fieldset = document.createElement('fieldset');
        var legend = document.createElement('legend');
        legend.innerHTML = "New Movie";
        fieldset.appendChild(legend);

        /*title input*/
        var div1 = document.createElement('div');
        var label1 = document.createElement('label');
        label1.innerHTML = "Title";
        label1.setAttribute("for", "title");
        var input1 = document.createElement('input');
        setAttributes(input1, {
            "type": "text",
            "name": "title",
            "id": "title",
            "placeholder": "Title"
        });
        input1.required = true;
        div1.appendChild(label1);
        div1.appendChild(input1);
        fieldset.appendChild(div1);

        /*year input*/
        var div2 = document.createElement('div');
        var label2 = document.createElement('label');
        label2.innerHTML = "Premiere Year";
        label2.setAttribute("for", "year");
        var input2 = document.createElement('input');
        setAttributes(input2, {
            "type": "number",
            "name": "year",
            "id": "year",
            "placeholder": "Year",
            "max": "2100",
            "min": "1890",
            "step": "1"
        });
        div2.appendChild(label2);
        div2.appendChild(input2);
        fieldset.appendChild(div2);

        /*checkboxes for genres*/
        var check1 = makeCheckbox("comedy", "Comedy");
        var check2 = makeCheckbox("drama", "Drama");
        var check3 = makeCheckbox("horror", "Horror");
        var check4 = makeCheckbox("thriller", "Thriller");

        /*div around checkboxes*/
        var div = document.createElement('div');

        /*append checkboxes*/
        div.appendChild(check1);
        div.appendChild(check2);
        div.appendChild(check3);
        div.appendChild(check4);
        fieldset.appendChild(div);

        /*Select input...*/
        var div3 = document.createElement('div');
        div3.setAttribute("class", "select-positioner");

        /*...label*/
        var label3 = document.createElement('label');
        label3.innerHTML = "Rating";
        label3.setAttribute("for", "rating");

        /*...style div*/
        var div4 = document.createElement('div');
        div4.setAttribute("class", "styled-select slate");

        /*...actual select*/
        var select = document.createElement('select');
        setAttributes(select, {
            "name": "rating",
            "id": "rating"
        });

        /*...select options*/
        var option1 = document.createElement('option');
        option1.setAttribute("value", "1");
        select.appendChild(option1);
        var option2 = document.createElement('option');
        option2.setAttribute("value", "2");
        select.appendChild(option2);
        var option3 = document.createElement('option');
        option3.setAttribute("value", "3");
        select.appendChild(option3);
        var option4 = document.createElement('option');
        option4.setAttribute("value", "4");
        select.appendChild(option4);
        var option5 = document.createElement('option');
        option5.setAttribute("value", "5");
        select.appendChild(option5);
        var option6 = document.createElement('option');
        option6.setAttribute("value", "6");
        select.appendChild(option6);
        var option7 = document.createElement('option');
        option7.setAttribute("value", "7");
        select.appendChild(option7);
        var option8 = document.createElement('option');
        option8.setAttribute("value", "8");
        select.appendChild(option8);
        var option9 = document.createElement('option');
        option9.setAttribute("value", "9");
        select.appendChild(option9);
        var option10 = document.createElement('option');
        option10.setAttribute("value", "10");
        select.appendChild(option10);

        /*..append together*/
        div4.appendChild(select);
        div3.appendChild(label3);
        div3.appendChild(div4);
        fieldset.appendChild(div3);

        /*Button*/
        var submit = document.createElement('button');
        submit.innerHTML = "Submit";
        setAttributes(submit, {
            "name": "submit",
            "id": "submit"
        });
        submit.addEventListener('click', moviedatabase.getAddMovie);
        fieldset.appendChild(submit);

        /*final append*/
        content.appendChild(fieldset);
    };

    /*Adding event listeners*/
    printLi.addEventListener('click', index);
    popularLi.addEventListener('click', popular);
    genresLi.addEventListener('click', genres);
    yearLi.addEventListener('click', year);
    addMovieLi.addEventListener('click', addMovies);

})();