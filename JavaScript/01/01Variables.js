var fullName = "Java Script";

console.log(fullName)
/* 
var:
    var is a keyword used for variable declaration in JavaScript (pre-ES6), 
    creating function-scoped variables that can be reassigned and hoisted.

*/
var courseName = "Html css js 123";

var isLoggedIn = false;  // true

var loggedCount = 34;

// console.log(loggedCount);
// console.log("loggedCount");


/* 
Variable Declaration:
    Variable declaration is the process of introducing a new variable to the JavaScript
*/

var paymentMode;   // Declaring a variable named 'paymentMode'
console.log(paymentMode);  //result ---> undefined
/* 
Variable Initialization:
    Variable initialization is the process of assigning an initial value to the declared variable*/
paymentMode = "Credit Card";   // Declaring a variable named 'paymentMode'
console.log(paymentMode);  //result ---> Credit Card



/* 
There are some rules and conventions to follow when declaring variable names in JavaScript:

Valid Characters: 
    Variable names can only contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($). They cannot start with a digit.

No Reserved Keywords: 
    Avoid using reserved keywords (e.g., var, let, const, function, if, else, etc.) as variable names, as they have special meanings in the language.

Case Sensitivity: 
    JavaScript is case-sensitive, so myVariable, MyVariable, and MYVARIABLE are considered three different variables.

Meaningful and Descriptive: 
    Choose descriptive and meaningful names that reflect the purpose of the variable. This improves code readability and maintainability.

Camel Case: 
    It's a common convention in JavaScript to use camel case for variable names, where the first word starts with a lowercase letter and subsequent words are capitalized. For example, firstName, numberOfStudents, userName, etc.

Avoid Special Characters: 
    Although some special characters are allowed, it's better to avoid using them in variable names to prevent confusion and potential issues.
*/


// Valid

/*

let age = 30;
const firstName = "John";
let isStudent = true;
let _privateVariable = "secret";
let $price = 99.99;
let camelCaseExample = "camelCase";

*/


//invalid
/* 
let 2ndPlace = 2;         // Cannot start with a digit
let var = "test";         // Reserved keyword
let first-name = "John";  // Contains a hyphen (not allowed)
let my$Variable = 10;     // Contains a special character (allowed but not recommended)

*/


/* 
In JavaScript, the following are the reserved keywords, which cannot be used as variable names or identifiers as they have special meanings in the language:

await, break, case, catch, class, const, continue, debugger, default, delete, do, else, 
enum, export, extends, false, finally, for, function, if, implements, import, in, 
instanceof, interface, let, new, null, package, private, protected, public, return, 
static, super, switch, this, throw, true, try, typeof, var, void, while, with, yield, etc...
*/

"use strict";
x = 5;
console.log(x);