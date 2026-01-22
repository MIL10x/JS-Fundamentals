function argument(){
    console.log([...arguments])
}
argument(1,2,3,4)

function argument2(){
    console.log(arguments[1])
}
argument2(1,2,3,4)
function argument2(num0,num1){
    console.log(num0+num1+arguments[1])
}

argument2(1,2,3,4)

function argument3(num0,num1){
    console.log(num0+num1+arguments[1])
}
argument3(1,2,3,4)



///IMPORTANT CONCEPT: FUNCTION HOISTING
// JavaScript hoists function declarations to the top

// Your code is treated like this internally:
// function argument() {
//   console.log([...arguments])
// }

// function argument2(num0, num1) {
//   console.log(num0 + num1 + arguments[1])
// }

// function argument3(num0, num1) {
//   console.log(num0 + num1 + arguments[1])
// }
// The first argument2() is lost.
// ✅ Short Answer

// 👉 In JavaScript, function declarations with the same name get OVERRIDDEN
// 👉 The last function declaration wins

// Available only in normal functions

// ❌ Not available in arrow functions

// arguments is NOT a real array
// It is an array-like object