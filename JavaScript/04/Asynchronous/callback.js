/*
Callbacks are often used to manage asynchronous operations, and t
hey allow you to specify what should happen when an asynchronous task is completed.


A callback function is a function that you pass as an argument to another function, 
and it is meant to be executed by that other function at a later point in time, 
typically after some asynchronous operation or event has completed. 

Here's a example using a callback with the setTimeout function,
which simulates an asynchronous operation:
*/

function performAsyncTask(callback) {
    setTimeout(function () {
      console.log("Async task completed.");
      callback(); // Calling the callback function
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  function callbackFunction() {
    console.log("Callback function executed.");
  }
  
  console.log("Starting the async task.");
  performAsyncTask(callbackFunction);
  console.log("Async task initiated.");
  
/*

Explanation:

1. We define an performAsyncTask function that takes a callback function as its argument. 
    Inside this function, we use setTimeout to simulate an asynchronous task that takes 2 seconds to complete.

2. The setTimeout function schedules the provided function to be executed after the specified delay (2 seconds in this case).

3. the setTimeout callback, we log "Async task completed" and then call the provided callback function using callback(). 
    This is where the callback function gets executed.

4. We define a callbackFunction, which will be passed as a callback to performAsyncTask. 
    This function logs "Callback function executed."

5. We log "Starting the async task" before calling performAsyncTask, indicating the beginning of the asynchronous operation.

6. We call performAsyncTask(callbackFunction), passing our callback function as an argument. 
  This initiates the asynchronous task.

7. We log "Async task initiated" after initiating the async task.

The execution flow goes as follows:

1. "Starting the async task" is logged to the console.
2. performAsyncTask is called, which starts the asynchronous task inside the setTimeout.
3. "Async task initiated" is logged immediately after the performAsyncTask call.
4. After approximately 2 seconds, "Async task completed" is logged, indicating the completion of the asynchronous operation.
5. The callbackFunction is called within performAsyncTask, resulting in "Callback function executed" being logged.
*/
