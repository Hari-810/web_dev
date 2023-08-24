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
/*

console.log("Step 1");

setTimeout(() => {
console.log("Step 2");
}, 1000);

console.log("Step 3");

*/

// **********************************************************************
//  Promises

/*
let p = new Promise((resolve,reject) => {
    let a = 1 + 4
    if (a==2){
        resolve("Success")
    }else{
        reject("Failed")
    }
})
p.then((message) => {
    console.log(" this is " + message)
}).catch((message) => {
    console.log("this is " + message)
})

*/


/*
// Example
function watchTutorialPromise() {
let userLeft = false
let userWatchingVideo = false
return new Promise((resolve, reject) => {
    if (userLeft) {
    reject({
        name: 'User Left', 
        message: ':('
    })
    } else if (userWatchingVideo) {
    reject({
        name: 'User Watching Video',
        message: 'Video was good' 
    })
    } else {
    resolve('Thumbs up and Subscribe')
    }
})
}

watchTutorialPromise().then(message => {
console.log(message)
}).catch(error => {
console.log(error.name + ' ' + error.message)
})

*/

// ******************************************************************

// Async Await

// Define a function that returns a promise after a delay using setTimeout
function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  // An async function that simulates fetching data from a server after a delay
  async function fetchData() {
    console.log("Fetching data...");
    await delay(2000); // Wait for 2 seconds (simulating a network request)
    console.log("Data fetched!");
    return { message: "Data successfully fetched" };
  }
  
  // An async function that uses the fetched data
  async function processData() {
    try {
      const data = await fetchData(); // Wait for fetchData to complete
      console.log("Processing data...");
      await delay(1000); // Simulate some processing time
      console.log(data.message);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Call the processData function
  processData();
  console.log("Processing started in the background...");
  
  console.log("Script finished");
