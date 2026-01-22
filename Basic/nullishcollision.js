

//the right-hand value only if the left-hand value is null or undefined.

let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest"

let score = 0;
let finalScore = score ?? 10;
console.log(finalScore); // 0 (not 10, because 0 is not null/undefined)

let value = false ?? "Yes";
console.log(value); // false



let user = {
  name: "Milton",
  age: 0,
  settings: null,
};

let age = user.age ?? 25;          // 0 (not defaulted)
let city = user.settings?.city ?? "Chennai";
let showDetails = user.name && `Name: ${user.name}`;

console.log(age);         // 0
console.log(city);        // "Chennai"
console.log(showDetails); // "Name: Milton"

let x = 0;

console.log(x ?? 5);  
console.log(x || 5);  
console.log(x && 5);  


