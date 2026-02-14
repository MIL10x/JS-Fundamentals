"use strict"
//prototype
// A prototype is an object that another object inherits properties and methods from.
// A prototype is an internal link that lets one object inherit properties and methods from another object.
// In JavaScript:

// Every object has a hidden link to another object → called [[Prototype]]

// This link is exposed as __proto__
 
// const obj1 = {
//     name:"milton",
//     set upname(getname){
//         this.name = getname 
//     },
//     get upname(){
//         return `Hey this ${this.name}`
//     }
// }

// console.log(obj1.toString()) // toString is one of the prototype 

// console.log("____________________________________________________________________")

// let obj2 = {
//     __proto__:obj1  //it is used to reffer another object
// }
// obj1.upname = "jerin"
// obj2.upname = "Milton"

// console.log(obj1.upname)
// console.log(obj2.upname)

// // creating a prototype 

// Object.prototype.grertings = function(){
//     console.log(`Hi from prototype, ${this.name}`)
// }

// obj1.grertings()

// console.log(Object.getPrototypeOf({}))



// const  a ={
//     number:0,
//     change(){
//         return this.number+1
//     }
// }

// const b={
//     number:1
// }

// console.log(a.change.call(b)) 


// const objes = {
//     a:"lemon"
// }

// console.log(objes.__proto__)  // it is not link with prototypes so directly hit with object prototypes
// console.log(objes.__proto__.__proto__) 

// const objes = {
//     a:"lemon"
// }

// const objecs = Object.create(objes) //this is use to get link with prototype

// console.log(objecs.__proto__)
// console.log(objecs.__proto__.__proto__)
// console.log(objecs.__proto__.__proto__.__proto__)



function checkfunc(){
    this.z= "nothing"
}

checkfunc.prototype.callable = function(){
console.log('%c🤪 ~ file: b:\program\JavaScript\Prototypes.js:64 [] -> callable : ', 'color: #aed582', this.z);  
}


console.log("____________________without wrapping________________")
console.log(checkfunc.__proto__)
console.log(checkfunc.__proto__.__proto__)
console.log(checkfunc.__proto__.__proto__.__proto__)


console.log("______________________with wrapping___________________________________")
const checkfunca = new checkfunc();
console.log(checkfunca.__proto__)
console.log(checkfunca.callable())
console.log(checkfunca.__proto__.__proto__)
console.log(checkfunca.__proto__.__proto__.__proto__)

// "hi".__proto__ === String.prototype // true


// array prototype

// internal call
// arr
//  → Array.prototype
//    → Object.prototype
//      → null

// const arr = [];
// console.log(arr.hasOwnProperty("map")); // false
// console.log(Array.prototype.hasOwnProperty("map")); // true

// Array.prototype.sum = function () {
//   return this.reduce((a, b) => a + b, 0);
// };

// console.log([1, 2, 3].sum()); // 6


