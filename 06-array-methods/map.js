// Starting testing ===    node 06-array-methods/map.js

// Map — простыми словами   
// map берёт твой список и проходит по нему сам, показывая тебе каждый элемент по одному.
// Картинка из жизни
// Представь коробку с яблоками. Ты говоришь: «достань каждое яблоко и покажи мне».
// map делает именно это — достаёт элементы из массива по одному и даёт тебе сделать с ними что хочешь.
// Но есть одно отличие от forEach: map создаёт новый массив из того, что ты сделал с каждым элементом.
// Картинка из жизни 2
// Представь коробку с яблоками. Ты говоришь: «достань каждое яблоко, покрась его в красный цвет и положи в новую коробку».
// map делает именно это — достаёт элементы из массива по одному, меняет их и кладёт в новый массив.

console.log("=============== Variable 1 ===============");
let prices = [100, 200, 300];
let withTax = prices.map(function(price) {
  return price * 2;
});
console.log(withTax);

console.log("=============== Variable 2 ===============");
// forEach — ничего не возвращает, просто выводит
console.log("=============== Метод forEach ===============");
prices.forEach(function(price) {
  console.log(price * 2);   // показал и забыл
});

console.log("===============  Метод MAP  ===============");

// map — возвращает, собирает новый массив
let result = prices.map(function(price) {
  return price * 2;          // отдал в новый массив
});


console.log("=============== Variable 3 ===============");
let names = ["anna", "boris", "vika"];
let greetings = names.map(function(name) {
  return "Hello, " + name;
});
console.log(greetings);

console.log("=============== HW ===============");

//В map.js напиши сам:
//Массив чисел numbers = [1, 2, 3, 4]
//Через map сделай новый массив, где каждое число умножено на 10
//Выведи новый массив

let numbers = [1, 2, 3, 4];
let multipliedNumbers = numbers.map(function(number) {
    return number * 10;
});
console.log(multipliedNumbers);