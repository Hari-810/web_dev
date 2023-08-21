
/*
    Local Storage: Persistent storage in the browser with no expiration, used for long-term data storage.
Session Storage: Temporary storage in the browser for a single session, data is cleared when the session ends.
Cookie: Small text data stored in the browser, often used for short-term data and can have an expiration date.
*/




// local storage

var data = localStorage.getItem("data");
var element = document.querySelector("textarea");
element.value = data;
function save() {
    var element = document.querySelector("textarea");
    var value = element.value;
    localStorage.setItem("data",value);
}
+
// session storage
sessionStorage.setItem("data","session_Data");
var data = sessionStorage.getItem("data");
console.log(data);


// cookies
document.cookie = "data=CookieData";

document.cookie = "newData=CookieData; expires=" + new Date(2023, 20, 12).toUTCString();