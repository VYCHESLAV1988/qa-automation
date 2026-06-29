//For Startin testing arrays ===  node 03-arrays/arrays.js
//Массив — это одна переменная, в которой лежит много значений по порядку. 
// Пишется в квадратных скобках [ ], элементы через запятую:let fruits = ["apple", "banana", "orange"];
// fruits[0] → "apple" (первый, но индекс 0!)
// fruits[1] → "banana" (второй, индекс 1)
// fruits[2] → "orange" (третий, индекс 2)
//Длина массива Сколько элементов в массиве — узнаёшь через .length:

//Variable 1
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);   // apple
console.log(fruits[1]);   // banana
console.log(fruits[2]);   // orange
console.log(fruits.length);  // 3


//Variable 2
let colors = ["red", "green", "blue", "yellow"];
console.log(colors[0]); // red
console.log(colors[1]); // green
console.log(colors[2]); // blue
console.log(colors[3]); // yellow   
console.log(colors.length); // 4
console.log(colors[colors.length - 1]); // yellow

//Как менять массив: push — добавить в конец (толкнуть внутрь)
//Variable 1
let cart = ["apple", "banana", "orange"];
cart.push("orange");
console.log(cart); // ["apple", "banana", "orange", "orange"]

//Variable 2  pop — убрать с конца (вытолкнуть наружу)
let cart2 = ["apple", "banana", "orange"];
console.log(cart2);   // до:    [ 'apple', 'banana', 'orange' ]
cart2.pop();
console.log(cart2);   // после: [ 'apple', 'banana' ]