/*
An operator is capable of manipulating a certain value or operand. Operators are used to perform specific mathematical and logical computations on operands. In other words, we can say that an operator operates the operands. In JavaScript operators are used for compare values, perform arithmetic operations etc. There are various operators supported by JavaScript:

There are different types of JavaScript operators:

    Arithmetic Operators
    Assignment Operators
    Comparison Operators
    String Operators
    Logical Operators
    Bitwise Operators
    Ternary Operators
    Type Operators
*/

/*
Arithmetic Operators

    +	Addition
    -	Subtraction
    *	Multiplication
    **	Exponentiation (ES2016)
    /	Division
    %	Modulus (Division Remainder)
    ++	Increment
    --	Decrement
*/

/*
Comparison Operators
    ==	equal to
    ===	equal value and equal type
    !=	not equal
    !==	not equal value or not equal type
    >	    greater than
    <	    less than
    >=	greater than or equal to
    <=	less than or equal to
    ?	    ternary operator

*/

/*
Logical Operators
    &&	logical and
    ||	logical or
    !	logical not
*/

/*
Assignment Operators

    =	    x = y	    x = y
    +=	    x += y	    x = x + y
    -=	    x -= y	    x = x - y
    *=	    x *= y	    x = x * y
    /=	    x /= y	    x = x / y
    %=	    x %= y	    x = x % y
    **=	x   **= y	    x = x ** y

*/

/*
Typeof operators 
    In JavaScript, the typeof operator is used to determine the type of a variable or expression. The typeof operator returns a string that indicates the type of the operand.
*/

console.log(typeof 1); // 'number'
console.log(typeof 'hello'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function() {}); // 'function'
console.log(typeof null); // 'object'
console.log(typeof undefined); // 'undefined'
// typeof operator returns 'undefined' for variables that have been declared but have not been assigned a value.


/*
Operator precedence
    JavaScript, operator precedence determines the order in which operations are performed in an expression. Some operators have higher precedence than others, and will be executed first.

    () Parentheses
    ** Exponentiation
    ++, -- (postfix)
    ++, -- (prefix)
    -, + (unary)
    ! (not)
    _, /, %
    +, -
    <, <=, >, >=, instanceof
    ==, !=, ===, !==
    &&
    ||
    ?: (ternary)
    =, +=, -=, _=, /=, %=, **=, ​oaicite:{"index":0,"invalid_reason":"Malformed citation <<=, >>=, >>>"}​=
    yield
    await
    ... (spread operator)
*/

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount percentage is :" + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

var result = listingPrice > sellingPrice;

console.log(typeof result);