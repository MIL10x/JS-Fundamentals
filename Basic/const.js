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


// const numbers = [1, 2, 3]; 

// function mutate(arr) {
//   arr.push(4);   // this is first array
//   arr = [9, 9, 9];  //localy created array  this second array
//   arr.push(10);
//   return arr;
// }

// const result = mutate(numbers);

// console.log(numbers); 
// console.log(result);  

// let a = 20;

// function k(){

//     console.log(a);


// }
// k()