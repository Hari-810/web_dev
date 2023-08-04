const uid = "abc123";
/* 
const:
    const is a keyword used for variable declaration in JavaScript (ES6 and beyond), 
    creating block-scoped variables that cannot be reassigned once initialized.
*/

var fullName = "Javascript";
var email = "js@gmail.dev";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullname = prompt("Enter your name");

console.log(uid);
console.log("Full Name is: ", fullName);
console.log(email);

console.log(`
    With Unique ID: ${uid}
    User is : ${fullName}
    and his email is: ${email}
    and uses the password: ${password}

`);
/* 
${var} is a JavaScript template literal syntax used for string interpolation 
to embed the value of the variable var within a string.
*/