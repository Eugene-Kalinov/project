'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};

// const a = prompt('Один из последних просмотренных фильмов?',''),
//     b = prompt('На сколько оцените его?',''),
//     c = prompt('Еще один из последних просмотренных фильмов?',''),
//     d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a]= b;
// personalMovieDB.movies[c]= d;




function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
       
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a]= b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    
    }
}
rememberMyFilms();

// let i = 0;
// while(i<2){
 
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = prompt('На сколько оцените его?','');
   
       
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a]= b;
//         console.log('done');
//         i++;
//     }else{
//         console.log('error');
//         i--;
//     }
// }



function detectPersonalLevel(){
    if( personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов')
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классный зритель')
    } else if (personalMovieDB.count > 30){
        console.log('Вы киноман')
    }else{
        console.log('error')
    }
}

detectPersonalLevel();


function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB)
    }
}
 showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for(let i = 1; i <=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);
    }
    
}
 writeYourGenres();






