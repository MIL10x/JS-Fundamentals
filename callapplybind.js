//call 

// function sayHi() {
//   console.log(this);
// }

// function sayHello() {
//   console.log("hello by using call");
// }

// sayHi.call({name:Milton}); //{name:Milton} it is a this
// sayHello.call();

let a  = {
    one:1,
    checkfunction:function(){
        return this.one = this.one*100
    }
}

let b = {
    one:3
}

console.log(a.checkfunction())
console.log(a.checkfunction.call(b)) // we call a function by reusing 

console.log("______________________________________________________")
function sayHi() {
  console.log(this,...arguments);
}

sayHi.call(1,1,2,3);

function sayHiforapply() {
  console.log("Hi from apply");
  console.log(this,...arguments);
}

sayHiforapply.apply(1,[1,2,3]);

function sayHiforapply() {
  console.log("Hi from apply");
  console.log(this,...arguments);
}

sayHiforapply.apply(1,[1,2,3]);

let binds  = {
    one:1,
    sayHifrombind:function(){
      console.log("Hi from bind");
      console.log(this.one*3);
    }
}

let bindprop = {
    one:3
}


let bindcaller = binds.sayHifrombind.bind(bindprop); 
bindcaller()


// it same like function invoking


// function add(a, b) {
//   console.log(a + b);
// }

// add.apply(null, [2, 3]); 

// function greet() {
//   console.log(this.name);
// }

// const bound = greet.bind({ name: "Milton" });
// bound(); 




// important
// call → Run now ->fn.call(thisArg, arg1, arg2, ...)

// apply → Run now with array -> fn.apply(thisArg, [arg1, arg2])

// bind → Run later, forever bound -> const newFn = fn.bind(thisArg, arg1, arg2)
