// const url = "https://jsonplaceholder.typicode.com/users";

// let data = fetch(url);
// console.log(data);

//*************************************************************************************************************************** \


/*
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
*/

//*************************************************************************************************************************** 


// loop through the records
/*
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (const record of data) {
        console.log(record);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
*/


//*************************************************************************************************************************** 


// Json Parsing

/*
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then(response => response.json())
  .then(data => {
    for (const record of data) {
      console.log(record.address.city);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

*/

//*************************************************************************************************************************** 


  // Push to html page

/*
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then(response => response.json())
  .then(data => {
    for (const record of data) {
      console.log(record);
      var name = record.name;
      var element = document.querySelector("p");
      element.innerHTML += name + "<br>";
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
*/

//  Get custom Data

/*
const url = "https://jsonplaceholder.typicode.com/posts/"+String(3)
fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

// assignement create html page to get total   


//*************************************************************************************************************************** */
// https://www.w3schools.in/restful-web-services/rest-methods 

//*************************************************************************************************************************** */


// POST Method
/*
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

//   assignment create a html form and sent data to this 


