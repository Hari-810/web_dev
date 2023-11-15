function dropdown(){
    var element = document.querySelector("select").value;
    console.log(element)
}


function user_input(){
    var element = document.querySelector("#userInput").value;
    console.log(element)
}


function hover_on(){
    var element = document.querySelector("#hover_on");
    console.log("Hover on element called")
    element.style.backgroundColor = "yellowgreen";
}


function hover_leave(){
    console.log("Hover leave on element called");
    var element = document.querySelector("#hover_on");
    element.style.backgroundColor = "red";
}



// Time Events

// setTimeout
function show(){
        console.log("set time out function called");
}

function time(){
    setTimeout(() => show(),10000)
}


// setInterval
var t = 0;
var interval;
function running() {
    t = t + 1;
    var element = document.getElementById("timer");
    element.innerText = t;
}
const startTimer = () => {
    console.log("timer started");
    interval = setInterval(() => {running();}, 1000);

}

// clearInterval
const stopTimer = ()=>{
    clearInterval(interval);
    console.log("timer stopped")
}