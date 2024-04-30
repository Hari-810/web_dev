// Object

/*
    An object is a collection of key-value pairs, where the keys are strings 
    (or symbols) and the values can be any JavaScript data type, 
    including other objects.

    Objects in JavaScript are dynamic, meaning that their properties can be added, 
    modified, or removed at runtime. 
*/

//  Object literal syntax
/*
    Object literal syntax in JavaScript is a way to create an object by directly 
    defining its properties and values within curly braces. 
    It is a shorthand notation for creating objects without using the constructor function.
*/

const myObject = { 
    name: 'John', 
    age: 30, 
    city: 'New York' 
  };
/*
  This creates an object myObject with three properties: name, age, and city, 
  each with a corresponding value. 
  Object literal syntax is a common and convenient way to create objects in 
  JavaScript.
*/


// Using the new Object() Constructor
/* You can create an object using the new Object() constructor.*/
const person = new Object();
person.name = 'John';
person.age = 30;
person.city = 'New York';


// Object.create() Method
/* You can create a new object with the specified prototype object and properties.*/
const personPrototype = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const person = Object.create(personPrototype);


// Using ES6 Classes
/* You can define objects using ES6 class syntax.*/
class Person {
  constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
  }
}

const person = new Person('John', 30, 'New York');


// Dynamic Population
/* You can create an empty object and add properties dynamically.*/
const person = {};
person.name = 'John';
person.age = 30;
person.city = 'New York';


// Using Object.assign()
/* You can create a new object by merging multiple objects together. */
const personDetails = { name: 'John' };
const additionalDetails = { age: 30, city: 'New York' };

const person = Object.assign({}, personDetails, additionalDetails);


// Using JSON.parse()
/*  You can create an object from a JSON string using JSON.parse(). */
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const person = JSON.parse(jsonString);

//***************************************************************************************************//


// Object functions : Keys(), Values(), entries()

/*
In JavaScript, object functions keys(), values(), and entries() are used to extract information from an object.

    The keys() function returns an array of all the keys within an object.
    The values() function returns an array of all the values within an object.
    The entries() function returns an array of arrays that contain key-value pairs as [key, value].
*/
var obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // output: ["a", "b", "c"]
console.log(Object.values(obj)); // output: [1, 2, 3]
console.log(Object.entries(obj)); // output: [["a", 1], ["b", 2], ["c", 3]]

// Object methods
// https://www.w3schools.com/js/js_object_methods.asp