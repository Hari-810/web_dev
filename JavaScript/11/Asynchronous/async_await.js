/*
Async/await is a feature that simplifies asynchronous code and makes it more readable and maintainable. 
It's used to work with asynchronous operations like fetching data from a server, reading files, or 
waiting for a timeout to complete.

Async/await:

    async keyword is used to declare a function as asynchronous. 
    An asynchronous function returns a promise implicitly.

    await keyword is used to pause the execution of an asynchronous function until 
        a promise is settled (resolved or rejected). S
It can only be used inside an async function.

/*
/*
Let's say we want to simulate fetching user data from an API with a delay and display the user's name. 
We'll create a function that fetches user data asynchronously and then displays the name.
*/

async function fetchUserData() {
    console.log("Fetching user data...");
    // Simulate a delay, e.g., fetching data from an API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("User data fetched!");
    return { name: "John Doe" };
  }
  
async function displayUserName() {
try {
    const userData = await fetchUserData();
    console.log("User name:", userData.name);
} catch (error) {
    console.error("Error:", error);
}
}

console.log("Start");
displayUserName().then(() => {
console.log("End");
});
  
/*
1. The fetchUserData function is declared as an async function. 
    It implicitly returns a promise when called.

2. Inside fetchUserData, we log "Fetching user data..." to indicate the start of the asynchronous operation.

3. We simulate a delay using await new Promise(...) to simulate data fetching. 
    This await keyword tells JavaScript to pause the execution of fetchUserData while the promise resolves. 
    It doesn't block the entire program; it allows other code to run concurrently.

4. After the delay, "User data fetched!" is logged, and the function returns an object with the user's name.

5. In the displayUserName function, we use await to call fetchUserData. 
    This means displayUserName will pause until the promise returned by fetchUserData is settled.

6. If the promise is resolved, the user's name is logged.
        In the code Promise((resolve) => setTimeout(resolve, 2000));, 
        a Promise is created with only the resolve function. 
        This is typically used for scenarios where you want to create a Promise that 
        always resolves after a certain period of time, such as simulating a delay or a timeout. 
        In such cases, you don't need to reject the Promise because you expect it to complete 
        successfully after the specified time.

7. If there is an error (e.g., if the fetch operation fails), it will be caught in the catch block.

8.The displayUserName function is called. When it's called, it doesn't block the main program execution, 
    so "Start" is logged before the async operation begins.

9. After the async operation is complete, "End" is logged, indicating the completion of the program.


*/