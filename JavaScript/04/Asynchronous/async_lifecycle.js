// Call Stack:

/*
The call stack is a data structure that keeps track of function calls in your code.
When a function is called, it is added to the top of the call stack. 
When the function completes, it is removed from the stack. 
JavaScript is single-threaded, meaning it can only execute one function at a time, 
which makes the call stack a critical component.
*/

/*
function foo() {
    console.log("foo");
}

function bar() {
    console.log("bar");
    foo();
}

bar();
*/

/*
In this example, when bar() is called, it's added to the call stack, 
and then it calls foo(). When foo() is called, it's added to the call stack, 
and when it's done, it's removed. 
The flow is bar() added-> foo() added-> foo() removed -> bar() removed.
*/


// Callback Queue:
/*
The callback queue is a queue (FIFO - First In, First Out) that stores callback functions, 
often from asynchronous operations like setTimeout, fetch, or event listeners. 
When these asynchronous tasks complete, their callbacks are placed in the callback queue.
*/


// Event Loop:
/*
The event loop continuously checks the call stack and the callback queue. 
It's responsible for moving functions from the callback queue to the call stack when the stack is empty. 
This ensures that asynchronous tasks do not block the main thread.
*/

//Async Jobs:
/*
In some cases, like Promises, asynchronous tasks may use microtask queues to execute code more quickly. 
Microtasks are higher priority than callbacks in the callback queue and are processed before the next event 
loop cycle. 
This is where "Async Jobs" come into play.
*/

console.log("Start");

setTimeout(function () {
   console.log("Timeout 1");
}, 0);

setTimeout(function () {
   console.log("Timeout 2");
}, 0);

Promise.resolve().then(function () {
   console.log("Promise 1");
});

console.log("End");


/*

 the flow:

1. "Start" is logged to the console.

2. Two setTimeout functions are called with a delay of 0ms. These are added to the Web API.

3. A Promise is resolved using Promise.resolve(), and the associated then callback is added to the microtask queue.

4. "End" is logged to the console.

5. The call stack is empty, and the event loop checks it.

6. The two setTimeout callbacks are moved from the callback queue to the call stack and logged as "Timeout 1" and "Timeout 2".

7. The Promise callback is moved from the microtask queue to the call stack and logged as "Promise 1".


note: "Start" and "End" are logged to the console synchronously because they are regular JavaScript code.
*/