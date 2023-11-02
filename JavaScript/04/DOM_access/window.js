/*
    In JavaScript, the window object is a global object that represents the current 
        browsing context or window in a web browser environment. 
    It serves as the top-level object that provides access to various properties, 
        methods, and objects related to the browser window and the document displayed
        within it.
*/


// console.log(window) outputs the window object, which represents the browser's global context, to the developer console for inspection and debugging purposes.
console.log(window)

// Access the document object within the window object
const title = window.document.title;

// Display an alert using the alert method
window.alert("Hello, world!");


// console.log(document) outputs the Document Object Model (DOM) of the currently loaded web page to the browser's developer console for debugging and inspection.
console.log(document)



// DOM
/*
    The Document Object Model (DOM) is a programming interface for web documents. 
    It represents the page so that programs can change the document structure, style, and content.

    In simpler terms, the DOM is a tree-like structure of objects that represent the HTML elements on a webpage.
    With JavaScript, you can manipulate these objects to modify the content and structure of a webpage dynamically.
*/


// DOM functions

// document.getElementsByTagName: This function returns a collection of elements with the specified tag name.
var element = document.getElementsByTagName("h1").value;
console.log(element);

// document.getElementById: This function returns an element by its ID attribute.
var element_id =  document.getElementById("first_id").value;
console.log(element_id);

// document.getElementsByClassName: This function returns a collection of elements with the specified class name.
var element = document.getElementsByClassName("first_class");
console.log(element);


// document.querySelector: This function returns the first element that matches the specified CSS selector.
const myElement = document.querySelector(".queryselec");


// document.querySelectorAll: This function returns all elements that match the specified CSS selector as a NodeList.
const myElements = document.querySelectorAll(".queryselec");
console.log(myElements)


console.log(document.doctype);
console.log(document.documentElement);
console.log(document.forms);
console.log(document.head);
console.log(document.images);
console.log(document.implementation);
console.log(document.lastModified);
console.log(document.links);
console.log(document.readyState);