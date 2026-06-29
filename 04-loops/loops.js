// Start testing loops ===   node 04-loops/loops.js

// Зачем нужен цикл: Цикл нужен, когда надо повторить одно и то же действие много раз
//Массив из цветов 
// let colors = ["red", "green", "blue", "yellow"];
// console.log(colors[0]);
//console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

//Variable 1 Зациклить слово "Привет" 5 раз и вывести в консоль!
console.log("Привет");
console.log("Привет");
console.log("Привет");
console.log("Привет");
console.log("Привет");

//Пять одинаковых строк — глупо.
//С циклом FOR— одна команда «повтори 5 раз»:
//Variable 2 Упростили код с помощью цикла for 
for(let i = 0; i < 5; i++){
    console.log("Hello");
}

//Variable 3 ЦИКЛ FOR 10 раз с выводом номера итерации
for (let i = 0; i < 10; i++){
    console.log("Hello number " + i);
}

//Variable 4 ЦИКЛ for цветов из массива colors
//Цикл сам узнаёт длину массива. Если завтра добавишь в массив ещё 100 цветов — код не меняется,
//  .length подстроится сам. Не надо лезть и править число.

let colors = ["red", "green", "blue", "yellow"];
for (let i =0; i < colors.length; i++){
    console.log(colors[i]);
}

console.log("=============HW============");
//1 array = ["apple", "banana", "orange", "kiwi", "grape"];
//2 ЦИКЛ for для массива array который проходит по всему массиву (используй fruits.length в условии!)
//3 Внутри выводит каждый фрукт через fruits[i]
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
