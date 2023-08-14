// JSON

/*
    JSON stands for JavaScript Object Notation. 
    It is a lightweight data interchange format that is easy for humans to 
        read and write, and easy for machines to parse and generate. 
    JSON is often used to transmit data between a server and a web application, 
        as an alternative to XML.
*/

/*
    JSON data is represented as a collection of key-value pairs, 
        similar to an object in JavaScript. 
    The keys are always strings, and the values can be any valid JSON data type, 
        including strings, numbers, objects, arrays, and booleans.
*/

/*  example of a simple JSON object:
    {
    "name": "John Smith",
    "age": 30,
    "isStudent": true,
    "favoriteFoods": ["pizza", "tacos", "sushi"]
    "college": {
                    "year":2022
                    "UG" : "BE"  
                }
    }
*/

/*
    JavaScript you can parse a JSON string into a JavaScript object using the JSON.
    parse() method
*/
var jsonString = '{"name": "John Smith", "age": 30, "isStudent": true, "favoriteFoods": ["pizza", "tacos", "sushi"]}';
var jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // output: John Smith



//  also convert a JavaScript object into a JSON string using the JSON.stringify() method
const obj = { name: "John Smith", age: 30, isStudent: true, favoriteFoods: ["pizza", "tacos", "sushi"] };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // output: {"name":"John Smith","age":30,"isStudent":true,"favoriteFoods":["pizza","tacos","sushi"]}

/*
    JSON is commonly used in JavaScript for exchanging data between a client and a server, 
        as well as for storing and retrieving data in web applications. 
    Many APIs return data in JSON format, making it easy to work with in JavaScript. 
    JSON is also used in NoSQL databases, such as MongoDB, to store data in a document-oriented format.
*/



// XML
/*
    XML stands for eXtensible Markup Language. It is a markup language that is 
        similar to HTML but is designed to store and transport data, rather than to display it. 
    XML is often used as a standard format for exchanging data between different systems and applications.

    XML data is represented as a collection of elements, similar to HTML. 
    Each element has a start tag, an end tag, and can contain attributes and nested elements. 
*/

/*

        <?xml version="1.0" encoding="UTF-8"?>
        <bookstore>
        <book category="Science Fiction">
            <title>The Hitchhiker's Guide to the Galaxy</title>
            <author>Douglas Adams</author>
            <price>9.99</price>
        </book>
        <book category="Mystery">
            <title>The Da Vinci Code</title>
            <author>Dan Brown</author>
            <price>15.99</price>
        </book>
        </bookstore>
        
*/