"use strict ";

function start(){
    numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");

    while (isNaN(numberOfFilms) || numberOfFilms == "") {
        numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");
    }
}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("Какой крайний фильм смотрели?", ""),
              b = +prompt("Оценка", "");
    
        if(a == null || b == null || a == "" || a.length > 50){
            i--;
            continue;
        }
    
        personalMovieDB.movies[a] = b;
    }
    
}
function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотренно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
        console.log("Вы киноман");
    } else {
        console.log("Ошибка");
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        const question = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i] = question;
        personalMovieDB.genres.push(question);
    }
    console.log(`Ваш массив жанров: ${personalMovieDB.genres}`);
}



let numberOfFilms;
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

rememberMyFilms();
detectPersonalLevel();
showMyDB();
writeYourGenres();
alert(JSON.stringify(personalMovieDB, null, 3 ));
