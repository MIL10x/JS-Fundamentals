// function f(){
//     // const a=10 // declare first and use in condition and and out it will work
//     if(true){
//         const a=20; // declare inside it will work inside of the block
//         // console.log(a)
//     }
//     console.log(a);
// }

// f()


//can modify
// const user = { name: "Alice" };
// user.name = "Bob"; // ✅ Allowed
// user.age = 25;     // ✅ Allowed

// console.log(user)
// user = { name: "Charlie" }; 

// const numbers = [1, 2, 3];
// numbers.push(4);    // ✅ Allowed
// numbers[0] = 99;    // ✅ Allowed

// console.log(numbers)

// numbers = [9, 8, 7]; 


const numbers = [1, 2, 3]; 

function mutate(arr) {
  arr.push(4);   // this is first array
  arr = [9, 9, 9];  //localy created array  this second array
  arr.push(10);
  return arr;
}

const result = mutate(numbers);

console.log(numbers); 
console.log(result);  
// function mutate(arr) {
//   arr = [9,9,9]; // allowed
// }

// Because:

// arr is a function parameter

// It is NOT declared with const

// Even if it were const arr, reassignment would fail

// Example:

// function test(const arr) {} // ❌ invalid syntax

//this will fail
// const prevents reassignment of the variable reference, NOT modification of the value it points to.
// const a = [1,2,3]
// const b = a
// a = [4,5,6]
// console.log('%c🤪 ~ file: b:\program\JavaScript\Basic\const.js:44 [] -> a : ', 'color: #d73631', a);
// console.log('%c🤪 ~ file: b:\program\JavaScript\Basic\const.js:46 [] -> b : ', 'color: #510969', b);


// let a = 20;

// function k(){

//     console.log(a);


// }
// k()

