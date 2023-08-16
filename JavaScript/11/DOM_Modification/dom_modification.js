
// Inner text
var value = document.getElementsByClassName("inner_text");
console.log(value)
if (value.length > 0) {
    value[0].innerText = "Inner Text";
    console.log(value);
} else {
    console.log("No elements with class 'org_text' found.");
}



// Innerhtml
var value = document.getElementsByClassName("inner_html");
value[0].innerHTML = "Inner HTML";


// calc

num1 = Number(document.getElementById("one").innerText);

num2 = Number(document.getElementById("two").innerText);

opr = document.getElementById("operation").innerText;

const res = (a, b, opr) => {
    if (opr === "Addition") return a + b;
    if (opr === "Subtraction") return a - b;
    if (opr === "Multiplication") return a * b;
    return a / b;
};




var result = res(num1,num2,opr);
document.getElementById(
    "result"
).innerHTML = `<strong> Result was ${result} </strong>`;


