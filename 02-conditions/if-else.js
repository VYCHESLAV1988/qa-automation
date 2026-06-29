//  > — больше (5 > 3 → правда)
// < — меньше (5 < 3 → ложь)
// >= — больше или равно
// <= — меньше или равно
// === — равно (три знака равно! это важно)
// !== — не равно

//Variables 1
let age = 20;
if (age >= 18){
    console.log("You are an adult");
}else{
    console.log("You are a minor");
}

//Variables 2
let password = "12345";
if (password === "12345"){
    console.log("Access granted");
}else{
    console.log("Access denied");
}

//Variables 3
let temperature = 30;
if(temperature > 25){
    console.log("it's hot outside");
}else{
    console.log("it's cold outside");
}

//Variables 4 score >= 90 / score >= 75 //score >= 50 //score < 50 !!
let score = 75;
if(score >=90){
    console.log("Excellent");
}else if(score >= 70){
    console.log("Good");
} else if(score >= 50){
    console.log("Pass");
} else{
    console.log("Fail");
}

//Variables 5 // blue "green", "yellow" and "red" and "invalid light color"
let light = "red";
if(light === "green"){
    console.log("Go");
}else if(light==="yellow"){
    console.log("Get ready");
}else if(light === red){
    console.log("Stop")
}else{
    console.log("Invalid light color");
}