"use strict ";

const numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("Какой крайний фильм смотрели?", ""),
      b = +prompt("Оценка", "");

personalMovieDB.movies[a] = b;

alert(JSON.stringify(personalMovieDB, null, 3 ));
