// FUNCTION

/*
  In JavaScript, a function is a block of code that can be executed by calling it by 
  its name. Functions are a fundamental building block in JavaScript and are used to 
  encapsulate and reuse code.
*/

/*
A function is defined using the function keyword, followed by the function name, 
a set of parentheses, and a block of code within curly braces
*/
function greet() {   //Function declaration
  console.log("Hello, world!");
}

greet(); //Function call //output: "Hello, world!"

/*
To execute the code within a function, you can call the function by its name, 
followed by a set of parentheses
*/
function add(a, b) {
  console.log(a,b)
}
var result = add(3, 4);  // result = 7
console.log(result)

//  FUNCTION EXPRESSION
/*
  Function expression is a way to define a function by assigning it to a variable. 
  It is similar to a function declaration, but instead of using the function keyword,
  a function expression is assigned to a variable using the assignment operator (=).
*/
var greet_func_exp = function() {
  console.log("Hello, world! It's a Function Expression");
}

greet_func_exp(); // Output: "Hello, world! It's a Function Expression"

// Function expressions can also take parameters, which allows the function to accept input from the calling code
var add = function(a, b) {
  return a + b;
}
var result = add(3, 4);  // result = 7

// ARROW FUNCTION
/*
  An arrow function is a shorthand syntax for defining a function. 
  It is also known as a "fat arrow" function because it uses the "=>" symbol to define the function
  Arrow functions were introduced to read than traditional function expressions or declarations.
*/
let greet_arrow_fun = () => {
  return "Hello, world! It's a Arrow Function";
}
console.log(greet_arrow_fun()); // Output: "Hello, world! It's a Arrow Function"

let add_arrow_fun = (a, b) => a + b;
console.log(add_arrow_fun(3, 4));  // Output: 7

//  Function calling from other function
/*
  In JavaScript, a function can be called from within another function by simply 
  invoking the function by its name, followed by parentheses to include any 
  necessary arguments.
*/
function outerFunction() {
  console.log("This is the outer function.");
  innerFunction();
}

function innerFunction() {
  console.log("This is the inner function.");
}

outerFunction();


//  DEFAULT PARAMETER
/*
  default parameters are values that are assigned to a function's parameters 
  if no value is passed to the function when it is called. 
  These default values can be defined in the function's definition, and are used 
  when the function is called without passing any arguments for that parameter.
*/
function greet_default_para(name='John Doe') {
  console.log(`Hello, ${name}!. It's an example for default parameter`);
}

greet_default_para("hv");  // Output: "Hello, John Doe!"

// if the function is called with an argument for name, that argument will be used instead of the default value:
greet_default_para('Jane Smith');  // Output: "Hello, Jane Smith!"


// passing arguments: VALUE vs REFERENCE
/*
  when you pass an argument to a function, the function receives a reference 
  to the value, rather than a copy of the value. 
  This means that when you modify the argument within the function, 
  you are actually modifying the original value.
*/
let x = 10;

function addFive(num) {
  num += 5;
}

addFive(x);
console.log(x);  // Output: 10

/*
  when passing objects and arrays, the function gets a reference to the original 
  object or array, and any modification made within the function affects the 
  original object or array
*/
let arr = [1, 2, 3];

function addOne(arr_var) {
  arr_var.push(4);
}

addOne(arr);
console.log(arr);  // Output: [1, 2, 3, 4]

/*

In JavaScript, the following data types and constructs are passed by reference:
  Objects
  Arrays
  funcitons
  Objects created with custom classes

In JavaScript, the following data types and constructs are passed by value:
  Primitive Data Types:
  Primitives like null and undefined

  
  Copies of objects, arrays, or functions
      Using the Spread Operator (...):

                function modifyArray(arr) {
                    arr.push(4);
                }

                let myArray = [1, 2, 3];
                modifyArray([...myArray]); // Pass a copy of the array
                console.log(myArray); // Output will be [1, 2, 3], as the original 'myArray' remains unchanged.
            
      Using the slice() Method:

                function modifyArray(arr) {
                    arr.push(4);
                }

                let myArray = [1, 2, 3];
                modifyArray(myArray.slice()); // Pass a copy of the array
                console.log(myArray); // Output will be [1, 2, 3], as the original 'myArray' remains unchanged.
      
      Manually Creating a New Array     
                function modifyArray(arr) {
                    arr.push(4);
                }

                let myArray = [1, 2, 3];
                let newArray = Array.from(myArray); // Create a new array
                modifyArray(newArray); // Pass the new array
                console.log(myArray); // Output will be [1, 2, 3], as the original 'myArray' remains unchanged.

        /*

// setTimeOut
/*
  setTimeout is a JavaScript function that allows you to schedule a function 
  to be executed after a specified amount of time (in milliseconds). 
  It takes two arguments: a callback function, and the number of milliseconds to 
  wait before executing the callback function.
*/
function sayHello() {
  console.log("Hello World!");
}

setTimeout(sayHello, 2000);

// setInterval 
/*
  setInterval is a JavaScript function that allows you to schedule a function to be 
  executed repeatedly at a specified interval of time (in milliseconds). 
  It takes two arguments: a callback function, and the number of milliseconds to 
  wait between each execution of the callback function.
*/
let count = 0;

function incrementCounter() {
  count++;
  console.log(count);
}

setInterval(incrementCounter, 1000);


var str_val = "Hi there";
console.log(str_val[0]);
console.log(str_val[-1]);
console.log(str_val.length);
console.log(str_val.substring(0, 2));
console.log(str_val.substring(3));
