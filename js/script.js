const numberOfFilms = + prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const lastViewMovie = prompt('Один из последних просмотренных фильмов?',''),
    lastMovieGrade = prompt('На сколько оцените его?',''),
    lastViewMovie2 = prompt('Еще один из последних просмотренных фильмов?',''),
    lastMovieGrade2 = prompt('На сколько оцените его?','');

personalMovieDB.movies[lastViewMovie]= lastMovieGrade;
personalMovieDB.movies[lastViewMovie2]= lastMovieGrade2;


console.log(personalMovieDB)