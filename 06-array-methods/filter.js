//Start testing ===    node 06-array-methods/filter.js

// Filter — простыми словами
// filter берёт твой список и проходит по нему сам, показывая тебе каждый элемент по одному.
// Картинка из жизни
// Представь коробку с яблоками. Ты говоришь: «достань каждое яблоко и покажи мне те, которые спелые».
// filter делает именно это — достаёт элементы из массива по одному и проверяет, соответствует ли они условию.
// Если да — добавляет в новый массив, если нет — пропускает.

console.log("==============================");
console.log("=          Variable 1        =")
console.log("==============================")
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

console.log("==============================");
console.log("=          Variable 2        =")
console.log("==============================")
let products = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "orange", price: 300 }
];
let expensiveProducts = products.filter(function(product) {
  return product.price > 150;
});
console.log(expensiveProducts);

console.log("==============================");
console.log("=          Variable 3        =")
console.log("==============================")
let numbers2 = [10, 25, 3, 40, 7];
let big = numbers2.filter(function(number) {
  return number > 10;
});
console.log(big);



console.log("==============================");
console.log("=          Variable 4        =")
console.log("==============================")

// Сравни три метода
let nums = [1, 2, 3, 4];

// forEach — просто вывести каждый
console.log("=============== Метод forEach  ===============");
nums.forEach(function(n) { console.log(n); });
// 1 2 3 4 (построчно, массива нет)
console.log("=============== Метод MAP  ===============");
// map — переделать каждый → новый массив той же длины
let doubled = nums.map(function(n) { return n * 2; });
console.log(doubled); // [2, 4, 6, 8]

console.log("=============== Метод FILTER ===============");
// filter — отобрать → новый массив короче
let even = nums.filter(function(n) { return n > 2; });
console.log(even); // [3, 4]

console.log("==============================");
console.log("=            HW              =")
console.log("==============================")

//В filter.js напиши сам:
// Массив scores = [45, 80, 30, 95, 60]
// Через filter оставь только те, что >= 50 (прошедшие)
// Выведи новый массив
let score = [45, 80, 30, 95, 60];
let passedScores = score.filter(function(s){
    return s >= 50;
}); 
console.log(passedScores);
