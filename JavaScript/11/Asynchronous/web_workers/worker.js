self.onmessage = function (event) {
    const messageFromMain = event.data;
    console.log('Worker received: ' + messageFromMain);
    
    // Simulate a time-consuming task
    const result = performHeavyTask();
    
    // Send the result back to the main thread
    self.postMessage(result);
  };
  
  function performHeavyTask() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }

  /*
In this example:

1. The main thread (HTML file) creates a button to start the Web Worker and displays the result.

2. When the button is clicked, the main thread sends a message to the Web Worker.

3. The Web Worker (worker.js) receives the message, performs a time-consuming calculation (in this case, a simple sum), and sends the result back to the main thread.

4. The result is displayed on the web page, showing how Web Workers can perform tasks in the background without blocking the main thread.

  */