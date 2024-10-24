// Array
/*
An array in JavaScript is a data structure that stores a collection of elements, such as numbers or strings, in a linear fashion.

Each element in an array is assigned a unique index starting from 0, which can be used to access and modify its value.

Arrays in JavaScript can dynamically grow or shrink in size and support various methods for manipulating their contents.
*/

/*
Need of Array ?
    Arrays are an essential data structure in JavaScript as they allow you to store and 
    manipulate collections of data, such as lists of numbers or strings. 
    
    They provide a way to access elements using index positions, add or remove elements, 
    sort the array, and perform various operations on the data efficiently. 
    
    Arrays are also useful for organizing and structuring code, and many programming tasks 
    involve working with arrays in some form.
*/

// create an Array

/*
 create an array in JavaScript by using square brackets []
*/

// empty array
var myArray = [];

// array with values
var anotherArray = [1, 2, 3, "hello", true];

// Array Declaration
/*
In JavaScript, an array can be declared using square brackets with comma-separated 
values inside the brackets or by calling the Array constructor
*/
// Using square brackets:
var myArray = [1, 2, 3, 4, 5];

// Using the Array constructor:
const myArray_new = new Array(1, 2, 3, 4, 5);
/*
in both cases, the values inside the array can be of any data type (such as numbers, strings, objects, etc.).
*/

// Index of Array
/*
In JavaScript, the index of an array is a numerical value used to access and manipulate its 
elements. The first element in an array has an index of 0, the second element has an index of 1,
and so on. You can access an element in an array using its index by placing the index within 
square brackets after the name of the array. 
*/

var myArray_frutis = ["apple", "banana", "orange"];
console.log(myArray_frutis); // Output: ["apple", "banana", "orange"]
console.log(myArray_frutis[0]); // Output: "apple"
console.log(myArray_frutis[1]); // Output: "banana"
console.log(myArray_frutis[2]); // Output: "orange"
console.log(myArray_frutis[3]); // Output: undefined
//***************************************************************************************************//

// Modifying Elements

// You can modify the elements of an array by assigning new values to specific indexes.

myArray_frutis[1] = "Grapes";
myArray_frutis.log(fruits); // Output: ['apple', 'Grapes', 'orange']

//***************************************************************************************************//

// Array Length

// The length property of an array returns the number of elements it contains.

console.log(myArray_frutis.length); // Output: 3

//***************************************************************************************************//

// Adding Elements

// You can add elements to the end of an array using the push() method.

myArray_frutis.push("pineapple");
myArray_frutis.log(myArray_frutis); // Output: ['apple', 'Grapes', 'orange', 'pineapple']

//***************************************************************************************************//

// Removing Elements

// You can remove elements from the end of an array using the pop() method.

let removedFruit = myArray_frutis.pop();
console.log(removedFruit); // Output: pineapple
console.log(myArray_frutis); // Output: ['apple', 'Grapes', 'orange']

// JavaScript Array Methods
// https://www.w3schools.com/js/js_array_methods.asp

//***************************************************************************************************//

// Looping Array
/*
To loop through an array in JavaScript, you can use a for loop or the forEach() method.
*/

// Using a For Loop
var fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//  Using a For...of Loop
var fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Using the forEach() Method
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

//  Using the map() Method
const fruits = ["Apple", "Banana", "Orange"];

const mappedFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log(mappedFruits);

// Using the for...in Loop
const fruits = ["Apple", "Banana", "Orange"];

for (const index in fruits) {
  console.log(fruits[index]);
}

// Using the entries() Method with for...of Loop
const fruits = ["Apple", "Banana", "Orange"];

for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}

// Using the reduce() Method
const fruits = ["Apple", "Banana", "Orange"];

fruits.reduce(function (acc, fruit) {
  console.log(fruit);
}, []);

/* WHILE LOOP */

// Using a While Loop with Index Increment
const fruits = ["Apple", "Banana", "Orange"];
var i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Using a While Loop with Index Decrement
const fruits = ["Apple", "Banana", "Orange"];
var i = fruits.length - 1;

while (i >= 0) {
  console.log(fruits[i]);
  i--;
}

// Using a While Loop with a Condition to Skip Specific Elements
const fruits = ["Apple", "Banana", "Orange", "Mango"];
var i = 0;

while (i < fruits.length) {
  if (fruits[i] === "Banana") {
    i++; // Skip 'Banana'
    continue;
  }
  console.log(fruits[i]);
  i++;
}

// Using a While Loop with Dynamic Array Modification
var fruits = ["Apple", "Banana", "Orange"];
var i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  if (fruits[i] === "Banana") {
    fruits.splice(i, 1); // Remove 'Banana' from array
  }
  i++;
}

// Using a While Loop with Break Statement
const fruits = ["Apple", "Banana", "Orange"];
var i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  if (fruits[i] === "Banana") {
    break; // Exit loop when 'Banana' is found
  }
  i++;
}

//***************************************************************************************************//

/*
comparison between Array and Array-like object in JavaScript 
JavaScript Array:
    Inherits from Array.prototype.
    Has access to built-in array methods like push(), pop(), map(), filter(), etc.
    Zero-indexed and mutable (you can change values and length).
    Can hold different types of data (numbers, strings, objects, etc.).
    Can be created using array literals: let arr = [1, 2, 3];.
    Common operations: arr.push(value), arr.pop(), arr.map(), etc.


Array-like object:
    Does not inherit from Array.prototype.
    Does not have access to array methods like push(), map(), etc.
    Has indexed properties (e.g., 0, 1, 2, etc.) and a length property.
    Can resemble an array in structure but lacks full functionality.
    Examples: arguments object in functions, NodeList from DOM methods like document.querySelectorAll().
    Can be converted to an array using Array.from() or Array.prototype.slice.call().

Key Differences:
    Methods: Arrays have built-in methods; array-like objects do not.
    Prototype: Arrays inherit from Array.prototype; array-like objects do not.
    Conversion: Array-like objects can be converted into real arrays using Array.from() or similar techniques.
*/
