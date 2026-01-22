
//redeclaration


// var a = 10;
// var a = 10; //redclaring is available in var


//reassignment

// a = 20; // reassignment also done in var


// global scoped

// function c(){
//         console.log(a);  //global scope 
//     }
//     c();
    
    // console.log(a);
    
    // var a = {name:"milton",id:25};
    
    // console.log(a.name);
    // console.log(a.id);
    

 //hosting   

// console.log(a);  //it throws undefined instead of error

// var a = 10


// When JavaScript runs, it moves all var declarations to the 
// top of the current scope before executing any code.
//but it only applicable with var not in let or const 

// x = 20;   // it will show output as 20  
// var x ;             
// console.log(x);

// var y;
// console.log(y);  // undefined 
// y=10;



// var x = 5;  // x (global) = 5

// function test() {
    // var x is hoisted here with value = undefined (local x shadows global x)
    // console.log(x); // local x is undefined here
    // var x = 10;     // now local x = 10  so the above above hosted will be undefined because the function creating new environment 
    // console.log(x); // prints 10
// }

// test();       // runs the function
// console.log(x); // global x is still 5




// for (var i = 1; i <= 3; i++) {
//             console.log(i);
// }


//can be reassign
// for (var i = 1; i <= 3; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
// }



//cannot be reassign  so for loop use let instead of const
// for (const i = 1; i <= 3; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
// }


// for (var i = 1; i <= 3; i++) {
//     (function (x) {
//         setTimeout(function () {
//             console.log(x);
//         }, 1000);
//     })(i);
// }




//Immediately Invoked Function Expression (IIFE)
// (function (a) {
//             console.log(a);
// })("okay");




//drawback
//var can host any place it cannot throw error it only throw undefined it harder to debug
// it can redclare it cannot throw error 
