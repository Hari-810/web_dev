/*
    In JavaScript, OOPs is based on the concept of prototypes, 
    which is different from class-based OOPs in other languages like Java and C++
*/

/*
    In JavaScript, every object has a prototype object, which acts as a template for the object. 
    When a property or method is accessed on an object, JavaScript first looks for that property or 
        method on the object itself. If it's not found, JavaScript looks for it on the object's prototype. 
    If it's still not found, JavaScript continues up the prototype chain until it reaches the Object.
    prototype, which is the root of the prototype chain.
*/

// To create an object in JavaScript, we can use either the object literal notation or the Object() constructor
const person = {
    name: 'Alice',
    age: 30,
    gender: 'female',
    walk() {
      console.log(`${this.name} is walking.`);
    },
    talk() {
      console.log(`${this.name} is talking.`);
    }
  };

  
/*
    We can also create objects using constructor functions, 
    which act as blueprints for creating objects with shared properties and methods.
*/

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  Person.prototype.walk = function() {
    console.log(`${this.name} is walking.`);
  };
  
  Person.prototype.talk = function() {
    console.log(`${this.name} is talking.`);
  };
  
const person1 = new Person('Alice', 30, 'female');
const person2 = new Person('Bob', 40, 'male');

person1.walk(); // logs "Alice is walking."
person2.talk(); // logs "Bob is talking."