// JavaScript strings are for storing and manipulating text.

// A JavaScript string is zero or more characters written inside quotes.
// String
/*
    A string is a sequence of characters used to represent text. 
    Strings can be enclosed in single or double quotes, and can be created using string literals or the String constructor. 
    They are often used to store and manipulate text in JavaScript programs
*/

// create String in JavaScript
// There are several ways to create a string in JavaScript:

// Using a string literal: You can create a string by enclosing characters in single or double quotes.
var str = "Hello World!";

// Using the String constructor: You can create a string using the String constructor and passing in the string as an argument. 
var str = new String("Hello World!");

// Using template literals: You can create a string using template literals
var name = "John";
var str = `Hello ${name}!`;

// Using String.fromCharCode() method: You can create a string from the specified sequence of Unicode values using String.fromCharCode() method
var str = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"

/*
String Literal vs String Object ?
In JavaScript, there are two ways to create strings: using a string literal or using the String constructor.

String literals are more efficient in terms of memory usage and performance. They are also easier to read and write.

String objects are less efficient in terms of memory usage and performance. They also have additional methods and properties that are not available on string literals.

*/

// String length property
/*
In JavaScript, you can use the length property to determine the number of characters in a string. The length property returns the number of characters in the string, including spaces and special characters.
*/
var str = "Hello World!";
console.log(str.length); // Output: 12



// String Methods
//  https://www.w3schools.com/js/js_string_methods.asp
