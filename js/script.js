const numberOfFilms = + prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?',''),
//     b = prompt('На сколько оцените его?',''),
//     c = prompt('Еще один из последних просмотренных фильмов?',''),
//     d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a]= b;
// personalMovieDB.movies[c]= d;


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

// if( personalMovieDB.count < 10){
//     console.log('Просмотрено довольно мало фильмов')
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Вы классный зритель')
// } else if (personalMovieDB.count > 30){
//     console.log('Вы киноман')
// }else{
//     console.log('error')
// }



console.log(personalMovieDB)








// let result = '';
// // const length = 7;

// for (let i = 1; i < 7; i++){

//     for(let j = 0; j < i; j++){
//         for(let k = 0; k < j; k++){
//             result += '*'
//         }
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result)

// for (let i = 1; i < 3; i++){
//     console.log(`first level: ${i}`);
//     second:for(let j = 0; j < 3; j++){
//         console.log(`second level: ${j}`);
//         for(let k = 0; k < 3; k++){
//             if(k===2) continue second;
//             console.log(`third level: ${k}`);
//         }
//     }
// }

// for(let i = 5; i <=10; i++){
//     console.log(i)
// }

// for(let i = 20; i>10; i--){
//     if(i===13) break;
// console.log(i)
// }

// for(let i = 2; i <=10; i++){
//     if(!(i % 2 ===0)) continue;
//     console.log(i)
// }

// for(let i = 2; i <=10; i++){
//     if(i % 2 ===0)
//     console.log(i)
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while(i <= 16){
    
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
    
// }

// let i = 2;
// while (i++ <= 14) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         console.log(i);
//     }
//     i++;
// }

// let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }


//     function fifthTask() {
//         const arrayOfNumbers = [];
    
//         for (let i = 5; i < 11; i++) {
//             arrayOfNumbers[i - 5] = i;
//         }
    
//         console.log(arrayOfNumbers);
//         return arrayOfNumbers;
//     }
    

//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         result[i] = arr[i]
        
//     }
//     console.log(result)

//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//    for (let i = 0; i < data.length; i++){
//     if(typeof data[i]==='number'){
//         data[i] *=2;
//     }else if(typeof data[i]==='string'){
//         data[i] += ' - done'
//     }
//    }
//    console.log(data)


//    const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);

