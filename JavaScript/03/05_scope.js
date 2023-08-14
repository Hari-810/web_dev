// Scope
/*
    Scope refers to the visibility or accessibility of variables, functions, and 
    objects within different parts of a program. 
    It determines where in the program a particular variable or function can be 
    accessed and manipulated.
*/
// Global scope:
/*
    Variables declared outside of any function or block have global scope, 
    which means they can be accessed from anywhere in the program, 
    including within functions or blocks.
*/
var x = 10;
function myFunction() {
console.log(x); // 10
}

myFunction();


// Local scope:

/*
    Variables declared inside a function or block have local scope, 
    which means they can only be accessed within that function or block.
*/

/*
    When a variable is referenced in JavaScript, the interpreter searches for 
    that variable first in the local scope of the current function, 
    and then in the next outer scope, continuing until it reaches the global scope. 
    If the variable is not found in any of the scopes, a reference error is thrown.
*/
function myFunction() {
    var y = 10;
    console.log(y); // 10
    }
    
    myFunction();
    // console.log(y); // ReferenceError: y is not defined
    


// Functional scope
/*
    Functional scope is a concept in JavaScript that refers to the way scope works 
    within functions. 
    It means that variables declared inside a function are only accessible within that function and any nested functions, but not outside of it.
*/

function myFunction() {
    var a = 10;
    console.log(a); // 10
    
    function nestedFunction() {
    var b = 5;
    console.log(a + b); // 15
    }
    
    nestedFunction();
    // console.log(b); // ReferenceError: y is not defined
    }
    
myFunction();
    



// Temporal Dead Zone (TDZ)

/*
    the "Temporal Dead Zone" (TDZ) refers to the period of time before a variable 
    declared with the var or const keyword is initialized. During this period, 
    trying to access the variable will result in a ReferenceError.
*/

console.log(x); // ReferenceError: x is not defined
var x;
x = 5;
console.log(x); // 5



// Hoisting

/*
    "hoisting" refers to the behavior of variable and function declarations being moved 
    to the top of their scope. This means that a variable or function can be used before
    it is declared in the code. However, it is important to note that only the declarations 
    themselves are hoisted, not the assignments. So, if a variable is assigned a value before it is declared,
    the value will be undefined when accessed before the assignment.
*/

console.log(x); // undefined
var x = 5;
console.log(x); // 5


/*
    the declaration of the variable "x" is hoisted to the top of the scope, so the first console.
    log statement can access it, even though it is not assigned a value until later in the code. 
    The second console.log statement then outputs the assigned value of 5.
*/

/*
    It's important to remember that only the declarations are hoisted, not the assignment. 
    If you try to access the value of a variable before the assignment, it will return undefined, 
    even if the variable was declared before the point of reference.
*/

foo(); // "I am a hoisted function"
function foo(){
    console.log("I am a hoisted function")
}

/*
    function declarations are hoisted as well, so a function can be called before it is defined in the code
*/



// Rest Parameter 
/*
    The rest parameter in JavaScript allows a function to accept an indefinite number 
    of arguments as an array. 
    It is represented by three dots (…) followed by the parameter name
*/

function sum(...numbers) {
    var total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(4, 5, 6, 7)); // Output: 22

//   Assign values using rest parameter
function sum(...numbers) {
    var total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  const result = sum(1, 2, 3, 4, 5);
  console.log(result); // Output: 15