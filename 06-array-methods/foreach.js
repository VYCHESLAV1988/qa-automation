//Starting the testing ===    node 06-array-methods/foreach.js 

// ForEach — простыми словами
// forEach берёт твой список и проходит по нему сам, показывая тебе каждый элемент по одному.
// Картинка из жизни
// Представь коробку с яблоками. Ты говоришь: «достань каждое яблоко и покажи мне».
// forEach делает именно это — достаёт элементы из массива по одному и даёт тебе сделать с ними что хочешь.

console.log("=============== Variable 1 ===============");
let apples = ["red", "green", "yellow"];
apples.forEach(function(apple){
    console.log(apple);
});

console.log("=============== Variable 2 ===============");
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

console.log("=============== Variable 3 ===============");
let names = ["Anna", "Boris", "Vika"];
names.forEach(function(name) {
  console.log("Hello, " + name);
});

console.log("=============== Variable 4 ===============");
let prices = [100, 200, 300];
prices.forEach(function(price) {
  console.log(price + 10);
});

console.log("=============== Variable 5 ===============");
let colors = ["red", "green", "blue"];
colors.forEach(function(color, index) {
  console.log(index + ": " + color);
});

console.log("=============== Variable 6 ===============");
let scores = [45, 80, 30, 95];
scores.forEach(function(score) {
  if (score >= 50) {
    console.log(score + " - passed");
  } else {
    console.log(score + " - failed");
  }
});

console.log("=============== Variable 7 ===============");
let ages = [15, 20, 17, 30];
ages.forEach(function(age) {
  console.log(age >= 18 ? "adult" : "minor");
});