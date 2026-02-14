const arr = [1, 2, 3, 4, "Hello", {name: "Vishal"}, [1,2,3], 4];
// const arr2 = new Array();
console.log(arr);


const firstElement = arr[0]; // O(1)
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log('%c🤪 ~ file: b:\program\JavaScript\array.js:7 [] -> lastElement : ', lastElement);
console.log(firstElement, arrLength, lastElement);


const arr1 = [1,2,3]
for(const b of arr1){
    console.log(b)
} 
console.log(arr.map(a=>a+1))

//Note:foreach will not give return value ,time complexity as same as normal loops
const num = [1,2,3]
arr.forEach(a=>{
    console.log(a+2)
})

//concatination
let arr1a = [1,2,3,4]
let arr2 = [5,6,7,8]

let arr3 = [...arr1a,...arr2]

console.log("combined array:",arr3)

// Array utilities
function checkarray(a){
    if(Array.isArray(a)){
        console.log("yes it is array")
    }else{
        console.log("it is not an array")
    }
}
checkarray(arr3)

// splice can able delete the element in range and able to insert the data also
let arrss = [1,2,3,4,5,6,7,8,9];
console.log(arrss);
arrss.splice(1, 3);
console.log("splice",arrss);
arrss.splice(1, 0, 2, 3, 4, 5, 6);
console.log("splice2",arrss);
arrss.splice(1, 3, 6, 7, 8);
console.log("splice3",arrss);

let checkslice = [0,1,2,3,4,5]
let sliceelement = checkslice.slice(1,-1)
console.log("sliced element",sliceelement)

// slice() is a SHALLOW COPY

// | Feature           | slice          | splice           |
// | ----------------- | -------------- | ---------------- |
// | Modifies original | ❌ No           | ✅ Yes            |
// | Return            | New array      | Removed elements |
// | Insert elements   | ❌ No           | ✅ Yes            |
// | Remove elements   | ❌ No           | ✅ Yes            |
// | Use case          | Copy / extract | Edit             |


// shallow copy
const arrB = arr;
console.log("shallow copy",arrB)

//deep copy as like but actually what happaening is
// | Case    | Why                  |
// | ------- | -------------------- |
// | Numbers | No references → safe |
// | Objects | References → shared  |
// if we primitive means no problem it act like deep copy, if we issue reference data type then it is act like shallow copy

let a = [1,2,3,4,5]
let b = a.map((a)=>a*2)
console.log("checking as deep copy","a",a[0],"b",b[0]);
// const arrC = [...arr];
const arrD = Array.from(arr);
console.log("deep copy",arrD)


// deep copy 
const originalArr = [{ id: 1, value: 'a' }];

// Creates a true deep copy
const deepCopyArr = structuredClone(originalArr);

console.log(deepCopyArr); // [{ id: 1, value: 'a' }]

// Modify the nested object in the deep copy
deepCopyArr[0].value = 'b';

console.log(deepCopyArr[0].value); // 'b'
console.log(originalArr[0].value); // 'a' - the original remains unchanged!

// const isArrayEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length){
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i]){
//             return false;
//         }
//     }
//     return true;

    // One Line solution
    // return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);
// }

// console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));

const yarr = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattedArray = yarr.flat(2);
console.log("flated array",flattedArray);

const varr = [1,2,3,[1,2],4]
const flattedArray2 = yarr.flat(2);
console.log("flated array2",flattedArray2);


//Note:mutation
arr.unshift(5) // add at first
arr.unshift(1, 2, 3); //multiple elements
console.log(arr)
arr.shift() //remove at first
console.log(arr)
arr.push(1)  // add at last
arr.push(3, 4, 5); //we can add multiple elements also
console.log(arr)
arr.pop() // remove at last
console.log(arr)



//conversion
const obj={
    foo:"FOO",boo:"BOO"
}
const x = Object.values(obj)
console.log("conversion 1",x)
const y = Object.entries(obj)
console.log("conversion 2",y)
const z = Object.keys(obj)
console.log("conversion 3",z)

const ab = [1,2,3,4]
console.log('%c🤪 ~ file: b:\program\JavaScript\array.js:153 [] -> ab : ', 'color: #220e57', ab.toString());
 

// Object.assign(target, ...sources)
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const result = Object.assign({}, obj1, obj2);

// console.log(result);
// { a: 1, b: 2 }

// const obj1 = { a: 1 };
// const obj2 = { a: 5, b: 2 };

// Object.assign({}, obj1, obj2);

// { a: 5, b: 2 }



function add(num1, num2) {
  console.log("argument",[...arguments]);
  return num1 + num2 + arguments[2];
}
const result = add(2, 3, 5, 7);
console.log(result);



// | Utility                 | Time Complexity |
// | ----------------------- | --------------- |
// | `Array.isArray()`       | O(1)            |
// | `push / pop`            | O(1)            |
// | `shift / unshift`       | O(n)            |
// | `map / filter / reduce` | O(n)            |
// | `includes / indexOf`    | O(n)            |
// | `sort()`                | O(n log n)      |
// | `splice()`              | O(n)            |
// | `slice()`               | O(n)            |
// | `Object.keys()`         | O(n)            |


// If an operation touches every element → O(n)
// If it shifts elements → O(n)
// If it nests loops → O(n²)
// If it only checks type or index → O(1)