typeof 10        // "number"
typeof "hi"      // "string"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" ❌
typeof {}        // "object"
typeof []        // "object"
typeof function(){} // "function"

//What is type coercion?

// Type coercion = JavaScript automatically converting one type into another

// explict
Number("10")
String(10)
Boolean(1)

// Implicit coercion (JS does it)
"5" + 1    // "51"
"5" - 1    // 4

// Object → valueOf() → toString()
// String + anything → string
// - * / → number
// true → 1, false → 0
// null → 0
// undefined → NaN

console.log(null + 1) // output is 1 
// null → 0
// 0 + 1 = 1

console.log(undefined + 1) //output is NAN

// undefined → NaN
// NaN + 1 → NaN

console.log([] + []) //output is ""

// [] → ""
// "" + "" = ""
console.log([] + {}) //output is "[object Object]"

// [] → ""
// {} → "[object Object]"
// "" + "[object Object]"

"10" == 10    // true
"10" === 10   // false
// == → coercion ("10" → 10)
// === → no coercion

new Boolean(false) == false  //true
new Boolean(false) === false //false
// Object → unboxed for ==
// But object ≠ primitive for ===

"5" * "2" // conversion happens

"" == false  //true

// "" → 0
// false → 0
// 0 == 0

[] == false //true

// [] → ""
// "" → 0
// false → 0
// 0 == 0
