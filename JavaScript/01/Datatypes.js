/* 

JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/

// Numbers:
var length = 16;
var weight = 7.5;

// Strings:
var color = "Yellow";
var lastName = "Johnson";

// Booleans
var x = true;
var y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");



/*
JavaScript Types are Dynamic
    JavaScript has dynamic types. This means that the same variable can be 
    used to hold different data types:
*/

var w;       // Now x is undefined
w = 5;       // Now x is a Number
w = "John";  // Now x is a String

/*
JavaScript Strings
A string (or a text string) is a series of characters like "Java Script".

Strings are written with quotes. You can use single or double quotes:
*/

var lang = "Java Script"


/*
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
*/

// Single quote inside double quotes:
var answer1 = "It's alright";

// Single quotes inside double quotes:
var answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
var answer3 = 'He is called "Johnny"';



/*
JavaScript Numbers
    All JavaScript numbers are stored as decimal numbers (floating point).

    Numbers can be written with, or without decimals:
*/

// With decimals:
var x1 = 34.00;

// Without decimals:
var x2 = 34;


/*
Exponential Notation
    Extra large or extra small numbers can be written with scientific (exponential) notation:
*/

var y = 123e5;    // 12300000
var z = 123e-5;   // 0.00123


/*
JavaScript BigInt
    All JavaScript numbers are stored in a a 64-bit floating-point format.
*/

var b = BigInt("123456789012345678901234567890");


/*
JavaScript Booleans
    Booleans can only have two values: true or false.
    Booleans are often used in conditional testing.
*/

var x = 5;
var y = 5;
var z = 6;
console.log(x == y)       // Returns true
console.log(x == z)       // Returns false


/*
JavaScript Arrays
    JavaScript arrays are written with square brackets.

    Array items are separated by commas.

    The following code declares (creates) an array called cars, containing three items (car names):
*/

var car = ["Saab", "Volvo", "BMW"];

// Array indexes are zero-based, which means the first item is [0], second is [1], and so on.


/*
JavaScript Objects
    JavaScript objects are written with curly braces {}.

    Object properties are written as name:value pairs, separated by commas.
*/

const persons = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

/*
The typeof Operator
    You can use the JavaScript typeof operator to find the type of a JavaScript variable.

    The typeof operator returns the type of a variable or an expression:
*/
console.log(typeof "")          // Returns "string"
console.log(typeof "John")         // Returns "string"
console.log(typeof "John Doe")     // Returns "string"x 
