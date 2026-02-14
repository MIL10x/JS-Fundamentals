// | Type Name   | Category  | Value Behavior      |
// | ----------- | --------- | ------------------- |
// | `String`    | Primitive | Copied by value     |
// | `Number`    | Primitive | Copied by value     |
// | `BigInt`    | Primitive | Copied by value     |
// | `Boolean`   | Primitive | Copied by value     |
// | `Undefined` | Primitive | Copied by value     |
// | `Null`      | Primitive | Copied by value     |
// | `Symbol`    | Primitive | Copied by value     |
// | `Object`    | Reference | Copied by reference |
// | `Array`     | Reference | Copied by reference |
// | `Function`  | Reference | Copied by reference |
// | `Date`      | Reference | Copied by reference |
// | `Map`       | Reference | Copied by reference |
// | `Set`       | Reference | Copied by reference |

let trysymbol = Symbol('id')
console.log(trysymbol)

let a = 17.8 // floating point value it follow the IEEE 754 standard for double-percision floating-point arithmetic



//special numerical value
let b = Infinity
let c = -Infinity
let d = NaN 
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:23 [] -> b value : ', 'color: #979977', b);
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:23 [] -> b type : ', 'color: #979977',typeof b);
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:25 [] -> c value : ', 'color: #e5809e', c);
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:25 [] -> c type : ', 'color: #e5809e',typeof c);
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:25 [] -> d value : ', 'color: #bc367f', d);
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:25 [] -> d type : ', 'color: #bc367f',typeof d);


// Differents between null and undefined

// if system doesn't know is undefined
// if developer doesn't know is null

let e 
let f = null
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:44 [] -> e value : ', 'color: #f78e9d', e);
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:44 [] -> e type : ', 'color: #f78e9d',typeof e);
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:45 [] -> f value : ', 'color: #1d4d64', f);
console.log('%c🤪 ~ file: b:\program\JavaScript\datatype.js:45 [] -> f  type : ', 'color: #1d4d64',typeof f);

