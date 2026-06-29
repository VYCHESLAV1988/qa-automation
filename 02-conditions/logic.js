// run for testing logic conditions ===  node 02-conditions/logic.js
//Login and password admin / Admin 
// VARIABLES  &&
let username = "admin";
let password = "12345";
if (username === "Admin" && password === "12345"){
    console.log("Login successful");
}else{
    console.log("Login failed");
}

// VARIABLES  ||
let isAdmin = false;
let isOwner = true;
if (isAdmin === true || isOwner === true) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}