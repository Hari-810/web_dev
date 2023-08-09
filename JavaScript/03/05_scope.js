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
    // console.log(y); // ReferenceError: x is not defined
    


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
    