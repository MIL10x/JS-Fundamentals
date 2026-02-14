// console.log(a); //it will throw an error 

//reassign;
// let a =10;
// a=20;


// console.log(a);

//throw error cannot do reassign in const
// for(const a=0;a<=2;a++){
// console.log(a);
// }


// reassign can do
// let a = {name:"milton"};

// a= {name:"milton",id:12};

// console.log(a);




// let value = 10;

// function tricky() {
//    console.log(value); // throw error
//     let value = 20;
//     return function () {
//         console.log(value); // so it not execute
//     };
// }


// const fn = tricky();
// fn();



// function tricky() {
//     console.log(value); // throw error
//     let value = 20;
//     console.log(value); // so it not execute
   
// }

// tricky();


// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i,"let"), 1000);
// }


// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i,"var"), 1000);
// }


// function f(){
//      let a=10 // declare first and use in condition and and out it will work
//     if(true){
//         let a=20; // declare inside it will work inside of the block
//         console.log(a)
//     }
//     console.log(a);
// }

// f()


//loop to prefer

// for(let a=0;a<=2;a++){
// console.log(a);
// }


