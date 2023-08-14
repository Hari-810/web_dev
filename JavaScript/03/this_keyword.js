// This key word

/*
    The keyword "this" in JavaScript refers to the current execution context, 
    which can vary depending on how a function is called.

    It has several uses in JavaScript
*/

// Referring to an object's properties or methods:

var person = {
    name: "John",
    age: 30,
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  person.sayHello(); // logs "Hello, my name is John"


// Setting the value of "this" explicitly using 
/*
    Function.prototype.call(), 
    Function.prototype.apply()
    Function.prototype.bind()z
*/
function greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  const person1 = { name: "John" };
  const person2 = { name: "Jane" };
  
  greet.call(person1); // logs "Hello, my name is John"
  greet.apply(person2); // logs "Hello, my name is Jane"
  
  const greetJohn = greet.bind(person1);
  greetJohn(); // logs "Hello, my name is John"


// Referring to the constructor function when creating new objects with the "new" keyword

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const john = new Person("John", 30);
  console.log(john.name); // logs "John"








                                            

