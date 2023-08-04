/*
Log Messages: These messages provide general information about the program's execution. They are often used for tracking the flow of the program and displaying important values or events.
*/
console.log("User logged in successfully.");


/*
Debug Messages: Debug messages are used for debugging and troubleshooting purposes. They help developers identify issues by displaying specific values or execution points.
*/
x = 4
console.debug("Value of x:", x);

/*
 Warning Messages: Warnings indicate potential issues that don't prevent the program from running but should be addressed. They help developers identify areas that might need attention.
*/
console.warn("Deprecated function. Use newFunction() instead.");

/*
Error Messages: Error messages indicate that something has gone wrong and may prevent the program from functioning correctly. They are crucial for identifying and fixing bugs.

*/
console.error("Division by zero error.");

/*
Info Messages: Info messages provide general information, similar to log messages, but often convey more specific details about the program's state or progress.
*/
console.info("Processing batch #5 of data.");


/*
Assertion Messages: These messages are used with assertions to validate certain conditions. If the assertion fails, an error message is displayed. 
*/
console.assert(x > 0, "x should be a positive value.");


/*
Grouping Messages: Console messages can be grouped together to organize related information. 
*/
console.group("User Profile");
console.log("Name: John Doe");
console.log("Age: 30");
console.groupEnd();


/*
Table Messages: Display data in a tabular format for better visualization.
*/
const data = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 32 }
  ];
  console.table(data);
  

/*
Time Messages: Measure the time taken for a specific operation.
*/
console.time("API Request");
// Perform API request
console.timeEnd("API Request");

/*
Count Messages: Count the number of times a message is logged. 
*/
console.count("Button Clicked");
