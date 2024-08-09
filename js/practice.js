
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


// function sayHello (name){
//     console.log('Hello ' + name);
// }
// sayHello('Eugene');


// function returnNeighboringNumbers(num) {

// return [num -1, num, num + 1];
// }
// returnNeighboringNumbers(2);


// function getMathResult(num1, num2) {
//     if(typeof num2!=='number' && num2 <= 0){
//         return num1;
//     }else{ return `${num1}---${num1**num2}`}
// }
// getMathResult(2, 2)




// function getMathResult(num1, num2) {
//     if (typeof(num2) !== 'number' || num2 <= 0) {
//         return num1;
//     }

//     let res = '';

//     for (let i = 1; i <= num2; i++) {
//         if (i === num2) {
//             res += `${num1 * i}`;
//         } else {
//             res += `${num1 * i}---`;
//         }
//     }

//     return res;
// }
// getMathResult(3, 3)



const str = 'hello world'

console.log(str.indexOf('r'))

const jjj = 'hello world'
console.log(jjj.slice( 4, 7))// вырезает с какого индекса по какой

console.log(jjj.substring(4, 7))// тоже самое, но не принимает отрицательное значение

console.log(jjj.substr(4, 3))// тоже самое, но второй аргумент это количество символов


const num = 12.3;
console.log(Math.round(num))//  округляет число

const test = '12.2px'
console.log(parseInt(test))// переводит в другую систему исчисления

console.log(parseFloat(test))// тоже самое, но с точкой