// Fetch function for fetching data and displaying it
function fetchDataAndDisplay(url, outputId) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const output = document.getElementById(outputId);
        output.innerHTML = ''; // Clear previous content
        for (const record of data) {
          output.innerHTML += JSON.stringify(record) + '<br>';
        }
      })
      .catch(error => {
        const output = document.getElementById(outputId);
        output.innerHTML = 'Error fetching data: ' + error;
      });
  }
  
  // Fetch API examples
  
  // Example 1: Fetch and display all user records
  document.getElementById('fetchUsersButton').addEventListener('click', () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetchDataAndDisplay(url, 'usersOutput');
  });
  
  // Example 2: Fetch and display city names from user records
  document.getElementById('fetchCitiesButton').addEventListener('click', () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const output = document.getElementById('citiesOutput');
        output.innerHTML = ''; // Clear previous content
        for (const record of data) {
          output.innerHTML += record.address.city + '<br>';
        }
      })
      .catch(error => {
        const output = document.getElementById('citiesOutput');
        output.innerHTML = 'Error fetching data: ' + error;
      });
  });
  
  // Example 3: Fetch a specific post by ID
// Example 3: Fetch a specific post by ID
document.getElementById('fetchPostButton').addEventListener('click', () => {
    const postId = 3;
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const output = document.getElementById('postOutput');
  
    // Clear previous content
    output.innerHTML = '';
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        output.innerHTML = 'Post data: ' + JSON.stringify(data);
      })
      .catch(error => {
        output.innerHTML = 'Error fetching data: ' + error;
      });
  });
  
  
  // Example 4: POST data to the server
// Example 4: POST data to the server
document.getElementById('postDataForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const title = document.getElementById('titleInput').value;
    const body = document.getElementById('bodyInput').value;
  
    const output = document.getElementById('postDataOutput');
    output.innerHTML = '';
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        output.innerHTML = 'Posted data: ' + JSON.stringify(data);
      })
      .catch(error => {
        output.innerHTML = 'Error posting data: ' + error;
      });
  });
  