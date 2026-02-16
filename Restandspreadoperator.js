"use strict"

let a = [1,2,3,4,5]

// array rest:

let [first,second] = a

console.log('first:', first)
console.log('second:', second)

let b = {
    c:"apple",
    d:"ball"
}

// object rest:
const {c,d} = b
console.log('c:', c)
console.log('d:', d)


// array spread

let e = [1,2,3]
let f = [4,5,6]
let g = [...e,...f]

console.log('g:', g)


// string spread 

let name = "milton";
console.log('name:', [...name])



