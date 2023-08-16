/*
    Error handling in JavaScript refers to the practice of identifying, managing, and 
        responding to errors or exceptions that may occur during the execution of a program. 
    Errors can happen for various reasons, such as incorrect data input, unexpected 
        conditions, network issues, or coding mistakes. 
    Effective error handling helps ensure that a program can gracefully handle and recover 
        from these unexpected situations, improving the reliability and stability of the 
        software.

*/
// Key concepts in error handling include

/*
    Try...Catch Statements: 
    
    JavaScript provides the try...catch statement to handle exceptions. 
    Code that might generate an error is placed inside a try block, and 
        if an error occurs, it's caught and handled in the corresponding catch block.

example:
            try {
            // Code that might throw an error
            } catch (error) {
            // Handle the error
            }

*/


/*
    Throwing Errors: You can deliberately throw errors using the throw statement. 
    This is useful for signaling exceptional conditions in your code.

    if (condition) {
    throw new Error("An error occurred.");
    }

*/


/*
    Finally Block: The finally block is used to specify code that should run regardless 
            of whether an error occurred or not. 
    It's commonly used for cleanup operations.

    try {
    // Code that might throw an error
    } catch (error) {
    // Handle the error
    } finally {
    // Code that always runs
    }

*/

// throw new Error is a statement used to manually create and throw an error object.

function calculateRectangleArea(length, width) {
    if (isNaN(length) || isNaN(width)) {
      throw new Error("Both length and width must be numbers.");
    }
  
    if (length <= 0 || width <= 0) {
      throw new Error("Both length and width must be positive numbers.");
    }
  
    return length * width;
  }
  
  try {
    const length = Number(10);
    const width = "122e";
  
    const area = calculateRectangleArea(length, width);
  
    console.log(`The area of the rectangle is: ${area}`);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Program execution has ended.");
  }
  