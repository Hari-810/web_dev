/*
What is loop ?
    A loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code. 
*/

// For loop
/*
The for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specific number of times. The basic syntax of a for loop is as follows

allows you to iterate over a specific number of times or over an array or other iterable object.

for (initialization; condition; increment/decrement) {
  // code to be executed
}

*/
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// for...of loop
/*
The for...of loop in JavaScript is a control flow statement that allows you to iterate over the items of an array, string, or other iterable objects. The basic syntax of a for...of loop is as follows

allows you to iterate over the items of an array, string, or other iterable objects.

for (variable of iterable) {
  // code to be executed
}
*/

// let array = [1, 2, 3, 4, 5];
// for (const item of array) {
// console.log(item);
// }

// let array = [1, 2, 3, 4, 5];
// for (const item of array) {
//   if (item % 2 === 0) {
//     console.log(item);
//   }
// }

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}

// for...in loop
/*
The for...in loop in JavaScript is a control flow statement that allows you to iterate over the properties of an object. The basic syntax of a for...in loop is as follows:

allows you to iterate over the properties of an object. 

for (variable in object) {
  // code to be executed
}
*/

let obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`key: ${key} , value: ${obj[key]}`);
}

// while loop

/*
A while loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code as long as a specified condition is true. The basic syntax of a while loop is as follows:

while loop allows you to iterate until a certain condition is met.

while (condition) {
  // code to be executed
}
*/

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do...while loop
/*
A do...while loop in JavaScript is a control flow statement that is similar to a while loop, but it guarantees that the code inside the loop will be executed at least once. The basic syntax of a do...while loop is as follows

do {
  // code to be executed
} while (condition);
*/

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
