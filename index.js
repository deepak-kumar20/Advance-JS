//Hoisting in JavaScript is a behaviour in js where variable and funtion declaration are moved to the top of their scope before code execution.
//This means that you can use variables and funtions before they are declared in the code.

// getName()
// console.log(x);

// var x = 5;
// function getName() {
//    console.log("Name:Deepak kumar");
// }
// console.log(x);
// getName();

// ---------------------------X------------------
//Shortest program in js
var a = 10;
//a is in global scope means outside any funtion
//when we run empty js file it will create a global object called window in browser and global in nodejs
console.log(window.a)
console.log(this.a);//this also point to window object in browser
