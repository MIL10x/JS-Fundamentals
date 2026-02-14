//<---------------------- *****JavaScript Object Basics (Foundation)******----------------------------------->

// // object literals
// const person = {
//   name: "Milton",
//   age: 25,
// };


// object data property 

// let a  = {a:"apple",b:"ball"};
// console.log(a.a)

//object wrapper -> An object wrapper is a temporary object created by JavaScript to allow primitive values to behave like objects.
//Using Constructor Functions

// function Car(model, year) {
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car("BMW", 2020);
// console.log('%c🤪 ~ file: b:\program\JavaScript\Basic\objs.js:14 [] -> car1 : ', 'color: #f53608', car1.model);


//   Using ES6 class Keyword

// class User {
//   constructor(name,age) {
//     this.name = name,
//     this.age = age
//   }
// }

// const user1 = new User("Milton", 25);
// console.log(user1)

//using object.create
// const base = {
//   greet() {
//     console.log("Hello");
//   },
// };

// const newObj = Object.create(base);
// newObj.greet();

// using factor as function
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, I'm ${name}`);
    },
  };
}


const user = createUser("Milton", 25);
console.log('%c🤪 ~ file: b:\program\JavaScript\Basic\objs.js:55 [] -> user : ', 'color: #d9eca5', user);


//json to object
// const jsonStr = '{"name":"Milton", "age":25}';
// const obj = JSON.parse(jsonStr)

// array and function are object
// const arr = [1, 2, 3];      
// function greet() {} 


// function used as obj
// function v(){
//   this.test = "test"
// }

// let a  = new v();
// a.test2= "y";

// console.log(a.test2)
// console.log('%c🤪 ~ file: b:\program\JavaScript\Basic\objs.js:72 [] -> a : ', 'color: #154898', a);


// class Book {
//   constructor(title,author) {}
// }


// const b1 = new Book("book", "mark");

// const b2 = {
//   title: "xxx",
//   author: "yyy",
// };

// function createBook(title, author) {
//   return { title, author };
// }

// const b3 = createBook("llll", "zzzz");

// console.log(b1, b2, b3);

// const obj = {a:"one",b:"two",c:"three"}

// const a = Object.getOwnPropertyNames(obj).length

// console.log(obj.a)
// console.log(obj['b'])

// for(const [key,values] of Object.entries(obj)){
//     console.log(key)
// }

// console.log(a)

// let user = {name:"milton",age:10}

// for (let key in user) {
//   console.log( key, user[key]);
// }


// //mutation
// obj.a = "onevalue"
// delete obj.c

// console.log("after mutation",obj)

// //conversion
// const obj2 = [
//   ["1", "one"],
//   ["2", "two"]
// ];

// console.log(Object.fromEntries(obj2));
// const arr = ["1", "2"];

// const obj = Object.fromEntries(
//   arr.map(item => [item, item])
// );

// console.log(obj);

// const a = {
//     a:"apple",
//     b:"ball",
//     c:"cat"
// }

// Object.freeze(a)


// const b = {
//     a:"apple",
//     b:"ball",
//     c:"cat"
// }

// Object.seal(b)

// b.a = "amala"
// console.log(b)

// delete b.a
// console.log(b)


// object shothand

// let a = {
//     add:function(a,b){
//         return a+b
//     },
//     display(){
//         console.log("display")
//     }
// }

// add old way writtening function example add and es6 method function shorthand which mentioned in above program as display()



//in seal you can change the value but you cannot add or delete the value


//if i do the a object cannot be manipulated

 // object accessor property
// It comes with getter and setter

 let b = {
    a:"name",
    get value(){
        return `your name is ${this.a}`
    },
    set value(name){ // it only accept one parameter
        this.a = name
    }
 }

 b.value = "milton";
 console.log(b.value)

//  console.log(typeof null) //object
//  null is an object



// { a: 1 } === { a: 1 } // false

// const x = { a: 1 };
// const y = x;

// x === y // true



// let date = new Date();
// console.log(date)


//<---------------------- *****Functions as Objects******----------------------------------->
// In JavaScript, functions are objects that can be called.

// They are called callable objects.

// function test() {}
// function test2() {
//     let a =10
// }

// console.log(test.name);     
// console.log(test.length);    
// console.log(test2.name);     
// console.log(test2.length); 


// Simple Definition

// Syntax sugar means a simpler, nicer, or cleaner syntax that is added to a language without changing what it actually does under the hood.

// It makes code:

// Easier to read

// Easier to write

// Easier to maintain

// const add = (a, b) => a + b; syntax

// const add = function (a, b) {
//   return a + b;
// };  syntax sugar



// "hello".toUpperCase 

// internal done by this 
//autoboxing
// let temp = new String("hello"); // object wrapper
// temp.toUpperCase();
// temp = null; // destroyed

