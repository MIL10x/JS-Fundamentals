let obj = {
    a:"apple",
    b:"ball"
}

let lastmodified = Symbol("lastmodified")
obj[lastmodified] = new Date();

console.log(obj)
console.log(Object.keys(obj))
console.log(obj[lastmodified])

//update
const meta = Symbol("meta");

let obj = {};
obj[meta] = { count: 1 };

obj[meta].count++;   // mutation


//deleted
const secret = Symbol("secret");

let obj = {
  [secret]: "hidden"
};

delete obj[secret];

//overwritting
obj[secret] = "new value";


// CREATE (Add Symbol Property)
// obj[metaKey] = {
//   lastModified: new Date(),
//   version: 1
// };


// READ (Access Symbol Property)
// ✅ Correct way
// console.log(obj[metaKey]);


// UPDATE (Modify Symbol Value)
// Update whole value
// obj[metaKey] = {
//   lastModified: new Date(),
//   version: 2
// };

// DELETE (Remove Symbol Property)
// delete obj[metaKey];

