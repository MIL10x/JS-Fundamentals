// <-----------------this---------------->
// This keyword behave differently in strict and non strict mode

"use strict"
// console.log(this)

// function checkthis(){
// console.log(this);
// }

// checkthis()


// function checkthis2(){
// console.log(this);
// }

// window.checkthis2() 
//it will give you window object in output in browser
// window exists ONLY in the BROWSER.
// You are running this code in Node.js, not in a browser.


//this in object

let obj = {
    a:1,
    b:function(){
        console.log(this)
    }
}

obj.b()

// it will take a object as main scope 

let c =()=>{
    console.log("inside arrow function",this)
}

c()
let d = function(){
    console.log(this)
}
d()

let obj2 = {
    a:1,
    b:function(){

        let c = ()=>{
    console.log("this using inside arrow function and normal function", this)
}
c()
    }
}

obj2.b()

let obj3 = {
    a:1,
    c :()=>{
    function b(){

    console.log("this using inside normal function and arrow function", this)

}
b()
    }
}

obj3.c()

// normal function inside arrow function

function check(){
    let b = ()=>{
        let a = 0
        console.log(this)
    }
    b()
}
check()  // output : undefined ,globally have normal function it is in strict mode show it will show output as undefined

// arrow function inside normal function 

let check2=()=>{
    function b(){
        console.log(this)
    }
    b()
}
check2() // output : undefined , outerscope is arrow function it inherit nothing when it use in globally 

