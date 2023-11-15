
/*
Local Storage: Persistent storage in the browser with no expiration, used for long-term data storage.
Session Storage: Temporary storage in the browser for a single session, data is cleared when the session ends.
Cookie: Small text data stored in the browser, often used for short-term data and can have an expiration date.
*/




// local storage

// var data = localStorage.getItem("data");

function save() {
    var element = document.querySelector("textarea");
    var value = element.value;
    localStorage.setItem("data",value);
    sessionStorage.setItem("data",value);
    document.cookie = "data=" + value;

}
+
// session storage
sessionStorage.setItem("data_01","session_Data");
var data = sessionStorage.getItem("data_01");
console.log(data);


// cookies
document.cookie = "data=CookieData";

document.cookie = "newData=CookieData; expires=" + new Date(2023, 20, 12).toUTCString();


/*
Local Storage, Session Storage, and Cookies are three different methods for storing data in a web browser, and they each have their own use cases based on factors like data persistence and scope. Here's when and where you might use each storage method:

1. **Local Storage:**
   - **Data Persistence:** Data stored in local storage persists even after the browser is closed and reopened. It remains until explicitly removed or cleared.
   - **Scope:** Data is accessible across browser tabs and windows under the same origin (domain).
   - **Use Cases:** Local storage is useful for storing data that needs to be retained across sessions and can be shared among different tabs or pages of your website. It's often used for user preferences, saved settings, or other non-sensitive data that should persist between visits.

2. **Session Storage:**
   - **Data Persistence:** Data stored in session storage lasts for the duration of the page session. It is lost when the session ends, typically when the browser is closed or the tab is closed.
   - **Scope:** Data is limited to a single tab or window. It is not accessible from other tabs or windows.
   - **Use Cases:** Session storage is suitable for storing temporary data that is only needed for a specific user session. This could include shopping cart contents, temporary form data, or other data that should not persist beyond the current session.

3. **Cookies:**
   - **Data Persistence:** Cookies can have varying lifetimes. They can be set to expire at a specific time, at the end of a session, or be kept indefinitely.
   - **Scope:** Cookies are accessible across browser tabs and windows under the same origin (domain) like local storage.
   - **Use Cases:** Cookies are typically used for storing small amounts of data that need to be sent to the server with each HTTP request. They are commonly used for user authentication tokens, tracking user behavior, and for managing user preferences, such as language or theme settings.

In summary:

- Use **Local Storage** for data that should persist across browser sessions and is shared across tabs or pages.
- Use **Session Storage** for data that should only last for the current session and is isolated to a single tab or window.
- Use **Cookies** for data that needs to be sent with every HTTP request, or for situations where you need to support older browser environments. However, be mindful of their size and the potential security implications.

Your choice of storage method should depend on the specific requirements of your application and the level of persistence and accessibility needed for the data you are working with.

*/