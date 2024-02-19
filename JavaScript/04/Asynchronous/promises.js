/*
Promises in JavaScript are a way to handle asynchronous operations, 
such as fetching data from a server, reading a file, or waiting for a timer to complete. 

They provide a cleaner and more structured way to work with asynchronous code compared to 
traditional callback functions. 

Promises help you write more readable and maintainable code by 
allowing you to handle success and error conditions separately.

A Promise represents a value that may not be available yet but will be at some point in the future. 

It has three states:

1. Pending: Initial state when the Promise is created and hasn't resolved or rejected yet.
2. Fulfilled: When the asynchronous operation is successful, the Promise is fulfilled with a value.
3. Rejected: If an error occurs during the asynchronous operation, the Promise is rejected with a reason.

Promises have two main methods:

1. `then(onFulfilled, onRejected)`: 
    This method is used to specify what to do when the Promise is fulfilled or rejected. 
    You can provide two callback functions: `onFulfilled` for success and `onRejected` for error handling.

2. `catch(onRejected)`: 
    A shorthand for handling only the error case. It is equivalent to `then(undefined, onRejected)`.

Promise Syntax:

            const myPromise = new Promise((resolve, reject) => {
            // Asynchronous operation, e.g., fetching data, reading a file, etc.
            // If successful, call resolve with the result.
            // If there's an error, call reject with the error.
});

*/
/*
// Simulating an asynchronous operation with a setTimeout
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate a successful request
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject('Error: Unable to fetch data');
        // throw new Error('Unable to fetch data'); // Using throw
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Consuming the Promise
fetchData()
  .then((data) => {
    console.log(data); // This will run when the Promise is fulfilled
    return 'Additional data processing'; // You can return another Promise here
  })
  .then((processedData) => {
    console.log(processedData+" Done");
  })
  .catch((error) => {
    console.error(error); // This will run when the Promise is rejected
  });
*/
/*
Explanation of the flow:

1. We define a `fetchData` function that returns a Promise. 
    In this example, it simulates an asynchronous operation using `setTimeout`.

2. Inside the Promise constructor, we have two possibilities: 
    if `success` is `true`, we call `resolve` with the successful data, 
    and if `success` is `false`, we call `reject` with an error message.

3. We consume the Promise using `.then()` and `.catch()`. 
    When `fetchData()` is called, it initiates the asynchronous operation and returns the Promise.

4. The first `.then()` is executed when the Promise is fulfilled (i.e., when `resolve` is called). 
    It logs the successful data and returns a new value. 
    You can chain multiple `.then()` calls for further processing.

5. If an error occurs, the Promise is rejected (i.e., `reject` is called), 
    and the `.catch()` method handles the error, logging the error message.

Promises provide a structured way to work with asynchronous code, 
making it easier to handle both success and error conditions and allowing you to 
chain multiple asynchronous operations together.

*/

// ****************************************************************************

// Let's consider another example where we simulate fetching data from a server using a Promise:
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      // Simulate a successful response
      resolve(data);
      // Simulate an error
      // reject("Error: Data not found");
    }, 2000); // Simulating a 2-second delay
  });
  
  fetchData
    .then((data) => {
      console.log("Data fetched successfully:", data);
      return data.name;
    })
    .then((name) => {
      console.log("Name:", name);
    })
    .catch((error) => {
      console.error("Error:", error);
    });


  /*
Explanation and Flow:

1. We create a fetchData Promise, which simulates fetching data from a server. 
    Inside the Promise, we use setTimeout to simulate a 2-second delay. 
    The data is resolved successfully after the delay, but you can simulate an error by rejecting the Promise (uncomment the reject line).

2. We use .then() to handle the successful outcome. 
    The function passed to .then() will be called when the Promise resolves successfully. 
    We log the fetched data and extract the "name" property.

3. We chain another .then() to work with the extracted "name." 
    This demonstrates how you can chain multiple asynchronous operations together in a clean and readable way.

3. We use .catch() to handle any errors that occur during the Promise's execution. 
    If there's an error, it's caught and logged.

The flow of the example:

1. The fetchData Promise is created, and a simulated 2-second delay occurs.

2. After the delay, the Promise resolves successfully with the data.

3. The first .then() block is executed, logging the data and extracting the "name."

4. The second .then() block logs the extracted "name."
5. Since there are no errors, the .catch() block is skipped.
6. If the Promise were to reject (simulate an error), the error would be caught by the .catch() block.
  */

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
// scenario where you use then with only the onRejected callback

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API request that may fail
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Resolve the promise with some data
      resolve('Data successfully fetched');
    } else {
      // Reject the promise with an error message
      reject('Error: Failed to fetch data');
    }
  });
}

fetchDataFromAPI()
  .then(undefined, (error) => {
    console.error('An error occurred:', error);
  });

// Explanation and Flow
/*
The fetchDataFromAPI function returns a Promise that simulates fetching data from an API. 
It randomly resolves or rejects the promise.

We use then with only the onRejected callback to handle any errors that occur during the promise execution. 
If the promise is rejected, the provided onRejected callback is executed, and we log the error message 
to the console.

Using then with only the onRejected callback is useful when you are primarily interested in error handling 
and don't need to perform any actions when the promise is successfully resolved. 
It allows you to separate the error-handling logic from the success-handling logic, 
making your code more organized and easier to read.
*/