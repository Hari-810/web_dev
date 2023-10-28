/*
    Synchronous code execution follows a linear sequence. 
    In this mode, code is executed one step at a time, and each step must complete before the next one begins. 
    This means that if one operation takes a long time to complete (such as fetching data from a server), 
        it will block the entire execution until it's finished. Synchronous operations are easy to 
        understand and reason about, but they can lead to performance bottlenecks and unresponsive 
        user interfaces.

    example:
        console.log("Step 1");
        console.log("Step 2");
        console.log("Step 3");

*/

/*
    Asynchronous code execution allows tasks to be performed independently without waiting for 
        previous tasks to complete. This is crucial for scenarios where tasks might take 
        varying amounts of time to finish, such as making network requests or reading files. 
    JavaScript achieves asynchrony through mechanisms like callbacks, Promises, and async/await. 
    Asynchronous operations are non-blocking, meaning other tasks can continue while waiting for 
        the asynchronous operation to complete.

        
*/
/*

console.log("Step 1");

setTimeout(() => {
console.log("Step 2");
}, 1000);  //1000ms (1 second) 

console.log("Step 3");


*/

// explanation
// https://media.geeksforgeeks.org/wp-content/uploads/20210328211825/async1.png


// ****************************************************************
/*
JavaScript offers a range of asynchronous functions and mechanisms to work with asynchronous operations. 
Here are some of the primary ways to handle asynchronous tasks in JavaScript:
*/

/*
1. **Callbacks**: 
    Callback functions are one of the oldest and most common ways to handle asynchronous operations in JavaScript. 
    You pass a function as an argument to another function and call it when the asynchronous operation is completed.

   
   function fetchData(url, callback) {
     // Simulated async operation
     setTimeout(() => {
       callback("Data received");
     }, 1000);
   }
   
   fetchData("https://example.com", (data) => {
     console.log(data);
   });
*/

/*
2. **Promises**: 
    Promises provide a cleaner and more structured way to work with asynchronous code. 
    They allow you to handle success and error cases separately. 
    The `then` and `catch` methods are commonly used with promises.

 
   function fetchData(url) {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve("Data received");
       }, 1000);
     });
   }
   
   fetchData("https://example.com")
     .then((data) => {
       console.log(data);
     })
     .catch((error) => {
       console.error(error);
     });
*/
/*
3. **Async/Await**: 
    Async/await is a more recent addition to JavaScript, making asynchronous code appear more like 
    synchronous code. 
    You can use the `async` keyword to define an asynchronous function and the `await` keyword to pause 
    the execution until a promise is resolved.

   async function fetchData(url) {
     try {
       const response = await fetch(url);
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error(error);
     }
   }
   
   fetchData("https://example.com");
*/
/*
4. **Event Listeners**: 
You can use event listeners to handle asynchronous events in the browser, 
such as user interactions and network requests.

   
   document.querySelector("#myButton").addEventListener("click", () => {
     // Handle the button click asynchronously
   });
*/
/*
5. **Web Workers**: 
    Web Workers allow you to run JavaScript code in the background, 
    separate from the main thread, enabling parallel processing. 
    This can be useful for computationally intensive tasks.

  
   const worker = new Worker("worker.js");
   worker.postMessage("Data to process");
   worker.onmessage = (event) => {
     console.log(event.data);
   };
/*

These are some of the common methods for handling asynchronous operations in JavaScript. Each has its own use cases and advantages, and the choice of which one to use depends on your specific requirements and coding style.