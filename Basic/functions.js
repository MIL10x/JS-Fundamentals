//A function is a reusable block of code that performs a specific task
//classic function
// Constructor Example
function Person(name) {
  this.name = name;
}
const p1 = new (Person)("John");
console.log(p1.name); // ✅ John

//function default parameter
function welcome(name= "Guest") {
  console.log("Welcome, " + name);
}



//function as object
function h() {
    const increament = { a: 10 };
    return { increament };
}

console.log(h().increament.a); // Output: 10



// //callback function
// function greet(name) {
    //     return "Hello, " + name;
    // }
    
    // function processUser(name, callback) {
        //     console.log(callback(name)); // it call the greet function 
        // }
        
        // processUser("Milton", greet); // it pass the greet as the call back function
        
        // anonymous function 
        function greetUser(name, callback) {
            console.log("Welcome, " + name);
            callback();  // recall the function
        }
        
        greetUser("raj", function () { 
            console.log("This is a callback function");   // anonymous function 
        });


// //closure
// function multiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }

// const double = multiplier(2);  // it save the 2 value whenever we call double() function  it will recall the 2 value eveytime
// console.log(double(5)); // the output will be 5<--10  10<--5


// //Higher order Function

//this binding is not in arrow function
const person = {
  name: "Milton",
  greet: function () {
    console.log("Hello " + this.name); //  "Milton"
  },
};
person.greet();

const person2 = {
  name: "Milton",
  greet: () => {
    console.log("Hello " + this.name); //  `this` is undefined or window
  },
};
person2.greet(); // Hello undefined
//Arrow function does NOT bind its own this. It uses this from where it was defined.



// //map function it create new array but foreach loop not create new array it modify the current array
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function (num) {
//     return num * 2;
// });

// console.log(doubled); // [2, 4, 6, 8, 10]

// //arrow function
// const greet = (message) => (name) => `${message}, ${name}`;

// const greetHello = greet("Hello"); // closure
// console.log(greetHello("kumar")); // Hello, kumar
