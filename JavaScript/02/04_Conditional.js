/*
Conditional statements:
  A conditional statement in JavaScript allows you to execute different code based on whether a certain condition is true or false. This is useful for controlling the flow of your program and making decisions.
*/

// example of a simple conditional statement 
var x = -1;
if (x > 0) {
  console.log("x is positive");
}


// else statements to specify what code should be executed if the condition is not true
var x = 5;
if (x > 0) {
  console.log("x is positive");
} else {
  console.log("x is not positive");
}



var x = 5;
if (x > 10) {  
  console.log("x is greater than 10");
} else if (x > 0) {
  console.log("x is greater than 0 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 0");
}


/*
Grouping multiple conditions using logical operator && and || 

The logical operators && and || can be used to group multiple conditions together and evaluate them as a single Boolean expression.

*/

/*
The && operator (logical AND) returns true only if both conditions are true. If either condition is false, the expression will evaluate to false.
*/
if (x > 0 && x < 10) {
  console.log('x is between 0 and 10');
}


/*
The || operator (logical OR) returns true if at least one of the conditions is true. If both conditions are false, the expression will evaluate to false
*/
if (x < 0 || x > 10) {
  console.log('x is not between 0 and 10');
}









// Scenario

var temperature;

//TODO: GO to google and get the data

temperature = 49;

// var result = temperature < 20;
// console.log(result);

if (temperature < 20) {
  console.log("it's very cold outside");
}

if (temperature < 30) {
  console.log("It's moderate outside");
} else {
  console.log("It's really HOT outside");
}
