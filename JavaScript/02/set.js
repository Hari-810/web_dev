// Set

/*
    In JavaScript, a Set is a built-in object that allows you to store unique values 
    of any type, whether primitive values or object references. 
    The values can be added or removed from the Set, and you can also check if a value
    exists in the Set using its methods. 
    Unlike arrays, Sets are not ordered and do not have indexes.
*/

// create a Set
/* To create a set in JavaScript, you can use the built-in Set object.*/
var mySet = new Set([1, 2, 3]);


// Dynamic Population

// You can create an empty set and add elements dynamically using the add() method.
// also create an empty set and add values to it using the add() method
var mySet = new Set();
mySet.add(4);
mySet.add(5);
mySet.add(6);

// Set size
var mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet.size); // Output: 4

// Set.has function
/*
    The Set.has() function in JavaScript is a method that is used to check 
    if a particular value exists in a Set object. It returns a boolean value 
    indicating whether the specified element is present in the Set or not.
*/

var mySet = new Set();
mySet.add(1);
mySet.add('Hello');
mySet.add(true);

// Checking if a value exists in the Set
console.log(mySet.has(1));     // Output: true
console.log(mySet.has('Hello')); // Output: true
console.log(mySet.has(false));  // Output: false


// Set.delete function

/*
    Set.delete() function in JavaScript is a method used to remove an element from 
    a Set object. 
    This method returns a boolean value indicating if the element was successfully 
    deleted or not. The syntax for using this function is as follows:
*/
// Deleting a value from the Set
mySet.delete('Hello');



//  Index of a Set
/*
    In JavaScript, you can use the indexOf() method to get the index of an element in an array.
*/
var myArray = ['apple', 'banana', 'orange'];
var index = myArray.indexOf('banana');
console.log(index); // Output: 1

//  Print set values using for of loop

var mySet = new Set([1, 2, 3]);

for (let value of mySet) {
  console.log(value);
}


// Using an Array
// You can create a set from an array using the spread operator or the Set constructor directly.

// Using Spread Operator:
var fruitArray = ['Apple', 'Banana', 'Orange'];
var fruits = new Set([...fruitArray]);


// Using Set Constructor:
var fruitArray = ['Apple', 'Banana', 'Orange'];
var fruits = new Set(fruitArray);


//Using the forEach() Method
var fruits = new Set();
['Apple', 'Banana', 'Orange'].forEach(fruit => fruits.add(fruit));

// Using a String
// You can create a set from a string by treating it as an array-like object.
var fruitString = 'AppleBananaOrange';
var fruits = new Set(fruitString);

// Using the from() Method
// You can create a set from any iterable object using the Set.from() method.
var fruits = Set.from(['Apple', 'Banana', 'Orange']);


// Using the add() Method Repeatedly
// You can create a set and add elements using the add() method repeatedly.
const fruits = new Set();
fruits.add('Apple');
fruits.add('Banana');
fruits.add('Orange');
