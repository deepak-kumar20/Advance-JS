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
// var a = 10;
//a is in global scope means outside any funtion
//when we run empty js file it will create a global object called window in browser and global in nodejs
// console.log(window.a)
// console.log(this.a);//this also point to window object in browser


//------------X----------------------------------
//undefined vs not defined
// console.log(x);
//here x is undefined means we have declared x but not intialized it with any value so memory is allocated to x but as a placeholder it will have undefined
// var x = 5;
// console.log(x);
// console.log(y);//here y is not defined means we have not declared y anywhere in the code and no memory is allocated to y,it will throw referece error if we try to access it

//-------------------X-----------------------
//Scope Chain and lexical environment
//Lexical environment is the local memory along with the reference to its lexical environment of its parent
// function a(){
//    var x = 10;
//    b();
//    function b(){
//       console.log(x);
//    }
// }
// a();
//we can access x in b because of scope chain and lexical environment