const obj = {a:"one",b:"two",c:"three"}

const a = Object.getOwnPropertyNames(obj).length

console.log(obj.a)
console.log(obj['b'])

for(const [key,values] of Object.entries(obj)){
    console.log(key)
}

console.log(a)

//mutation
obj.a = "onevalue"
delete obj.c

console.log("after mutation",obj)

//conversion
const obj2 = [
  ["1", "one"],
  ["2", "two"]
];

console.log(Object.fromEntries(obj2));
const arr = ["1", "2"];

const obj = Object.fromEntries(
  arr.map(item => [item, item])
);

console.log(obj);

