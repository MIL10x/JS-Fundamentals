// // object literals
// const person = {
//   name: "Milton",
//   age: 25,
// };

// //Using Constructor Functions

// function Car(model, year) {
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car("BMW", 2020);

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
// newObj.greet(); // "Hello"

// using factor as function
// function createUser(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`Hello, I'm ${name}`);
//     },
//   };
// }


// const user = createUser("Milton", 25);

//json to object
// const jsonStr = '{"name":"Milton", "age":25}';
// const obj = JSON.parse(jsonStr)

// array and function are object
// const arr = [1, 2, 3];      
// function greet() {} 


//function used as obj
// function v(){
//   this.test = "test"
// }

// let a  = new v();
// a.test2= "y";

// console.log(a.test2)


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
