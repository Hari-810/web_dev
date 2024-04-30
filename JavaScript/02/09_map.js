// Map 

/*
    In JavaScript, a map is a built-in data structure that allows you to store and 
    retrieve key-value pairs. 
    It's similar to an object, but with some important differences:

    A map can use any type of value as its key, not just strings or symbols like objects.
    The keys in a map are ordered, so you can iterate over them in the order they were added.
    Maps have methods for getting the size, checking if a key exists, adding and removing elements, and more.
    Overall, maps provide a convenient way to manage collections of data in JavaScript.
*/

// Object Literal
var fruits = {
  'apple': 10,
  'banana': 5,
  'orange': 8
};




// Create new Map 
/*
    To create a new map in JavaScript, you can use the Map constructor function.
*/
var myMap = new Map();

// also initialize the map with key-value pairs like this:
var myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
  ]);

// add a new key-value pair to the map, you can use the set method:
myMap.set('newKey', 'newValue');

// retrieve a value from the map using its key, you can use the get method:
var value = myMap.get('key1');

// iterate over the keys and values in the map,
for (let [key, value] of myMap) {
    console.log(key, value);
  }



// add value in a map
/* 
  add a key-value pair to a JavaScript map, you can use the set() method.
*/
var myMap = new Map();
myMap.set('key', 'value');

/*
  we create a new map called myMap, and then add a key-value pair using 
  the set() method. 
  The first argument is the key, and the second argument is the value. 
*/

/* also add multiple key-value pairs at once by passing an 
    array of arrays to the Map constructo
*/
var myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
  ]);

var fruits = new Map([
    ['apple', 10],
    ['banana', 5],
    ['orange', 8]
]);


// Dynamic Population
var fruits = new Map();
fruits.set('apple', 10);
fruits.set('banana', 5);
fruits.set('orange', 8);



// Nested Maps
var inventory = new Map([
  ['fruits', new Map([
      ['apple', 10],
      ['banana', 5],
      ['orange', 8]
  ])],
  ['vegetables', new Map([
      ['carrot', 15],
      ['spinach', 20],
      ['tomato', 12]
  ])]
]);


// Using Object Methods
var fruits = {};
fruits.apple = 10;
fruits.banana = 5;
fruits.orange = 8;


// Using Object.assign()
var apple = { name: 'apple', quantity: 10 };
var banana = { name: 'banana', quantity: 5 };
var orange = { name: 'orange', quantity: 8 };

var fruits = Object.assign({}, apple, banana, orange);


// Using ES6 Object Shorthand
var apple = 10, banana = 5, orange = 8;
var fruits = { apple, banana, orange };
