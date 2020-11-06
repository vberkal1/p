"use strict ";

const numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Какой крайний фильм смотрели?", ""),
          b = +prompt("Оценка", "");

    if(a == null || b == null || a == "" || a.length > 50){
        i--;
        continue;
    }

    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10){
    console.log("Просмотренно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30){
    console.log("Вы киноман");
} else {
    console.log("Ошибка");
}


alert(JSON.stringify(personalMovieDB, null, 3 ));
