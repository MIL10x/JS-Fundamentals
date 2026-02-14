// <-----------------this---------------->
// This keyword behave differently in strict and non strict mode
console.log(this)

function checkthis(){
    console.log(this)
}
checkthis()


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

console.log("__________________________________________________")
let d = function(){
    console.log(this)
}
d()

console.log("__________________________________________________")
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
console.log("__________________________________________________")

let obj3 = {
    a:1,
    c :()=>{
        function b(){
            
            console.log("this using inside normal function and arrow function", this)
            
        }
        b()
    }
}

obj2.b()

// normal function inside arrow function

function check(){
    let b = ()=>{
        let a = 0
        console.log(this)
    }
    b()
}
check()  // output : globally have normal function it is in strict mode show it will show output as global thing

// arrow function inside normal function 
console.log("__________________________________________________")

let check2=()=>{
    function b(){
        console.log(this)
    }
    b()
}
check2() // output : outerscope is arrow function it inherit nothing when it use in globally 

