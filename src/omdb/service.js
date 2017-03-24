angular.module('omdb', [])
    .factory('omdbApi', function ($http, $q) {
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/';

        service.search = function (query) {
            var deferred = $q.defer();
            $http.get(baseUrl + 't=' + encodeURIComponent(query))
                .success(function (data) {
                    deferred.resolve(data);
                });
                return deferred.promise;
        }

        service.find = function (id) {
            return {
                "Title": "Star Wars: Episode IV - A New Hope",
                "Year": "1977",
                "Rated": "PG",
                "Released": "25 May 1977",
                "Runtime": "121 min",
                "Genre": "Action, Adventure, Fantasy",
                "Director": "George Lucas",
                "Writer": "George Lucas",
                "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
                "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
                "Language": "English",
                "Country": "USA",
                "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
                "Metascore": "92",
                "imdbRating": "8.7",
                "imdbVotes": "963,318",
                "imdbID": "tt0076759",
                "Type": "movie",
                "Response": "True"
            };
        }

        return service;
    });