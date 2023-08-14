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

// create Object using new keyword

/*
  To create an object using the new keyword in JavaScript, you can define a 
  constructor function and use the new keyword to instantiate an object of that type. Here's an example:
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create a new instance of the Person object
const john = new Person('John', 30);

console.log(john); // Output: { name: 'John', age: 30 }


var person = {
    name: "John",
    age: 30,
    sayHello: function() {
      console.log("Hello!");
    },
    make: "Toyota",
    features: ["red", "2.5L", "automatic"],
    start: function() {
        console.log('Starting the car...')
      },
    drive: function(speed) {
    console.log(`Driving at ${speed} mph...`)
    },
    stop: function() {
      console.log('Stopping the car.')  
    }
  };
//   you can access the name property using dot notation
console.log(person.name); // Output: "John"
//  also you can use bracket annotation
console.log(person["name"]);
// you can call a method of an object using dot notation
person.sayHello(); // Output: "Hello!"
// Array inside an Object   
console.log(person.features[0]);
console.log(person["features"][1]); // Output: "2.5L"
// Function inside an Object
person.start(); // Output: Starting the car...
person.drive(50); // Output: Driving at 50 mph...
person.stop(); // Output: Stopping the car.


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