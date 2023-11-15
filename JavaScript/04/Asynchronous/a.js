
async function fetchData() {
  console.log("Fetching data...");
  // Simulate a delay, e.g., fetching data from an API
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Data fetched!");
  return { data: "Some data" };
}

function processOtherData() {
  console.log("Processing other data...");
  return "Processed other data";
}

console.log("Start");

fetchData().then((result) => {
  console.log("Fetched data:", result.data);
});

console.log("Doing something else...");

const processedData = processOtherData();
console.log("Processed data:", processedData);

console.log("End");

