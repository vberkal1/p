"use strict ";











let numberOfFilms;


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    writeYourGenres : function (){
        for(let i = 1; i < 4; i++){
            const question = prompt(`Ваш любимый жанр под номером ${i}`);
            if (question == "" || question == null){
                i--;
                continue;
            }
            personalMovieDB.genres.push(question);
        }
        personalMovieDB.genres.forEach(function(elem, index, arr) {
            console.log(`Любимый жанр №${index + 1} - это ${arr[index]}`);
        });
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    detectPersonalLevel : function (){
        if (personalMovieDB.count < 10){
            console.log("Просмотренно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        } else {
            console.log("Ошибка");
        }
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 2; i++) {
            const a = prompt("Какой крайний фильм смотрели?", ""),
                  b = +prompt("Оценка", "");
        
            if(a == null || b == null || a == "" || a.length > 50){
                i--;
                continue;
            }
        
            personalMovieDB.movies[a] = b;
        }
        
    },
    start : function (){
        numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");
    
        while (isNaN(numberOfFilms) || numberOfFilms == "") {
            numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");
        }
        personalMovieDB.count = numberOfFilms;
    },
    toggleVisibleMyDB : function() {
        if (!personalMovieDB.privat){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }


};

let {start, rememberMyFilms,detectPersonalLevel, showMyDB, toggleVisibleMyDB, writeYourGenres} = personalMovieDB;
// start();
// rememberMyFilms();
// detectPersonalLevel();
// toggleVisibleMyDB();
// showMyDB();
writeYourGenres();
alert(JSON.stringify(personalMovieDB, null, 3 ));
