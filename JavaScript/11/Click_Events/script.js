// document.addEventListener("DOMContentLoaded", () => {
//     var element = document.querySelector("h1");
//     console.log(element);
    
//     element.addEventListener("click", () => {
//       console.log("Clicked");
//       // console.log("Clicked_2");
//       // location.href = "//google.com";
//     });
//   });



/* ******************************************** */


// var element = document.getElementById("clickButton");
// element.onclick = () => {
//   console.log("on click called");
// };

// var element = document.getElementById("clickButton");
// element.onclick = () => {
//   console.log("on click called double");
// };


/* ******************************************** */

// var element = document.querySelector("h3");
// function change(){
//     element.style.fontSize = "50px";
// }

/* ******************************************** */
// var element = document.querySelector("#action");
// function changeclr(){
//     element.style.color = "yellow";
// }

// function changeBgclr(){
//     element.style.backgroundColor = "red";
// }

/* ******************************************** */


var rem_ele = document.getElementById("remove");
var element = document.getElementById("element");

rem_ele.addEventListener("click", function() {
  change("bg"); // Change background color
  change("color"); // Change text color
});

function change(e) {
  console.log(e);
  if (e === "bg") {
    element.style.backgroundColor = "red";
  } else if (e === "color") {
    element.style.color = "yellow";
  }
}


/*
     list of some commonly used JavaScript event listeners:

click: Fires when a mouse click event occurs on an element.
dblclick: Fires when a mouse double-click event occurs on an element.
mouseenter: Fires when the mouse enters an element's boundary.
mouseleave: Fires when the mouse leaves an element's boundary.
mousemove: Fires when the mouse pointer moves over an element.
mousedown: Fires when a mouse button is pressed down on an element.
mouseup: Fires when a mouse button is released on an element.
keydown: Fires when a keyboard key is pressed down.
keyup: Fires when a keyboard key is released.
keypress: Fires when a key is pressed and released.
input: Fires when the value of an input element changes.
change: Fires when the value of a form element (like a <select> or <input type="checkbox">) changes.
submit: Fires when a form is submitted.
focus: Fires when an element gains focus (e.g., through clicking or tabbing).
blur: Fires when an element loses focus.
load: Fires when a resource (e.g., an image or a page) finishes loading.
unload: Fires when a resource is about to be unloaded (e.g., when the page is being closed).
resize: Fires when the window or an element is resized.
scroll: Fires when the content of an element is scrolled.
contextmenu: Fires when the context menu (right-click menu) is triggered.
touchstart: Fires when a touch event starts on a touch-enabled device.
touchmove: Fires when a touch point is moved during a touch event.
touchend: Fires when a touch event ends on a touch-enabled device.

*/