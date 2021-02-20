/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
//task 1
let town = 'Tula';
let country = 'Russia';
let population = 1450675;
let footballStadium = true;
console.log(`My town is ${town}, it is in ${country}. Our town's population is ${population}. My last variable is ${footballStadium}, because we have Arsenal.`)
/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
//task 2
let height = 40;
let width = 70;
let result = height * width;
console.log('The area of this rectangle is ' + result);
/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/
//task 3 S = vt
let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;
let S1 = speedOfFirst * time; //the distance of the 1st
let S2 = speedOfSecond * time;//the distance of the 2nd
let S = S1 + S2;
console.log('The distance is ' + S);//the sum distance of both

/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
//task 4
const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log ("First randomNumber " + randomNumber + " меньше 20");
} else if (randomNumber > 50) {
    console.log("First randomNumber " + randomNumber + "  больше 50");
} else {
    console.log("First randomNumber " + randomNumber + "  больше 20, и меньше 50");
}
/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

//task 
const randomNumber2 = Math.floor(Math.random() * 200); //changed the range for the 5th task
switch(true) {
    case (randomNumber2 < 20):
        console.log ("Second randomNumber " + randomNumber2 + " меньше 20");
        break;
    case (randomNumber2 > 50):
        console.log ("Second randomNumber " + randomNumber2 + " больше 50");
        break;
    default :
        console.log ("Second randomNumber " + randomNumber2 + " больше 20, и меньше 50");
        break;
}

