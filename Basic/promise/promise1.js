// //A Promise represents the eventual outcome (fulfillment or failure) of an asynchronous operation. It has three states: pending, fulfilled, and rejected

// //classic promise
// const promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Operation Successful");
//   } else {
//     reject("Operation Failed");
//   }
// });

// promise
//   .then(result => console.log(result))
//   .catch(error => console.error(error));



//  //using function 
// function doubleNumber(num) {
//   return new Promise(resolve => {
//     resolve(num * 2);
//   });
// }

// doubleNumber(2)
//   .then(result => doubleNumber(result))
//   .then(result => doubleNumber(result))
//   .then(final => console.log("Final Result:", final)); // 8


// //finally
// const login = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Invalid Credentials"), 1000);
// });

// login
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => console.log("Login Attempt Finished"));


// //single line
// Promise.resolve("Quick Success").then(msg => console.log(msg));
// Promise.reject("Quick Error").catch(err => console.error(err));


// //promise all

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3]).then(values => console.log("All:", values));
// // Output: All: [1, 2, 3]


//promiose race it will show the first excution
// const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
// const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

// Promise.race([slow, fast]).then(result => console.log("Winner:", result));
// // Output: Winner: Fast


// //it will show status
// const p1 = Promise.resolve("Done");
// const p2 = Promise.reject("Error");

// Promise.allSettled([p1, p2]).then(results => console.log(results));

//asyn/await
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function fetchData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Done!");
  }
}

fetchData();


//example
async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log("User:", user.name);
  } catch (err) {
    console.error("Failed to fetch user:", err);
  }
}

fetchUser();
