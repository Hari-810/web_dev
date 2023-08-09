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
console.log(myArray_frutis[0]); // Output: "apple"
console.log(myArray_frutis[1]); // Output: "banana"
console.log(myArray_frutis[2]); // Output: "orange"



//***************************************************************************************************//

// Looping Array 
/*
To loop through an array in JavaScript, you can use a for loop or the forEach() method.
*/
// Using a for loop
var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Using the forEach() method:
var arr = [1, 2, 3, 4, 5];

arr.forEach(function(item) {
  console.log(item);
});


// JavaScript Array Methods
// https://www.w3schools.com/js/js_array_methods.asp