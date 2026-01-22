// creating set
const set = new Set();

// mutation:
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)

const set2 = new Set();
//add
set2.add(1)
set2.add(2)
//clear
set2.clear()

console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:2 [] -> set & set has 4 : ', 'color: #be08c8', set.has(4));
//delete
set.delete(5)
//size
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:2 [] -> set size : ', 'color: #be08c8', set.size);
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:2 [] -> set : ', 'color: #be08c8', set);


//iteration

set.forEach(a=>console.log(`iteration${a}`,a))

for(var f of set){
    console.log("iteration on common for",f);
}


//consversion
const a = [1,1,2,2,3,3];
Array.from(a); //Array keyword
const b = [...new Set(a)]  //converting to array
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:2 [] -> b : ', 'color: #818bf8', b);
const obj = {foo:"foo"}

const setfromb = new Set(Object.values(obj))
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:42 [] -> setfromobj : ', 'color: #c8a772', setfromb);


// *************************************************************************************************************************
//map      genrally stores the data in key value pair
// *************************************************************************************************************************


//create
const structure = new Map([['A','a'],['B','b']]);
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:50 [] -> structure : ', 'color: #6849d0', structure);
const map = new Map();

//mutation
map.set('ac','Ac')
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:52 [] -> map : ', 'color: #542513', map);
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:52 [] -> map size : ', 'color: #542513', map.size);

console.log(map.get('ac')) //giving input as key ,get output as value
console.log(map.has('ac')) //check

structure.delete('B')
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:62 [] -> structure : ', 'color: #70ff9e', structure);

structure.clear()
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:62 [] -> structure : ', 'color: #70ff9e', structure);

const testingwithobj = {a:"a"}
const testingwitharr = ["a","b"]

map.set(testingwithobj,1)
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:71 [] -> map : ', 'color: #0459c5', map);
map.set(testingwitharr,2)
map.set('one','2')
map.set("one","2") 
map.set("two",2) // map.set(two,"2") it is error we should not use map like thise
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:71 [] -> map testing with object and array : ', 'color: #a74c4e', map);
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:71 [] -> map testing with object and array : ', 'color: #a74c4e', map.has(testingwithobj));


const o = {on:"ON"}
const p = o
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:82 [] -> p matching with referrence number : ', 'color: #cba411',o===p);


//iteraion
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:71 [] -> map key  : ', 'color: #b6fa5b', map.keys());
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:71 [] -> map value : ', 'color: #b6fa5b', map.values());
console.log('%c🤪 ~ file: b:\program\JavaScript\set&map.js:71 [] -> map entries : ', 'color: #b6fa5b', map.entries());

map.forEach((a,b)=>console.log({"a":a,"b":b}))


for(let [a,b] of map){
    console.log({"A":a}) ///key 
    console.log({"B":b})  ///value
}

// Because each item you get from a Map iteration is an ARRAY.
// ❌ Syntax error
// Because JavaScript expects a single variable in for...of

//conversion


// weekmap and weekset  given variable inside the map or set are week referrence(normally we decaler the reference to non primitive data type)
//  the referrence the object is week if we make referrence null the object will move to garbage collection

// const ws = new WeakSet();

// let obj = { id: 1 };
// ws.add(obj);

// obj = null;

//memory model

// before
// Stack:
//   ws ──▶ Heap(WeakSet)
//   obj ──▶ Heap(Object)

// Heap:
//   WeakSet → ( weak reference → Object )


// after obj = null;
// Stack:
//   ws ──▶ Heap(WeakSet)

// Heap:
//   Object ❌ unreachable → GC removes it



//weekmap
// const wm = new WeakMap();

// let obj = { id: 1 };
// wm.set(obj, "secret");

// obj = null;

//before
// Stack:
//   wm ──▶ Heap(WeakMap)
//   obj ──▶ Heap(Object)

// Heap:
//   WeakMap → ( weak key → "secret" )

//after obj = null:

// Stack:
//   wm ──▶ Heap(WeakMap)

// Heap:
//   Object ❌ unreachable → GC removes it
//   WeakMap entry ❌ removed automatically

