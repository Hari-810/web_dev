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

        console.log("Step 1");

        setTimeout(() => {
        console.log("Step 2");
        }, 1000);

        console.log("Step 3");

        explanation
        https://media.geeksforgeeks.org/wp-content/uploads/20210328211825/async1.png
*/
console.log("Step 1");

setTimeout(() => {
console.log("Step 2");
}, 1000);

console.log("Step 3");
