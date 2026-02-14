// A callback function is a function passed as an argument to another function, which is called (executed) later, usually after some task is completed.
// functioncall() not equal to ()=>{}
// callback is equal to () => {}

// ()=>{} this we called as callback or handler
//  the difference between functioncall() and Callback is the parenthesis "()"

// function a(){
//     console.log("function call immediatly")
// }

// a() //function call

// function b(){
//  console.log("function  call from callback")
// }
// b // basically it will not call because it specially use for asyn operation,it should trigger by some other function


// callback used in some method filter,map,

function cbpassthoughfunction(cb){
setTimeout(()=>{
    cb()
},2000)
}

function checkcb(){
    console.log("callback is working woohoo!!")
}

cbpassthoughfunction(()=>checkcb())


//
// function a(cb){
//     setTimeout(()=>{
//         console.log("task 1")
//         cb()
//     },3000)
// }

// function b(cb){
//      setTimeout(()=>{
//         console.log("task 2")
//         cb()
//     },5000)
// }
// function c(){
//      setTimeout(()=>{
//         console.log("task 3")
//     },2000)
// }

// a(()=>b(()=>c()))

// overcome code given below 
// function a(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("task 1");
//       resolve();
//     }, 3000);
//   });
// }

// function b(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("task 2");
//       resolve();
//     }, 5000);
//   });
// }

// function c(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("task 3");
//       resolve();
//     }, 2000);
//   });
// }

// async function callall(){
//   await a();
//   await b();
//   await c();
// }

// callall();


// it works only based on promises