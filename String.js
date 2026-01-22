//create

let name = "Milton";
name[3] = "r" // it wont happen  because Strings are immutable, so operations create new strings.
console.log(name)

console.log(name.length)
console.log(name[1])
console.log(name.charCodeAt(2))
console.log("aap".length)


// string indexing
console.log("aap"[1])
// character indexing
console.log(name.charAt(2))

//string indexing and character indexing difference
console.log("aap"[10])  // output will be undefined
console.log(name.charAt(10)) // output will be ""


// JS strings are UTF-16 encoded, not true characters.
let s = "😊";
console.log(s.length); // output 2 


for (const ch of "😊a") {
  console.log(ch);
}
/// the length of emoji is 2 if we loop it will execute correctly

// string mutation
let longname = "photoshop";
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:35 [] -> longname.slice(-4) : ', 'color: #e5e573', longname.slice(-4));
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:37 [] -> longname.slice(0,4) : ', 'color: #44ce60', longname.slice(0,5)); //start letter and Letter before end letter
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:39 [] -> str.substring(start, end) : ', 'color: #6ec67d', longname.substring(0, 5)); //start letter and Letter before end letter and it will not support negative value
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:39 [] -> str.slice(start, end) negative : ', 'color: #6ec67d', longname.slice(-3,-1)); //start letter and Letter before end letter and it will select between the range
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:39 [] -> str.substring(start, end) negative : ', 'color: #6ec67d', longname.substring(-2, -1)); // output will be ""
//str.substr(start, length)  deprecated

// search

let sentence = "A man find the way wrong"
let txt = "miltonok"
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:45 [] -> txt : ', 'color: #2bd4e2', txt);
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:45 [] -> sentence.includes : ', 'color: #449d12', sentence.includes("man"));
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:45 [] -> sentence.includes : ', 'color: #449d12', txt.includes("m"));  // it will find the letter as individual 
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:45 [] -> sentence.includes : ', 'color: #449d12', txt.includes("mil"));  // it will also find the word as well in if it is exactly match
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:45 [] -> sentence.includes : ', 'color: #449d12', txt.includes("notlim"));  // it will not match because the word exact in the txt
console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:45 [] -> sentence.indexof : ', 'color: #449d12', txt.indexOf("no")); //if we want to find the particular letter or word if it is not it will show output as -1

// | Method       | Use           |
// | ------------ | ------------- |
// | `indexOf`    | find position |
// | `includes`   | just yes/no   |
// | `startsWith` | prefix check  |
// | `endsWith`   | suffix check  |


//iteration

let newtxt = "milton vinciline v";

// for(let i = 0;i <= newtxt.length;i++){
//     console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:66 [] -> for loop : ', 'color: #0fba26', newtxt[i]);
// }

// newtxt.forEach(element => {
//         console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:66 [] -> for loop : ', 'color: #0fba26', ele
// ment);
// });

// newtxt.split("").forEach(element => {
//         console.log('%c🤪 ~ file: b:\program\JavaScript\String.js:66 [] -> for loop : ', 'color: #0fba26', element);
// });

// for (const ch of newtxt) {
//   console.log(ch);
// }


// UTF-16 encode "cat" → ['c','a','t'] (read-only)


// let s = "";
// for (let i = 0; i < 10000; i++) {
//   s += "a";
// }

// "a"
// "aa"
// "aaa"
// "aaaa"
// ...

// Copies previous string

// Allocates new memory

// O(n) each time

// Total becomes O(n²) 

let Namecheck = "Vishal";
let anotherName = "Vishal";
console.log("local compare",Namecheck.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)

let t = "hello";
t[0] = "H";
console.log(t); // "hello"
let tt = t + "!";

console.log(t);   // "hello"
console.log(tt);  // "hello!"


let m = "milton"
let v = m

v+="s"

console.log(m)
console.log(v)


for (let i in "dog") {
  console.log(i);
}
// iterate over index value

let y = "hello";
let obj = { value: y };

obj.value += "!";

console.log(obj.value); // "hello!"
console.log(y);         // "hello"

// let s = "hello";
// Stack:
//   s ─────▶ Heap: "hello"
// let ss = s + "!";


// Heap:
//   "hello"   (old)
//   "hello!"  (new)

// Stack:
//   s  ─────▶ "hello"
//   ss ─────▶ "hello!"

// "hello"  ≈  ['h','e','l','l','o']   (READ-ONLY)


//split and join
let str = "kumar"
console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));


//startswith and endswith
console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true

// remove unnessary space infront and back
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

const num = 123;
console.log(num, typeof num.toString());


const object = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(object, JSON.stringify(object));



//concatenation
const firstName = "Rajput";
const lastName = "Rajput";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));



//object wrapper
let s1 = "test";                 // primitive string
let s2 = new String("test");     // String OBJECT

console.log(s1 === s2); // false

console.log(s2.valueOf()); // "test"
console.log(s1 === s2.valueOf()); // true
let strObj = new String("hi");
let numObj = new Number(10);
let boolObj = new Boolean(true);
// | Primitive | Object wrapper |
// | --------- | -------------- |
// | string    | `String`       |
// | number    | `Number`       |
// | boolean   | `Boolean`      |
// | bigint    | `BigInt`       |
// | symbol    | ❌ no wrapper   |

"test".toUpperCase() 

new String("test").toUpperCase() //internally process in js


// Rope Data Structure (Text Editor concept)
// 🔹 What is a Rope?

// A rope is a tree-based string structure designed for fast insert, delete, and concat.

// "HelloWorld"

//         (+)
//        /   \
//    "Hello" "World"

// | Operation | Normal string | Rope     |
// | --------- | ------------- | -------- |
// | Insert    | O(n)          | O(log n) |
// | Delete    | O(n)          | O(log n) |
// | Concat    | O(n)          | O(1)     |

// Piece Table (Used by REAL editors)
// 🔹 What is a Piece Table?

// A piece table keeps the original text untouched and stores edits separately.

// Ropes & piece tables solve large text editing efficiently

// Editors NEVER modify strings directly

//autoboxing concept

"hello".toUpperCase();

//internall operation
// let temp = new String("hello");
// temp.toUpperCase();
// temp = null; // discarded

// Stack:
//   s ──▶ "hi"

// Heap:
//   "hi"               (primitive)
//   temp String object (created temporarily)

// temp object destroyed
// "hi" remains unchanged

// Wrapper exists only during method call
// Garbage collected immediately
// Original primitive unchanged


// let s2 = new String("test");

// if(s2){
//     console.log("okay") it will execute because object always return true
// }
// Object is always truthy

// | Feature      | Boxing | Auto-boxing |
// | ------------ | ------ | ----------- |
// | Manual?      | Yes    | No          |
// | Visible?     | Yes    | No          |
// | Recommended? | ❌ No   | ✅ Yes       |
// | Performance  | Slower | Optimized   |

// Does JavaScript have UNBOXING?

// Yes.

// Unboxing = extracting the primitive value from an object wrapper

// let sObj = new String("hi");
// sObj.valueOf(); // "hi"

// Unboxing during concatenation
let sObj = new String("hi");
console.log(sObj + "!");

//internal
// sObj.valueOf() + "!"

// output : "hi!"

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



